let highestZ = 1;

class Paper {
  holding = false;
  x = 0;
  y = 0;
  offsetX = 0;
  offsetY = 0;
  rotation = Math.random() * 30 - 15;

  init(paper) {
    paper.style.transform =
      `translate(${this.x}px, ${this.y}px) rotate(${this.rotation}deg)`;

    /* DESKTOP */
    paper.addEventListener("mousedown", e => {
      this.start(e.clientX, e.clientY, paper);
    });

    document.addEventListener("mousemove", e => {
      this.move(e.clientX, e.clientY, paper);
    });

    document.addEventListener("mouseup", () => {
      this.holding = false;
    });

    /* MOBILE */
    paper.addEventListener("touchstart", e => {
      const t = e.touches[0];
      this.start(t.clientX, t.clientY, paper);
    }, { passive: false });

    document.addEventListener("touchmove", e => {
      if (!this.holding) return;
      const t = e.touches[0];
      this.move(t.clientX, t.clientY, paper);
      e.preventDefault();
    }, { passive: false });

    document.addEventListener("touchend", () => {
      this.holding = false;
    });
  }

  start(x, y, paper) {
    this.holding = true;
    paper.style.zIndex = ++highestZ;
    this.offsetX = x - this.x;
    this.offsetY = y - this.y;
  }

  move(x, y, paper) {
    if (!this.holding) return;
    this.x = x - this.offsetX;
    this.y = y - this.offsetY;
    paper.style.transform =
      `translate(${this.x}px, ${this.y}px) rotate(${this.rotation}deg)`;
  }
}

document.querySelectorAll(".paper").forEach(paper => {
  const p = new Paper();
  p.init(paper);
});

