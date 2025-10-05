export function createEventCard(message) {
  const card = document.createElement('div');
  card.className = 'event-card';
  card.textContent = message;
  card.style.cssText = `
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #00ffff;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 16px;
    opacity: 0;
    transition: opacity 0.5s ease;
  `;
  document.body.appendChild(card);

  setTimeout(() => (card.style.opacity = 1), 100);
  setTimeout(() => {
    card.style.opacity = 0;
    setTimeout(() => card.remove(), 500);
  }, 3000);
}
