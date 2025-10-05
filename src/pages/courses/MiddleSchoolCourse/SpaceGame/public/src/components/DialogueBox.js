export function createDialogueBox(dialogues) {
  const box = document.createElement('div');
  box.id = 'dialogue-box';
  box.style.cssText = `
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    padding: 20px;
    background: rgba(0,0,0,0.6);
    color: white;
    font-size: 18px;
    border-radius: 10px;
    text-align: center;
  `;

  const btn = document.createElement('button');
  btn.id = 'next-btn';
  btn.textContent = 'Next';
  btn.style.cssText = `
    margin-top: 10px;
    background-color: #2e8bff;
    border: none;
    padding: 8px 16px;
    color: white;
    border-radius: 6px;
    cursor: pointer;
  `;

  document.body.appendChild(box);
  document.body.appendChild(btn);

  let currentDialogue = 0;

  function showDialogue() {
    let i = 0;
    box.textContent = '';
    const text = dialogues[currentDialogue];
    const interval = setInterval(() => {
      if (i < text.length) {
        box.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
  }

  btn.addEventListener('click', () => {
    currentDialogue++;
    if (currentDialogue < dialogues.length) showDialogue();
    else {
      box.textContent = "Mission complete. Earth’s systems stable.";
      btn.style.display = 'none';
    }
  });

  showDialogue();
}
