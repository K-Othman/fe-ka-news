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
    <section className="comments container">
      <div className="comment_header">
        <svg
          className="comment_icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M19 8h-1V5a3 3 0 00-3-3H5a3 3 0 00-3 3v12a1 1 0 00.62.92A.84.84 0 003 18a1 1 0 00.71-.29l2.81-2.82H8v1.44a3 3 0 003 3h6.92l2.37 2.38A1 1 0 0021 22a.84.84 0 00.38-.08A1 1 0 0022 21V11a3 3 0 00-3-3zM8 11v1.89H6.11a1 1 0 00-.71.29L4 14.59V5a1 1 0 011-1h10a1 1 0 011 1v3h-5a3 3 0 00-3 3zm12 7.59l-1-1a1 1 0 00-.71-.3H11a1 1 0 01-1-1V11a1 1 0 011-1h8a1 1 0 011 1z" />
        </svg>
        <h3 className="comment_title">Comments</h3>
      </div>
      <div className="">
        <AddComment article_id={article_id} setComments={setComments} />
        {comments.map((comment) => {
          const date = new Date(comment.created_at);
          return (
            <div key={comment.created_at} className={"commentHolder"}>
              {/* <div> */}
              <h5> {comment.author} </h5>
              <p className="body"> {comment.body} </p>
              <p className="date">Comment date: {date.toLocaleDateString()}</p>
              <p className="votes"> Votes: {comment.votes} </p>
              {/* </div> */}
              <button onClick={() => deleteCommentHandle(comment.comment_id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Comments;
