import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle_id } from "../../api";
import "./Article.scss";
import Comments from "../Comments/Comments";
import Vote from "./Vote";
import { Error404 } from "../Error404";
import * as React from "react";

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
    <section>
      <div className="article container ">
        <div className="article_header">
          <p className="date"> Published at {date.toLocaleDateString()} </p>
          <p className="topic"> {article.topic} </p>
        </div>
        <h4> {article.title} </h4>
        <div className="author_like">
          <p className="author">By {article.author} </p>
          <div className="like">
            <p>
              {article.votes}{" "}
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path
                  className="likes_icon"
                  d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 00471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"
                />
              </svg>
            </p>
            <p className="recom">Recommencations</p>
          </div>
        </div>
        <p className="body">{article.body}</p>

        <Vote
          article_id={article.article_id}
          votes={article.votes}
          setErr={setErr}
          err={err}
        />
      </div>

      <Comments className="article " article_id={article_id} />
    </section>
  );
}

export default Article;
