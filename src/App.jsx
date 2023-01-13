import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Article from "./components/Articles/Article";
import Articles from "./components/Articles/Articles";
import { Error404 } from "./components/Error404";
import Header from "./components/Header/Header";
import Topics from "./components/Topics/Topics";

function App() {
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
                <Topics setErr={setErr} err={err} />
                <Articles />
              </>
            }
          />
          <Route
            path="/:topic"
            element={
              <>
                <Topics setErr={setErr} err={err} />
                <Articles />
              </>
            }
          />
          <Route
            path="/articles"
            element={
              <>
                <Topics setErr={setErr} err={err} />
                <Articles />
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
