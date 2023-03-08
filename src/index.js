import './style.css';

const scoreList = document.querySelector('.score-list');
const button = document.querySelector('.btn');

const data = JSON.parse(localStorage.getItem('scores')) || [];
const displayScore = (scores) => {
  let display = '';
  scores.forEach((score) => {
    display += `
        <p class="score"><span>${score.name}</span><span>${score.score}</span></p>
        `;
  });
  scoreList.innerHTML = display;
};
const addScore = () => {
  const nameInput = document.querySelector('#fname').value;
  const scoreInput = document.querySelector('#lname').value;
  if (nameInput && scoreInput) {
    data.push({ name: nameInput, score: scoreInput });
    localStorage.setItem('scores', JSON.stringify(data));
    const scores = JSON.parse(localStorage.getItem('scores'));
    displayScore(scores);
  }
};

button.addEventListener('click', () => {
  addScore();
});
window.addEventListener('DOMContentLoaded', () => {
  displayScore(data);
});
