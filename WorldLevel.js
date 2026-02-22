let water;

function preload() {}

class WorldLevel {
  constructor(json) {
    this.water = loadImage("Assets/underwater_W5.png");
    this.schemaVersion = json.schemaVersion ?? 1;

    this.w = json.world?.w ?? 2400;
    this.h = json.world?.h ?? 1600;
    this.bg = json.world?.bg ?? [235, 235, 235];

    //this.gridStep = json.world?.gridStep ?? 160;

    // this.obstacles = json.obstacles ?? [];

    // NEW: camera tuning knob from JSON (data-driven)
    this.camLerp = json.camera?.lerp ?? 0.12;
  }

  drawBackground(g) {
    g.image(this.water, 0, 0, 2400, 1600);

    // rect(0, 0, 10000, 10000);
    //background(0);
  }

  drawHUD(player, camX, camY, g) {
    g.fill(255);
    g.text("Week 5: The Adventure of Little Fish", 12, 20); // changed name
  }
}
