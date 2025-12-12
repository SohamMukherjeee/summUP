import { useState, useEffect } from "react";
import { Loader2, Copy, Share2, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import summarizeArticle from "../components/summarize";
import Navbar from "../components/Navbar";

// imp
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../components/auth";
import { useNavigate } from "react-router-dom";

function BoxInput() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  // navigate
  const navigate = useNavigate();

  // loading steps
  const loadingSteps = [
    "$ curl -X GET analyzing...",
    "$ parsing DOM structure...",
    "$ extracting content blocks...",
    "$ running NLP analysis...",
    "$ generating insights...",
    "$ compiling summary...",
  ];

  // cycle through loading steps
  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev + 1) % loadingSteps.length);
      }, 1200);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(interval);
  }, [loading]);

  // Summarize
  const handleSummarize = async () => {
    if (!url) return;
    setLoading(true);
    setSummary("");

    try {
      const { summary, title } = await summarizeArticle(url);
      setSummary(summary);
      setTitle(title);
    } catch (error) {
      setSummary("Failed to summarize the article.");
    } finally {
      setLoading(false);
    }
  };

  // Copy
  const handleCopy = async () => {
    if (!summary) return;
    try {
      const newSums = summary + "\n\nUse summUp to summarize your daily News!";

      await navigator.clipboard.writeText(newSums);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // WhatsApp
  const handleWhatsAppShare = () => {
    if (!summary) return;
    const newSums =
      `*${title}*` +
      "\n\n\n" +
      summary +
      "\n\nUse summUp to summarize your daily News!";

    const encodedText = encodeURIComponent(newSums);
    const whatsappUrl = `https://wa.me/?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };
  // share link
  async function handleCreateShareLink() {
    const disclaimer = `
⚠️ Share Responsibly

- This summary is for personal, non-commercial use only.
- You are solely responsible for how and where you share this link.
- We are not affiliated with any news publishers.
- Do not post this link publicly or for promotional purposes.

Do you accept these terms and wish to continue?
`;

    const confirmed = window.confirm(disclaimer);

    if (!confirmed) return;

    const docRef = await addDoc(collection(db, "summaries1"), {
      summary,
      newsTitle: title,
      originalUrl: url,
      createdAt: new Date(),
      expiresAt: Timestamp.fromDate(
        new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
      ),
    });

    navigate(`/news?id=${docRef.id}`);
  }

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <div className="bg-[#F2F1ED] min-h-screen flex flex-col items-center justify-center px-4">
          {/* Title */}
          <h1
            className="text-7xl font-semibold text-gray-800 text-center"
            style={{
              fontFamily: "Instrument Serif, serif",
              fontWeight: "400",
            }}
          >
            summup
            <span className="inline-block align-middle text-red-400">.</span>
          </h1>
          <p className="text-lg  text-gray-400 text-center font-sans">
            Transform lengthy content into concise, meaningful summaries
          </p>

          {/* Input + Button */}
          <div className="mt-8 w-full max-w-2xl bg-white/70 backdrop-blur-xl shadow-md rounded-2xl p-4 flex flex-col gap-4 items-center">
            <span className="absolute inset-1 rounded-xl border border-black/5 pointer-events-none"></span>

            <input
              type="url"
              placeholder="Paste your link here..."
              className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-700 text-black w-full"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={loading}
            />
            <button
              onClick={handleSummarize}
              disabled={loading}
              className={`flex justify-center items-center px-6 py-2 rounded-xl text-white font-medium shadow transition w-full
    ${
      loading
        ? "bg-gray-600 cursor-not-allowed"
        : "bg-gray-800 hover:bg-gray-600 hover:cursor-pointer"
    }
  `}
            >
              {loading ? (
                <>
                  <span className="font-mono text-xs md:text-sm ">
                    {loadingSteps[loadingStep]}
                    <span className="animate-pulse">_</span>
                  </span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" /> Summarize
                </>
              )}
            </button>
          </div>

          {/* Summary Section */}
          {summary && (
            <div className="mt-8 w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-2xl shadow-md p-6">
              <span className="absolute inset-1 rounded-xl border border-black/5 pointer-events-none"></span>

              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Executive Summary
              </h2>
              <p className="text-gray-700">{summary}</p>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6 justify-center">
                <button
                  className="flex items-center gap-2  hover:text-gray-700 hover:cursor-pointer px-4 py-2 rounded-lg text-gray-400"
                  onClick={handleCopy}
                >
                  {copied ? "Copied!" : <Copy className="w-4 h-4" />}
                  {copied ? "" : "Copy"}
                </button>

                <button
                  className="flex items-center gap-2 text-gray-400 hover:text-green-300 hover:cursor-pointer px-4 py-2 rounded-lg"
                  onClick={handleWhatsAppShare}
                >
                  <FaWhatsapp className="w-5 h-5" /> WhatsApp
                </button>

                <button
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 hover:cursor-pointer px-4 py-2 rounded-lg"
                  onClick={handleCreateShareLink}
                >
                  <Share2 className="w-5 h-5" /> Share
                </button>
              </div>
            </div>
          )}
          <div className="text-center my-19 flex-col text-gray-400 text-sm">
            <h2>
              Some content may be limited due to website protection policies.{" "}
            </h2>
            <h3 className="text-gray-300">
              Built with care for better reading
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxInput;
