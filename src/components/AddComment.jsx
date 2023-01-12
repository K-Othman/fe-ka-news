import { useState } from "react";
import { postNewComment } from "../api";

function AddComment({ article_id, setComments }) {
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    postNewComment(article_id, newComment)
      .then((data) => {
        setIsLoading(false);
        setNewComment("");
        return setComments((currComments) => {
          return [data.data.comment, ...currComments];
        });
      })
      .catch((err) => {
        setErr("Sorry Something went wrong");
        setIsLoading(false);
      });
  };
  if (isLoading) {
    return (
      <p className="isLoading">Please wait while we are sending your comment</p>
    );
  }
  if (err) {
    return <p className="isLoading"> {err} </p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="add_comment">
        <label htmlFor="Adding Comment">Add Comment : </label>
        <input
          required
          value={newComment}
          type="text"
          onChange={(e) => setNewComment(e.target.value)}
        />
      </div>
      <button type="submit">Add Comment</button>
    </form>
  );
}

export default AddComment;
