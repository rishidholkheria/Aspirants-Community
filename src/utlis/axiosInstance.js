import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=${process.env.REACT_APP_NEWS_KEY}`,
});

