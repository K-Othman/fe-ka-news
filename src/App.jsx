import { Route, Routes } from "react-router-dom";
import Article from "./components/Article";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Topics from "./components/Topics";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Topics />
                <Articles />
              </>
            }
          />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
