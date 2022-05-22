import { EventHandler } from "./event_handler.js";
import { PhysicsEngine } from "./physics_engine.js";
import { Renderer } from "./renderer.js";

export class GameEngine {
  #event_handler = new EventHandler();
  #renderer = new Renderer(this.#event_handler);
  #physics = new PhysicsEngine(this.#event_handler);
  #time = Date.now();

  constructor() {
  }

  add_object(object) {
    if (object.has_physics) {
      this.#physics.add_object(object)
    }
    if (object.is_renderable) {
      this.#renderer.add_sprite(object)
    }
    for (let event_name in object.has_events) {
      this.#event_handler.register_handler(event_name, object.has_events[event_name]);
    }
  }

  run() {
    requestAnimationFrame(() => this.run());

    // update time step
    let prev_time = this.#time;
    this.#time = Date.now();

    // trigger updates and render
    this.#physics.update_objects(this.#time - prev_time);
    this.#renderer.render_frame();
  }
}
