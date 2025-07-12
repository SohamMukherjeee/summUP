import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "./Footer";
import { db } from "./auth";
import { doc, getDoc } from "firebase/firestore";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { TbAlertCircle } from "react-icons/tb";

function SharedSummary() {
  const [params] = useSearchParams();
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orUrl, setOriginalUrl] = useState(null);
  const [title, setTitle] = useState("");

  const id = params.get("id");
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      getDoc(doc(db, "summaries1", id)).then((docSnap) => {
        if (docSnap.exists()) {
          setSummary(docSnap.data().summary);
          setOriginalUrl(docSnap.data().originalUrl);
          setTitle(docSnap.data().newsTitle);
        } else {
          setSummary("Summary not found.");
        }
        setLoading(false);
      });
    }
  }, [id]);

  return (
    <>
      <div className="flex flex-col min-h-screen w-screen">
        <div className="border-b border-gray-200 bg-gray-100 text-md px-4 py-2 text-gray-900 mb-5">
          <p className="text-center font-medium">
            Summerize News Article using
            <a
              onClick={() => navigate("/")}
              className="inline-block underline pl-3 hover:cursor-pointer"
            >
              summup
            </a>
          </p>
        </div>
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="w-3/4 text-center">
            {loading ? (
              <div className="h-screen w-screen flex justify-center items-center">
                <span className="loading loading-bars loading-xl"></span>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-5 flex items-center justify-center">
                  Shared News Summary
                  <div
                    className="tooltip tooltip-bottom ml-2 hover:cursor-pointer"
                    data-tip="This summary was shared voluntarily by the user"
                  >
                    <TbAlertCircle className="text-md" />
                  </div>
                </h2>
                <h1 className="text-2xl font-bold my-5">{title}</h1>
                <p className="mb-7">{summary}</p>
                <h1 className="italic">Read the whole news here</h1>
                <p
                  className="text-red-400 underline text-md hover:cursor-pointer hover:text-red-600"
                  onClick={() => window.open(orUrl, "_blank")}
                >
                  {new URL(orUrl).hostname.replace("www.", "")}
                </p>
              </>
            )}
          </div>
          <div className="flex justify-center items-center flex-row mt-10 gap-x-5">
            <button
              className="btn btn-success flex items-center gap-2 btn-sm self-end"
              onClick={() => {
                const encodedText = encodeURIComponent(
                  `*${title}*` +
                    "\n\n" +
                    `${import.meta.env.VITE_APP_BASE_URL}/news?id=${id}`
                );
                const whatsappUrl = `https://wa.me/?text=${encodedText}`;
                window.open(whatsappUrl, "_blank");
              }}
            >
              <FaWhatsapp /> Share it to WhatsApp
            </button>
            <button
              onClick={() => {
                const tweetText = encodeURIComponent(title + "\n"); // add newline here
                const tweetUrl = encodeURIComponent(
                  `${import.meta.env.VITE_APP_BASE_URL}/news?id=` + id
                );
                const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`;
                window.open(twitterUrl, "_blank");
              }}
              className="btn btn-success flex items-center gap-2 btn-sm self-end"
            >
              <FaXTwitter /> Share on X(Twitter)
            </button>
          </div>
        </div>
        <div></div>
        <Footer />
      </div>
    </>
  );
}

export default SharedSummary;
