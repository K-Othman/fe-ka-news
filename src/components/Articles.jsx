import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api";

import "./Articles.scss";

function Articles({ articles, setArticles }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="isLoading">Loading...</p>;
  }
  return (
    <div className="cardHolder container ">
      {articles.map((article) => {
        const date = new Date(article.created_at);

        return (
          <Link
            to={`/articles/${article.article_id}`}
            key={article.article_id}
            className="card"
          >
            <div>
              <h5>{article.title.slice(0, 20)}...</h5>
              <p> {article.topic} </p>
              <p> {article.author} </p>
              <p> {date.toLocaleDateString()} </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Articles;
