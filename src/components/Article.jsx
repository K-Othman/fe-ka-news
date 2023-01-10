import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle_id } from "../api";
import "./Article.scss";

function Article() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  useEffect(() => {
    getArticle_id(article_id).then(({ article }) => {
      setArticle(article);
    });
  }, [article_id]);

  const date = new Date(article.created_at);

  return (
    <section className="article container ">
      <h4> {article.title} </h4>
      <p className="body">{article.body}</p>
      <p className="author"> {article.author} </p>
      <p className="topic"> {article.topic} </p>
      <p className="votes"> Votes : {article.votes} </p>
      <p className="date"> {date.toLocaleDateString()} </p>
    </section>
  );
}

export default Article;