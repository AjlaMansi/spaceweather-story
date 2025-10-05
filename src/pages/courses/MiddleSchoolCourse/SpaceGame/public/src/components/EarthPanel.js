export function createEarthPanel() {
  const earth = document.createElement('div');
  earth.id = 'earth-panel';
  earth.innerHTML = '<img src="../backgrounds/earth.png" alt="Earth" />';

  earth.style.position = 'absolute';
  earth.style.bottom = '50px';
  earth.style.left = '50%';
  earth.style.transform = 'translateX(-50%)';
  earth.style.transition = 'filter 0.5s ease';

  document.body.appendChild(earth);

  return {
    flashStorm() {
      earth.style.filter = 'brightness(2)';
      setTimeout(() => earth.style.filter = 'brightness(1)', 800);
    }
  };
}
