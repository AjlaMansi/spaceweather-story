export function createScoreBoard() {
  const score = document.createElement('div');
  score.id = 'score-board';
  score.style.cssText = `
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
    background: rgba(0,0,0,0.5);
    padding: 10px;
    border-radius: 6px;
    font-size: 16px;
  `;

  let points = 0;
  score.textContent = `Score: ${points}`;
  document.body.appendChild(score);

  return {
    addPoints(n) {
      points += n;
      score.textContent = `Score: ${points}`;
    }
  };
}
