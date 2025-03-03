import axios from "axios";

const SummarizeArticle = async (url) => {
  const options = {
    method: "GET",
    url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
    params: { url: url, length: "3" },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
    },
  };
  try {
    const response = await axios.request(options);
    return response.data.summary;
  } catch (error) {
    console.error("Error fetching summary:", error);
    return "Failed to summarize the article.";
  }
};

export default SummarizeArticle;
