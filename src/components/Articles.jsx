import "./Articles.scss";

function Articles({ articles, setArticles }) {
  return (
    <div className="cardHolder container ">
      {articles.map((article) => {
        const date = new Date(article.created_at);

        return (
          <div key={article.article_id} className="card">
            <h5>{article.title.slice(0, 20)}...</h5>
            <p> {article.topic} </p>
            <p> {article.author} </p>
            <p> {date.toLocaleDateString()} </p>
          </div>
        );
      })}
    </div>
  );
}

export default Articles;
