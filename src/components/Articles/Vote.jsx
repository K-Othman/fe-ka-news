import { useState } from "react";
import { patchVoteByVoteId } from "../../api";
import { Error404 } from "../Error404";

function Vote({ votes, article_id, setErr, err }) {
  const [votesChange, setVotesChange] = useState(0);
  const [voteErr, setVotingErr] = useState(false);

  const incVote = () => {
    setVotesChange((currVotes) => currVotes + 1);
    setVotingErr(false);
    patchVoteByVoteId(article_id, 1).catch((err) => {
      setVotingErr(true);
      setVotesChange(votes);
    });
  };
  const decVote = () => {
    setVotesChange((currVotes) => currVotes - 1);
    setVotingErr(false);
    patchVoteByVoteId(article_id, -1).catch((err) => {
      setVotingErr(true);
      setVotesChange(votes);
    });
  };

  return (
    <section>
      <p> Votes : {votes + votesChange} </p>
      {voteErr ? <p>Something Went Wrong</p> : null}
      <span onClick={incVote}> add </span>
      <span onClick={decVote}> remove </span>
    </section>
  );
}

export default Vote;
