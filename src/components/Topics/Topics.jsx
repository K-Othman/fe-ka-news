import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles, getTopics } from "../../api";
import { Error404 } from "../Error404";
import "./Topics.scss";

function Topics({ setErr, err }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics()
      .then((topics) => {
        setTopics(topics);
      })
      .catch((err) => setErr(err));
  }, [setErr]);

  if (err) {
    return <Error404 />;
  }

  return (
    <nav className="topics container">
      <Link className="topic" to={"/store"}>
        Trending
      </Link>
      {topics.map((topic) => {
        return (
          <Link to={`/${topic.slug}`} key={topic.slug} className={"topic"}>
            {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
          </Link>
        );
      })}
    </nav>
  );
}

export default Topics;
