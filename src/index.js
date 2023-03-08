import './style.css';
import { addNewScore, getAllGameScores } from './modules/api.js';

const refreshButton = document.querySelector('.refresh');
const button = document.querySelector('.btn');

button.addEventListener('click', (ev) => {
  ev.preventDefault();

  const nameInput = document.querySelector('#fname');
  const scoreInput = document.querySelector('#lname');
  if (nameInput.value && scoreInput.value) {
    const newScore = {
      user: nameInput.value,
      score: scoreInput.value,
    };
    addNewScore(newScore);
  }
  nameInput.value = '';
  scoreInput.value = '';
});

refreshButton.addEventListener('click', getAllGameScores);
window.addEventListener('DOMContentLoaded', () => {
  getAllGameScores();
});
