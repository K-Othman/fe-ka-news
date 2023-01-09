import { useEffect, useState } from "react";
import { getArticles } from "./api";

import Articles from "./components/Articles";
import Header from "./components/Header";
import Topics from "./components/Topics";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, [setArticles]);

  return (
    <>
      <Header />
      <main>
        <Topics />
        <Articles articles={articles} setArticles={setArticles} />
      </main>
    </>
  );
}

export default App;
