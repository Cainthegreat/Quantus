import { Vec2 } from "../utilities.js";
import { GameObject } from "./object.js";

export class Player extends GameObject {
  #position = new Vec2();
  #velocity = new Vec2();
  #acceleration = new Vec2();
  #mass = 10;

  constructor() {
    super(true, true,
      // TODO: add events
    )
  }

  render(ctx, event_handler) {
    // TODO: render logic
  }

  update(deltaT, event_handler) {
    // TODO: physics logic
  }
}