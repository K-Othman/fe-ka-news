import "./Comments.scss";
import { useEffect, useState } from "react";
import { deleteComment, getCommentsByArticleId } from "../../api";
import AddComment from "./AddComment";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getAllComments();
  }, [article_id]);

  const getAllComments = () => {
    getCommentsByArticleId(article_id).then(({ comments }) => {
      setComments(comments);
    });
  };

  const deleteCommentHandle = (comment_id) => {
    deleteComment(comment_id).then((data) => {
      getAllComments();
    });
  };

  return (
    <>
      <h3>Comments</h3>
      <div className="comments">
        <AddComment article_id={article_id} setComments={setComments} />
        {comments.map((comment) => {
          const date = new Date(comment.created_at);
          return (
            <div key={comment.created_at} className={"commentHolder"}>
              <h5> {comment.author} </h5>
              <p className="body"> {comment.body} </p>
              <p className="date">Comment date: {date.toLocaleDateString()}</p>
              <p className="votes"> Votes: {comment.votes} </p>
              <button onClick={() => deleteCommentHandle(comment.comment_id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Comments;
