export class PhysicsEngine {
  #objects = [];
  #event_handler = null;

  constructor(event_handler) {
    this.#event_handler = event_handler;
  }

  add_object(object) {
    // TODO: add 
  }

  update_objects(deltaT) {
    // TODO: add collision detection
    for (let object of this.#objects) {
      object.update(deltaT, this.#event_handler);
    }
  }

  static default_update(deltaT, event_handler) {
    // TODO: default update
  }
}
