export function initSpaceGame(containerId = "game-container") {
  const container = document.getElementById(containerId);
  if (!container) return console.warn("Game container not found");

  const astronautImg = "/SpaceGame/src/characters/astronaut.png";
  const spaceBgImg = "/SpaceGame/src/backgrounds/space-stars.jpg";

  const dialogues = [
    "Mission log: Day 43 — still orbiting above Earth.",
    "Solar activity seems calm... wait— sensors picking up a surge!",
    "A solar storm? Time to monitor its effects on Earth’s magnetosphere.",
    "Let’s stabilize communications and watch the auroras form below."
  ];
  let currentDialogue = 0;

  /* -------------------------
     DOM elements inside container
     ------------------------- */
  function ensureDialogueBox() {
    let box = container.querySelector('#dialogue-box');
    if (!box) {
      box = document.createElement('div');
      box.id = 'dialogue-box';
      box.style.cssText =
        'position:relative; margin:0 auto; padding:12px 16px; background:rgba(0,0,0,0.6); color:#fff; border-radius:10px; max-width:720px; font-size:1.05rem; text-align:center;';
      container.appendChild(box);
    }
    return box;
  }

  function ensureNextBtn() {
    let btn = container.querySelector('#next-btn');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'next-btn';
      btn.textContent = 'Next';
      btn.style.cssText =
        'display:inline-block; margin-top:10px; padding:8px 14px; border-radius:8px; border:none; cursor:pointer; background:#3b82f6; color:#fff;';
      container.appendChild(btn);
    }
    return btn;
  }

  const dialogueBox = ensureDialogueBox();
  const nextBtn = ensureNextBtn();

  /* -------------------------
     Component loaders/fallbacks
     ------------------------- */
  function createAstronautViewFallback() {
    if (container.querySelector('#astronaut')) return container.querySelector('#astronaut');
    const astronaut = document.createElement('div');
    astronaut.id = 'astronaut';
    astronaut.style.cssText =
      'position:absolute; left:12%; top:22%; transform:translate(-50%,-50%); width:140px; height:140px; display:flex; align-items:center; justify-content:center; pointer-events:none;';
    const img = document.createElement('img');
    img.alt = 'Astronaut';
    img.src = astronautImg;
    img.style.cssText =
      'width:100%; height:100%; object-fit:contain; filter:drop-shadow(0 8px 12px rgba(0,0,0,0.5));';
    astronaut.appendChild(img);
    container.appendChild(astronaut);

    // subtle float (toggle transform)
    let dir = 1;
    setInterval(() => {
      astronaut.style.transform = `translate(-50%,-50%) translateY(${dir * 8}px)`;
      dir *= -1;
    }, 1600);

    return astronaut;
  }

  function createEarthPanelFallback() {
    if (container.querySelector('#earth-panel')) return container.querySelector('#earth-panel');
    const earth = document.createElement('div');
    earth.id = 'earth-panel';
    earth.style.cssText =
      'position:absolute; right:10%; bottom:8%; width:220px; height:220px; border-radius:50%; overflow:hidden; display:flex; align-items:center; justify-content:center;';
    const img = document.createElement('img');
    img.alt = 'Earth';
    img.src = spaceBgImg;
    img.style.cssText = 'width:100%; height:100%; object-fit:cover; border-radius:50%;';
    earth.appendChild(img);
    container.appendChild(earth);

    return {
      el: earth,
      flashStorm() {
        earth.animate([{ filter: 'brightness(1)' }, { filter: 'brightness(2)' }, { filter: 'brightness(1)' }], {
          duration: 900
        });
      },
      showAurora() {
        let aur = earth.querySelector('.aurora-overlay');
        if (!aur) {
          aur = document.createElement('div');
          aur.className = 'aurora-overlay';
          aur.style.cssText =
            'position:absolute; inset:0; pointer-events:none; mix-blend-mode:screen; opacity:0; transition:opacity 800ms;';
          earth.style.position = 'relative';
          earth.appendChild(aur);
        }
        aur.style.background =
          'radial-gradient(50% 60% at 50% 40%, rgba(72,255,190,0.22), transparent 40%), radial-gradient(30% 40% at 30% 70%, rgba(120,120,255,0.16), transparent 40%)';
        aur.style.opacity = '1';
        setTimeout(() => (aur.style.opacity = '0'), 1600);
      }
    };
  }

  function createEventCardFallback(msg = '', opts = {}) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.textContent = msg;
    card.style.cssText =
      'position: absolute; top:18px; right:18px; background: rgba(0,0,0,0.5); color:#fff; padding:10px 14px; border-radius:10px; border:1px solid rgba(255,255,255,0.06); font-weight:600; opacity:0; transform: translateY(-6px); transition:all 280ms;';
    container.appendChild(card);
    requestAnimationFrame(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    });
    setTimeout(() => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(-6px)';
      setTimeout(() => card.remove(), 300);
    }, opts.duration || 3000);
    return card;
  }

  function createScoreBoardFallback() {
    if (container.querySelector('#score-board')) {
      const el = container.querySelector('#score-board');
      let points = Number(el.dataset.points || 0);
      return {
        addPoints(n = 0) {
          points += n;
          el.textContent = `Score: ${points}`;
          el.dataset.points = points;
        }
      };
    }

    const el = document.createElement('div');
    el.id = 'score-board';
    el.dataset.points = '0';
    el.style.cssText =
      'position:absolute; top:12px; left:12px; padding:8px 10px; background:rgba(0,0,0,0.45); color:#fff; border-radius:8px; font-weight:600;';
    el.textContent = 'Score: 0';
    container.appendChild(el);
    let points = 0;
    return {
      addPoints(n = 0) {
        points += n;
        el.textContent = `Score: ${points}`;
        el.dataset.points = points;
      }
    };
  }

  /* -------------------------
     Initialize components
     ------------------------- */
  const astronautEl = createAstronautViewFallback();
  const earthAPI = createEarthPanelFallback();
  const scoreboardAPI = createScoreBoardFallback();
  const eventCard = (message, opts) => createEventCardFallback(message, opts);

  /* -------------------------
     Astronaut reactions
     ------------------------- */
  function astronautReact(kind = 'pulse') {
    if (!astronautEl) return;
    if (kind === 'alert') {
      astronautEl.animate(
        [
          { transform: 'translate(-50%,-50%) scale(1)' },
          { transform: 'translate(-48%,-54%) scale(1.03)' },
          { transform: 'translate(-50%,-50%) scale(1)' }
        ],
        { duration: 420, easing: 'ease-out' }
      );
    } else if (kind === 'shield') {
      astronautEl.animate(
        [
          { filter: 'drop-shadow(0 0 0 rgba(0,0,0,0))' },
          { filter: 'drop-shadow(0 0 18px rgba(60,150,255,0.45))' },
          { filter: 'drop-shadow(0 0 0 rgba(0,0,0,0))' }
        ],
        { duration: 700 }
      );
    } else {
      astronautEl.animate(
        [
          { transform: 'translate(-50%,-50%) translateY(0)' },
          { transform: 'translate(-50%,-50%) translateY(-6px)' },
          { transform: 'translate(-50%,-50%) translateY(0)' }
        ],
        { duration: 1200, iterations: 1 }
      );
    }
  }

  /* -------------------------
     Dialogue display
     ------------------------- */
  function showDialogue() {
    dialogueBox.textContent = dialogues[currentDialogue];
  }

  /* -------------------------
     Mission summary overlay
     ------------------------- */
  function showSummary() {
    const overlay = document.createElement('div');
    overlay.id = 'mission-summary';
    overlay.style.cssText =
      'position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.6); color:#fff; z-index:9999;';
    const card = document.createElement('div');
    card.style.cssText =
      'background:linear-gradient(180deg,#061328 0%, #02101e 100%); padding:24px; border-radius:12px; text-align:center; width:min(420px,90%);';
    const h = document.createElement('h2');
    h.textContent = 'Mission Complete';
    h.style.margin = '0 0 8px 0';
    const p = document.createElement('p');
    p.textContent = `Great job! Your final ${container.querySelector('#score-board') ? 'score' : 'progress'} is shown.`;
    p.style.margin = '0 0 16px 0';
    const scoreDisplay = document.createElement('div');
    scoreDisplay.style.cssText = 'margin-bottom:14px; font-size:1.1rem; font-weight:700;';
    scoreDisplay.textContent = container.querySelector('#score-board') ? container.querySelector('#score-board').textContent : '';
    const replayBtn = document.createElement('button');
    replayBtn.textContent = 'Play again';
    replayBtn.style.cssText =
      'padding:8px 12px; border-radius:8px; border:none; cursor:pointer; background:#3b82f6; color:#fff;';

    replayBtn.addEventListener('click', () => {
      overlay.remove();
      currentDialogue = 0;
      showDialogue();
      nextBtn.style.display = '';
      const sb = container.querySelector('#score-board');
      if (sb) {
        sb.dataset.points = '0';
        sb.textContent = 'Score: 0';
      }
    });

    card.appendChild(h);
    card.appendChild(p);
    card.appendChild(scoreDisplay);
    card.appendChild(replayBtn);
    overlay.appendChild(card);
    container.appendChild(overlay);
  }

  /* -------------------------
     Next button logic
     ------------------------- */
  nextBtn.addEventListener('click', () => {
    currentDialogue++;
    if (currentDialogue < dialogues.length) {
      showDialogue();

      if (currentDialogue === 1) {
        eventCard('🔎 Sensors: surge detected!');
        astronautReact('alert');
        scoreboardAPI.addPoints?.(5);
      } else if (currentDialogue === 2) {
        eventCard('⚠️ Solar flare incoming!');
        earthAPI.flashStorm?.();
        astronautReact('shield');
        scoreboardAPI.addPoints?.(10);
      } else if (currentDialogue === 3) {
        eventCard('🌌 Auroras forming below — beautiful!');
        earthAPI.showAurora?.();
        astronautReact('calm');
        scoreboardAPI.addPoints?.(5);
      }
    } else {
      dialogueBox.textContent = "Mission complete. Earth’s systems stable.";
      nextBtn.style.display = 'none';
      eventCard('✅ Mission complete — systems stable.');
      earthAPI.showAurora?.();
      astronautReact('calm');
      setTimeout(showSummary, 900);
    }
  });
  // initialize
  showDialogue();

  console.info('Space game initialized inside container:', containerId);
}
