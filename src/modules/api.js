const apiKey = 'xOhJaij0iL0K3CoP6gQZ';
const scoreList = document.querySelector('.score-list');

const displayScore = (scores) => {
  let display = '';
  scores.forEach((score) => {
    display += `
          <p class="score"><span>${score.user}: </span><span>${score.score}</span></p>
          `;
  });
  scoreList.innerHTML = display;
};

export const getAllGameScores = async () => {
  try {
    const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores/`);
    const data = await res.json();
    if (!res.ok) {
      return data;
    }
    const scores = data.result;
    displayScore(scores);
    return scores;
  } catch (error) {
    return error;
  }
};

export const addNewScore = async (newScore) => {
  try {
    const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newScore),
    });
    const data = await res.json();
    if (!res.ok) {
      return data;
    }
    getAllGameScores();
    return data;
  } catch (error) {
    return error;
  }
};
