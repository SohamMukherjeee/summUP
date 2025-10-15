import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FaRegCopy } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../auth";
import summarizeArticle from "../summarize";
import { useNavigate } from "react-router-dom";

function AfterText() {
  const [url, setUrl] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareId, setShareId] = useState(null);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSummarize = async () => {
    if (!url) return;
    setLoading(true);
    setSummary("");

    try {
      const { summary, title } = await summarizeArticle(url); // ✅ Fix here
      setSummary(summary);
      setTitle(title);
    } catch (error) {
      setSummary("Failed to summarize the article.");
    } finally {
      setLoading(false);
    }
  };
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
      <div className="flex flex-col justify-center items-center min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <div className="my-20 flex flex-col sm:flex-row gap-10 sm:gap-20">
          <div>
            <input
              type="url"
              className="input validator w-[300px] sm:w-[700px] border-2"
              required
              placeholder="Paste the URL of the article here"
              value={url}
              pattern="https?://.+"
              title="Must be valid URL"
              onChange={(e) => setUrl(e.target.value)}
            />
            <p className="validator-hint">Must be valid URL</p>{" "}
          </div>
          <button
            className="btn btn-soft"
            onClick={handleSummarize}
            disabled={loading}
          >
            {loading ? "Summarizing..." : "Submit"}
          </button>
        </div>
        <div className="relative w-[300px] sm:w-[850px]">
          <textarea
            className="textarea w-full h-[250px] sm:h-[300px]  text-md sm:text-lg pr-10 "
            placeholder="Summary will appear here"
            disabled
            value={summary}
          ></textarea>

          {summary && (
            <button
              className="absolute top-2 right-5 text-gray-600 hover:text-black hover:cursor-pointer "
              onClick={handleCopy}
              disabled={!summary}
            >
              {copied ? "Copied!" : <FaRegCopy />}
            </button>
          )}
        </div>
        {summary && (
          <div className="flex justify-center items-center flex-row mt-10 gap-x-5">
            <button
              className="btn btn-success flex items-center gap-2 btn-sm self-end"
              onClick={handleWhatsAppShare}
              disabled={!summary}
            >
              <FaWhatsapp /> Share it to whatsapp
            </button>
            <button
              onClick={handleCreateShareLink}
              className="btn btn-success flex items-center gap-2 btn-sm self-end"
            >
              <IoMdShare />
              Create Shareable Link
            </button>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}
export default AfterText;
