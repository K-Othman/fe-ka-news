import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Article from "./components/Articles/Article";
import Articles from "./components/Articles/Articles";
import { Error404 } from "./components/Error404";
import Header from "./components/Header/Header";
import Topics from "./components/Topics/Topics";

function App() {
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(null);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Topics
                  articles={articles}
                  setArticles={setArticles}
                  setErr={setErr}
                  err={err}
                />
                <Articles articles={articles} setArticles={setArticles} />
              </>
            }
          />
          <Route
            path="/topics"
            element={
              <>
                <Topics
                  articles={articles}
                  setArticles={setArticles}
                  setErr={setErr}
                  err={err}
                />
                <Articles articles={articles} setArticles={setArticles} />
              </>
            }
          />
          <Route
            path="/articles"
            element={
              <>
                <Topics
                  articles={articles}
                  setArticles={setArticles}
                  setErr={setErr}
                  err={err}
                />
                <Articles articles={articles} setArticles={setArticles} />
              </>
            }
          />
          <Route
            path="/articles/:article_id"
            element={<Article setErr={setErr} err={err} />}
          />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
