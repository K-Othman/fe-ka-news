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

export const getCommentsByArticleId = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};
export const patchVoteByVoteId = (article_id, increament) => {
  return newsApi
    .patch(`/articles/${article_id}`, {
      vote: increament,
    })
    .then((res) => console.log(res));
};
