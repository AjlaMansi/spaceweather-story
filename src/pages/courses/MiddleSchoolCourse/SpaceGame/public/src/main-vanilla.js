
import starUrl from "./backgrounds/space-stars.jpg";
import astronautUrl from "./characters/astronaut.png";

export function initSpaceGame(containerId = "game-container") {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn("Game container not found:", containerId);
    return;
  }

  // ✅ Use imported image URLs
  const images = [starUrl, astronautUrl];
  let idx = 0;

  // --- Basic container styling ---
  if (!container.style.position || container.style.position === "static") {
    container.style.position = "relative";
  }
  container.style.minHeight = "420px";
  container.style.background = "#000";
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";
  container.style.padding = "16px";
  container.style.borderRadius = "12px";
  container.style.boxShadow = "0 4px 16px rgba(0,0,0,0.18)";
  container.style.overflow = "hidden";

  // --- Image element ---
  const img = document.createElement("img");
  img.alt = "Space demo";
  img.style.cssText =
    "max-width:80%;max-height:50vh;object-fit:contain;display:block;border-radius:10px;";
  img.onerror = () => console.error("Failed to load:", images[idx]);
  container.appendChild(img);

  // --- Controls ---
  const controls = document.createElement("div");
  controls.style.cssText =
    "position:absolute;bottom:16px;left:50%;transform:translateX(-50%);display:flex;gap:10px;";
  container.appendChild(controls);

  const btnStyle =
    "padding:8px 12px;border:none;border-radius:8px;background:#3b82f6;color:#fff;cursor:pointer;font-weight:600;";
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "⟵ Prev";
  prevBtn.style.cssText = btnStyle;
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next ⟶";
  nextBtn.style.cssText = btnStyle;
  controls.appendChild(prevBtn);
  controls.appendChild(nextBtn);

  // --- Caption ---
  const caption = document.createElement("div");
  caption.style.cssText =
    "position:absolute;top:12px;left:12px;padding:6px 10px;border-radius:8px;background:rgba(0,0,0,0.45);color:#fff;font-weight:600;";
  container.appendChild(caption);

  // --- Render Function ---
  function render() {
    img.style.zIndex = "1";
    img.src = images[idx];
    caption.textContent = "Image " + (idx + 1) + " of " + images.length;
  }

  // --- Button Events ---
  prevBtn.addEventListener("click", () => {
    idx = (idx - 1 + images.length) % images.length;
    render();
  });

  nextBtn.addEventListener("click", () => {
    idx = (idx + 1) % images.length;
    render();
  });

  // --- Keyboard Controls ---
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      idx = (idx - 1 + images.length) % images.length;
      render();
    } else if (e.key === "ArrowRight") {
      idx = (idx + 1) % images.length;
      render();
    }
  });

  
  render();

  console.info("✅ SpaceGame demo initialized in:", containerId);
}