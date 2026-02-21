let d = 0;
class Player {
  hitboxes = ["EEL", "HOOK", "CLOWNFISH", "OCTOPUS"];

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
    fill(50, 110, 255);
    if (d === 0) {
      triangle(
        this.x - 25,
        this.y - 12,
        this.x - 50,
        this.y + 4,
        this.x - 50,
        this.y - 24,
      );
    } else if (d === 1) {
      triangle(
        this.x,
        this.y - 12,
        this.x + 25,
        this.y + 4,
        this.x + 25,
        this.y - 24,
      );

      if (
        this.drawHitBox(170, 1040, 430, 200) ||
        this.drawHitBox(1060, 410, 300, 300) ||
        this.drawHitBox(1960, 730, 180, 120) ||
        this.drawHitBox(1350, 1374, 700, 225)
      ) {
        this.s = 6;
      } else {
        this.s = 3;
      }

      if (this.drawHitBox(1050, 1147, 20, 70)) {
        deathScreen();
      }

      if (keyIsDown(RIGHT_ARROW) === true) {
        fill(50, 110, 255);
        triangle(
          this.x - 25,
          this.y - 12,
          this.x - 50,
          this.y + 4,
          this.x - 50,
          this.y - 24,
        );
        d = 0;
      } else if (keyIsDown(LEFT_ARROW) === true) {
        fill(50, 110, 255);
        triangle(
          this.x,
          this.y - 12,
          this.x + 25,
          this.y + 4,
          this.x + 25,
          this.y - 24,
        );
        d = 1;
      }
    }
  }

  drawHitBox(x, y, w, h) {
    noStroke();
    noFill();

    rect(x, y, w, h);

    if (this.x >= x && this.y >= y && this.x <= x + w && this.y <= y + h) {
      return true;
    } else {
      return false;
    }
  }

  drawHurtBox(x, y, w, h) {
    noStroke();
    noFill();
    rect(x, y, w, h);

    if (this.x >= x && this.y >= y && this.x <= x + w && this.y <= y + h) {
      this.deathBox();
    }
  }

  deathBox() {
    background(0, 0, 0);
    textSize(80);
    textMode(CENTER, CENTER);
    stroke("white");
    text("There is always a bigger fish.", 1200, 600);
    textSize(20);
    text("Press R to respawn", 1200, 800);
  }
}
