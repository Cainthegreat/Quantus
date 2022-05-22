export class GameObject {
  // TODO: add better ID logic
  object_id = Math.random().toString();
  is_renderable = false;
  has_physics = false;
  events = {};

  constructor(is_renderable, has_physics, event_map) {
    this.is_renderable = is_renderable;
    this.has_physics = has_physics;
    this.events = event_map ?? {};
  }
}