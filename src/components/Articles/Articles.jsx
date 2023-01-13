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
              <h5>{article.title.slice(0, 20)}...</h5>
              <p className="card_details"> {article.topic} </p>
              <p className="card_details"> {article.author} </p>
              <p className="card_details"> {date.toLocaleDateString()} </p>
              <p className="read_more">Read More</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Articles;
