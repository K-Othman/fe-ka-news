import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles, getTopics } from "../../api";
import { Error404 } from "../Error404";
import "./Topics.scss";

function Topics({ articles, setArticles, setErr, err }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);
  const topicsFilterHandler = (slug) => {
    getArticles()
      .then((articles) => {
        return articles.filter((article) => {
          return article.topic === slug;
        });
      })
      .then((topic_name) => {
        setArticles(topic_name);
      })
      .catch((err) => setErr(err));
  };
  const getAllArticles = () => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  };

  if (err) {
    return <Error404 />;
  }

  return (
    <nav className="topics container">
      {topics.map((topic) => {
        return (
          <Link
            to={`/articles?topic=${topic.slug}`}
            key={topic.slug}
            className={"topic"}
          >
            <button
              onClick={() => {
                topicsFilterHandler(topic.slug);
              }}
            >
              {topic.slug}
            </button>
          </Link>
        );
      })}
      <Link to={`/articles`}>
        <div className="topic">
          <button onClick={() => getAllArticles()}>All</button>
        </div>
      </Link>
    </nav>
  );
}

export default Topics;
