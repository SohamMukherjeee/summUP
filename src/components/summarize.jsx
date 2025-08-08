// import axios from "axios";

// const SummarizeArticle = async (url) => {
//   const summarizeOptions = {
//     method: "GET",
//     url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
//     params: { url: url, length: "3" },
//     headers: {
//       "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
//       "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
//     },
//   };

//   const extractOptions = {
//     method: "GET",
//     url: "https://article-extractor-and-summarizer.p.rapidapi.com/extract",
//     params: { url: url },
//     headers: {
//       "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
//       "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
//     },
//   };

//   try {
//     const [summaryRes, extractRes] = await Promise.all([
//       axios.request(summarizeOptions),
//       axios.request(extractOptions),
//     ]);

//     return {
//       summary: summaryRes.data.summary,
//       title: extractRes.data.title,
//     };
//   } catch (error) {
//     console.error("Error fetching summary or title:", error);
//     return {
//       summary: "Failed to summarize the article.",
//       title: "",
//     };
//   }
// };

// export default SummarizeArticle;

const SummarizeArticle = async (url) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_PRO_BACKEND_URL}/extract`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      }
    );

    const data = await response.json();

    return {
      summary: data.summary || "Failed to summarize.",
      title: data.title || "",
    };
  } catch (error) {
    console.error("Error contacting local summarizer:", error);
    return {
      summary: "Failed to summarize the article.",
      title: "",
    };
  }
};

export default SummarizeArticle;
