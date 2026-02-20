class Player {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.s = speed ?? 3;
  }

  updateInput() {
    const dx =
      (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) -
      (keyIsDown(LEFT_ARROW) || keyIsDown(65));

    const dy =
      (keyIsDown(DOWN_ARROW) || keyIsDown(83)) -
      (keyIsDown(UP_ARROW) || keyIsDown(87));

    const len = max(1, abs(dx) + abs(dy));
    this.x += (dx / len) * this.s;
    this.y += (dy / len) * this.s;
  }

  draw() {
    fill(50, 110, 255);
    noStroke();
    ellipse(this.x - 12, this.y - 12, 32, 24, 5);
    fill("black");
    circle(this.x - 10, this.y - 15, 5, 5, 5);

    this.drawHitBox(170, 1040, 430, 200); //EEL Hitbox
    this.drawHitBox(1060, 410, 300, 300); // HOOK Hitbox
    this.drawHitBox(1960, 730, 180, 120); //CLOWNFISH Hitbox
    this.drawHitBox(1350, 1374, 700, 225); //OCTOPUS Hitbox

    if (keyIsDown(RIGHT_ARROW) === true || keyIsDown(UP_ARROW) === true) {
      fill(50, 110, 255);
      triangle(
        this.x - 25,
        this.y - 12,
        this.x - 50,
        this.y + 4,
        this.x - 50,
        this.y - 24,
      );
    } else if (
      keyIsDown(LEFT_ARROW) === true ||
      keyIsDown(DOWN_ARROW) === true
    ) {
      fill(50, 110, 255);
      triangle(
        this.x,
        this.y - 12,
        this.x + 25,
        this.y + 4,
        this.x + 25,
        this.y - 24,
      );
    }
  }

  drawHitBox(x, y, w, h) {
    noStroke();
    noFill();
    rect(x, y, w, h);

    if (this.x >= x && this.y >= y && this.x <= x + w && this.y <= y + h) {
      console.log("true");
    }
  }
}
