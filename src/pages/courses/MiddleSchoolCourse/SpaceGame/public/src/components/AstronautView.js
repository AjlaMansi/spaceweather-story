export function createAstronautView() {
  const astronaut = document.createElement('div');
  astronaut.id = 'astronaut';
  astronaut.innerHTML = '<img src="../characters/astronaut.png" alt="Astronaut" />';

  astronaut.style.position = 'absolute';
  astronaut.style.left = '50%';
  astronaut.style.top = '50%';
  astronaut.style.transform = 'translate(-50%, -50%)';
  astronaut.style.transition = 'transform 0.5s ease-in-out';

  document.body.appendChild(astronaut);

  // Floating animation
  let direction = 1;
  setInterval(() => {
    astronaut.style.transform = `translate(-50%, calc(-50% + ${direction * 10}px))`;
    direction *= -1;
  }, 1500);
}
