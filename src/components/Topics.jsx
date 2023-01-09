import { useEffect, useState } from "react";
import { getTopics } from "../api";
import "./Topics.scss";

function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <nav className="topics">
      {topics.map((topic) => {
        return <span key={Math.random()}>{topic.slug}</span>;
      })}
    </nav>
  );
}

export default Topics;
