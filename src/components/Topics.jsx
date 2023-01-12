import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles, getTopics } from "../api";
import "./Topics.scss";

function Topics({ articles, setArticles }) {
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
      });
  };
  const getAllArticles = () => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  };

  // <Link to={`/articles/?topic=${article.topic}`} > </Link>

  return (
    <nav className="topics">
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
      <div className="topic">
        <button onClick={() => getAllArticles()}>All</button>
      </div>
    </nav>
  );
}

export default Topics;
