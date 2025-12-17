let highestZ = 1;

document.querySelectorAll(".paper").forEach(paper => {
  let x = 0, y = 0;
  let startX = 0, startY = 0;
  let holding = false;
  let rotation = Math.random() * 30 - 15;

  paper.style.transform =
    `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

  paper.addEventListener("pointerdown", e => {
    holding = true;
    paper.setPointerCapture(e.pointerId);
    paper.style.zIndex = ++highestZ;
    startX = e.clientX - x;
    startY = e.clientY - y;
  });

  paper.addEventListener("pointermove", e => {
    if (!holding) return;
    x = e.clientX - startX;
    y = e.clientY - startY;
    paper.style.transform =
      `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
  });

  paper.addEventListener("pointerup", () => {
    holding = false;
  });

  paper.addEventListener("pointercancel", () => {
    holding = false;
  });
});
