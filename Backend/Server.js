import cors from "cors";
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import admin from "firebase-admin";
import { readFileSync } from "fs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const HF_API_TOKEN = process.env.HF_API_TOKEN;

app.use(cors());
app.use(express.json());
// admin safely initialized

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: process.env.FIREBASE_TYPE,
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
    }),
  });
}

// Middleware: Verify Firebase ID Token
async function verifyAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const idToken = authHeader.split(" ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Auth Error:", error);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

// Summarization function
async function summarizeArticle(text) {
  try {
    const response = await fetch(process.env.API_LINK, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: text.slice(0, 2000), // limit to avoid model overload
        parameters: {
          min_length: 200,
          max_length: 300,
          do_sample: false,
        },
      }),
    });

    const result = await response.json();

    if (Array.isArray(result) && result[0].summary_text) {
      return result[0].summary_text;
    } else {
      console.error("Summarization error:", result);
      return "Failed to summarize.";
    }
  } catch (err) {
    console.error("Hugging Face API error:", err);
    return "Error contacting summarization service.";
  }
}

// Main extract route with lazy imports
app.post("/extract", verifyAuth, async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "URL is required" });

  try {
    const response = await fetch(url);
    const html = await response.text();

    // Lazy-load heavy modules only when needed
    const { JSDOM } = await import("jsdom");
    const { Readability } = await import("@mozilla/readability");

    const dom = new JSDOM(html, { url });
    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    if (!article || !article.textContent) {
      return res
        .status(500)
        .json({ error: "Failed to extract article content" });
    }

    const summary = await summarizeArticle(article.textContent);

    res.json({
      newsUrl: url,
      title: article.title,
      content: article.textContent,
      summary: summary,
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed to extract or summarize article",
      details: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
