import { useEffect, useState } from "react";
import { Link, useSearchParams, useParams } from "react-router-dom";
import { getArticles } from "../../api";

import "./Articles.scss";

function Articles({ setErr }) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState([]);

  const slug = searchParams.get("topic");

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getArticles(topic).then((articles) => {
      if (topic) {
        setArticles(
          articles.filter((article) => {
            return article.topic === topic;
          })
        );
      } else {
        setArticles(articles);
      }

      setIsLoading(false);
    });
  }, [topic]);

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
              <p className="date"> Published at {date.toLocaleDateString()} </p>
              <h5>{article.title}</h5>
            </div>
            <div className="article-info">
              <p className="topic-and-autor">
                By {article.author} / {article.topic}
              </p>
              <p className="read-article">Read Article</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Articles;
