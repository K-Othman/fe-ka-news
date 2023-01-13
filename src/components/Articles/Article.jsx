import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle_id } from "../../api";
import "./Article.scss";
import Comments from "../Comments/Comments";
import Vote from "./Vote";
import { Error404 } from "../Error404";

function Article({ setErr, err }) {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticle_id(article_id)
      .then(({ article }) => {
        setArticle(article);
      })
      .catch((err) => setErr(err));
  }, [article_id, setErr]);

  if (err) {
    return (
      <main>
        <Error404 />
      </main>
    );
  }

  const date = new Date(article.created_at);

  return (
    <section className="article container ">
      <h4> {article.title} </h4>
      <p className="body">{article.body}</p>
      <p className="author"> {article.author} </p>
      <p className="topic"> {article.topic} </p>
      <p className="date"> {date.toLocaleDateString()} </p>
      <Vote
        article_id={article.article_id}
        votes={article.votes}
        setErr={setErr}
        err={err}
      />

      <Comments article_id={article_id} />
    </section>
  );
}

export default Article;
