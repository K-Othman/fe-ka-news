import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://karims-news.onrender.com/api/",
});

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticles = (topicQuery) => {
  return newsApi
    .get("/articles", {
      params: {
        topic: topicQuery,
      },
    })
    .then((res) => {
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
  return newsApi.patch(`/articles/${article_id}`, {
    inc_votes: increament,
  });
};

export const postNewComment = (article_id, newComment) => {
  return newsApi.post(`/articles/${article_id}/comments`, {
    body: newComment,
    username: "grumpy19",
  });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
};
