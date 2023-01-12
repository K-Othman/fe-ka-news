import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Article from "./components/Article";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Topics from "./components/Topics";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Topics articles={articles} setArticles={setArticles} />
                <Articles articles={articles} setArticles={setArticles} />
              </>
            }
          />
          <Route
            path="/articles"
            element={
              <>
                <Topics articles={articles} setArticles={setArticles} />
                <Articles articles={articles} setArticles={setArticles} />
              </>
            }
          />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
