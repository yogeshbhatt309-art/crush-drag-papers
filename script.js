let highestZ = 1;

document.querySelectorAll(".paper").forEach(paper => {
  let x = Math.random() * 200 - 100;
  let y = Math.random() * 200 - 100;
  let startX = 0;
  let startY = 0;
  let dragging = false;

  paper.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random()*30-15}deg)`;

  paper.addEventListener("pointerdown", e => {
    dragging = true;
    paper.setPointerCapture(e.pointerId);
    paper.style.zIndex = ++highestZ;
    startX = e.clientX - x;
    startY = e.clientY - y;
  });

  paper.addEventListener("pointermove", e => {
    if (!dragging) return;
    x = e.clientX - startX;
    y = e.clientY - startY;
    paper.style.transform = `translate(${x}px, ${y}px) rotate(0deg)`;
  });

  paper.addEventListener("pointerup", () => {
    dragging = false;
  });

  paper.addEventListener("pointercancel", () => {
    dragging = false;
  });
});
