import { Vec2 } from "../utilities.js";

export class Renderer {
  #canvas = document.createElement("canvas");
  #ctx = this.#canvas.getContext("2d");
  #sprites = [];
  #event_handler = null;
  #camera = new Camera();

  constructor(event_handler) {
    this.#canvas.width = window.innerWidth;
    this.#canvas.height = window.innerHeight;
    document.body.appendChild(this.#canvas);

    this.#event_handler = event_handler;

    // todo: register handler for resize
  }

  add_sprite(render_object) {
    if (typeof render_object.render == "function") {
      this.#sprites.push(render_object);
    } else {
      this.#sprites.push({
        render: (ctx, camera, event_handler) =>
          this.default_render(render_object, ctx, camera, event_handler)
      });
    }
  }

  render_frame() {
    for (let sprite of this.#sprites) {
      sprite.render(this.#ctx, this.#camera, this.#event_handler);
    }
  }

  static default_render(render_info, ctx, camera, event_handler) {
    // TODO
  }
}

class Camera {
  position = new Vec2();
  // TODO: add camera logic
}