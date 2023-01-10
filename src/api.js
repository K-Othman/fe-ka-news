import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://karims-news.onrender.com/api/",
});

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const getArticle_id = (article_id) => {
  return newsApi.get(`articles/${article_id}`).then((res) => {
    return res.data;
  });
};
