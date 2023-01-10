import { useState } from "react";
import { patchVoteByVoteId } from "../api";

function Vote({ votes, article_id }) {
  const [votesChange, setVotesChange] = useState(0);

  const incVote = () => {
    setVotesChange((currVotes) => currVotes + 1);
    patchVoteByVoteId(article_id, 1);
  };
  const decVote = () => {
    setVotesChange((currVotes) => currVotes - 1);
    patchVoteByVoteId(article_id, 1).catch((err) => {
      return "Sorry Something Went Wrong";
    });
  };

  return (
    <section>
      <p> Votes : {votes + votesChange} </p>
      <button onClick={incVote}> add </button>
      <button onClick={decVote}> remove </button>
    </section>
  );
}

export default Vote;
