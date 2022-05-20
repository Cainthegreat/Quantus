export class GameEngine {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext("2d");
    this.time = 0;
  }

  run() {
    window.requestAnimationFrame(() => this.run());
    this.time++;
    // this.physics.run()
    // this.renderer.run()
  }
}
