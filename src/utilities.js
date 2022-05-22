export class Vec2 {
  x = 0;
  y = 0;

  constructor(x, y) {
    this.x = x ?? this.x;
    this.y = y ?? this.y;
  }

  static from_length_angle(r, angle) {
    return new Vec2(
      Math.cos(angle) * r,
      Math.sin(angle) * r
    );
  }

  get r() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  get angle() {
    return Math.atan2(this.y, this.x);
  }

  add(other) {
    return new Vec2(this.x + other.x, this.y + other.y);
  }

  sub(other) {
    // TODO
  }

  mul(other) {
    // TODO
  }

  div(other) {
    // TODO
  }
}
