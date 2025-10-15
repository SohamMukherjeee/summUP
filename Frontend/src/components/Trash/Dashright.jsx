import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../auth";
import summarizeArticle from "../summarize";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Dashright() {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogout() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  }

  const handleSummarize = async () => {
    if (!url) return;
    setLoading(true);
    setSummary("");

    try {
      const result = await summarizeArticle(url);
      setSummary(result);
    } catch (error) {
      setSummary("Failed to summarize the article.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className="mainpage h-screen  flex justify-center flex-col">
          <div className="m1 h-20 flex justify-evenly  items-center flex-row ">
            <h1 className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-gray-300 to-blue-200 bg-clip-text text-transparent">
              summUp
            </h1>
            <span className="inline-flex cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-gray-950 px-4 py-3 text-xs font-medium text-gray-300 backdrop-blur-3xl">
              <span className="bg-gradient-to-t from-[#fff] to-[#8678f9] bg-clip-text text-transparent">
                <a
                  href="https://www.linkedin.com/in/soham-mukherjee-1a411b221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md"
                >
                  By Soham 💻
                </a>
              </span>
            </span>
            <div className="relative h-10 w-30 overflow-hidden rounded-md border border-gray-800 p-[1px] backdrop-blur-3xl">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <button
                className="h-full w-full rounded-md bg-gray-950 text-slate-200 text-center px-4 py-2 backdrop-blur-3xl hover:bg-gray-900 transition-all duration-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="m2 h-40 flex items-center justify-center flex-col sm:flex-row gap-2">
            <div className="relative h-12 w-70 sm:w-200 overflow-hidden rounded-md border border-gray-800 p-[1px] backdrop-blur-3xl">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste your link here"
                className="h-full w-full rounded-md bg-gray-950 px-3 py-2 text-slate-200 text-center sm:text-left placeholder:text-slate-500 backdrop-blur-3xl focus:outline-none"
              />
            </div>

            <div className="relative h-12 w-30 overflow-hidden rounded-md border border-gray-800 p-[1px] backdrop-blur-3xl">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <button
                className="h-full w-full rounded-md bg-gray-950 text-slate-200 text-center px-4 py-2 backdrop-blur-3xl hover:bg-gray-900 transition-all duration-300"
                onClick={handleSummarize}
                disabled={loading}
              >
                {loading ? "Summarizing..." : "Submit"}
              </button>
            </div>
          </div>
          <div className="m3 h-95 flex items-center justify-center">
            <div className="relative h-70 sm:h-60 w-80 sm:w-230 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="h-full w-full rounded-xl bg-gray-950 px-3 py-2 text-sm font-medium text-gray-50 backdrop-blur-3xl overflow-y-auto max-h-69 sm:max-h-60 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                {loading ? (
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <p>
                      <Skeleton count={4} />
                    </p>
                  </SkeletonTheme>
                ) : summary ? (
                  <p>{summary}</p>
                ) : (
                  <p className="text-gray-400">Summary will appear here...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashright;
