import { useDispatch, useSelector } from 'react-redux';
import { increaseVote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import { createSelector } from '@reduxjs/toolkit';

const AnecdoteList = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector((state) => {
    return state.anecdotes
      .filter((anecdote) =>
        anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
      )
      .sort((a, b) => b.votes - a.votes);
  });

  const voteClicked = async (anecdote) => {
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    };
    dispatch(increaseVote(updatedAnecdote));
    dispatch(setNotification(`You voted for '${anecdote.content}'`, 5));
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <p key={anecdote.id}>
          {anecdote.content} <br />
          has {anecdote.votes} votes.{' '}
          <button onClick={() => voteClicked(anecdote)}>vote</button>
        </p>
      ))}
    </div>
  );
};

export default AnecdoteList;
