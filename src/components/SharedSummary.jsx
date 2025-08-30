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
    <div className="flex flex-col min-h-screen w-screen">
      <div className="border-gray-200 bg-gray-100 text-md px-4 py-4 text-gray-900 border-b-2">
        <p className="text-center font-medium text-lg">
          Summarize News Article using
          <a
            onClick={() => navigate("/")}
            className="inline-block underline pl-3 hover:cursor-pointer"
          >
            Summup
          </a>
        </p>
      </div>

      <div className="flex-grow flex flex-col justify-center items-center bg-[#F2F1ED] px-4 md:px-8">
        <div className="w-full md:w-3/4 text-center">
          {loading ? (
            <div className="h-screen w-screen flex justify-center items-center">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6 flex items-center justify-center text-black">
                Shared News Summary
                <div
                  className="tooltip tooltip-bottom ml-2 hover:cursor-pointer"
                  data-tip="This summary was shared voluntarily by the user"
                >
                  <TbAlertCircle className="text-lg" />
                </div>
              </h2>

              <h1 className="text-3xl font-semibold mb-6 text-black">
                {title}
              </h1>

              <p className="mb-8 text-gray-700">{summary}</p>

              <h2 className="italic text-black text-lg mb-3">
                Read the whole news here
              </h2>
              <p
                className="text-red-400 underline text-lg hover:cursor-pointer hover:text-red-600"
                onClick={() => window.open(orUrl, "_blank")}
              >
                {new URL(orUrl).hostname.replace("www.", "")}
              </p>
            </>
          )}
        </div>

        <div className="flex justify-center items-center flex-col md:flex-row mt-10 gap-x-5 gap-y-4">
          <button
            className="btn btn-success flex items-center gap-2 btn-md self-center md:self-start hover:bg-green-600 transition-all duration-300"
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
            <FaWhatsapp /> Share to WhatsApp
          </button>

          <button
            onClick={() => {
              const tweetText = encodeURIComponent(title + "\n");
              const tweetUrl = encodeURIComponent(
                `${import.meta.env.VITE_APP_BASE_URL}/news?id=` + id
              );
              const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`;
              window.open(twitterUrl, "_blank");
            }}
            className="btn btn-success flex items-center gap-2 btn-md self-center md:self-start hover:bg-blue-500 transition-all duration-300"
          >
            <FaXTwitter /> Share on X (Twitter)
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SharedSummary;
