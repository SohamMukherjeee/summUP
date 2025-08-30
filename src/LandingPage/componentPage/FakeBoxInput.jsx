import { useState, useEffect } from "react";

function FakeBoxInput() {
  const [loading, setLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingSteps = [
    "$ curl -X GET analyzing...",
    "$ parsing DOM structure...",
    "$ extracting content...",
    "$ running NLP analysis...",
    "$ generating insights...",
    "$ compiling summary...",
  ];

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

  return (
    <div className="flex flex-col items-center justify-center mt-9 mb-5 px-4 w-full">
      <h2 className="text-2xl  mb-8 text-center leading-snug  font-sans font-semibold text-gray-400">
        Give the link, <span className="text-gray-600">Summup </span>will do the
        job
        <span className="animate-bounce inline-block ml-2">🚀</span>
      </h2>

      <div className="relative flex flex-col items-center p-8 w-full sm:w-2/5 ">
        {/* Fake input + button */}
        <div className="w-full bg-white/70 backdrop-blur-xl shadow-md rounded-2xl p-4 flex flex-col gap-4 items-center relative">
          <span className="absolute inset-1 rounded-xl border border-black/5 pointer-events-none"></span>

          <input
            type="url"
            placeholder="Paste your link here..."
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none text-black w-full cursor-not-allowed bg-gray-100"
            value="https://economictimes.indiatimes.com/tech/information-tech/vibe-meets-value-ai-coding-prompts-multi-million-workflows/articleshow/123590923.cms?from=mdr"
            disabled
          />

          <button
            disabled
            className="flex justify-center items-center px-6 py-2 rounded-xl text-white font-medium shadow transition w-full bg-gray-600 cursor-not-allowed"
          >
            <span className="font-mono text-xs md:text-sm text-left">
              {loadingSteps[loadingStep]}
              <span className="animate-pulse">_</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FakeBoxInput;
