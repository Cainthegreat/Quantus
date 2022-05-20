# Project Layout

- GameEngine: handles all of the generic work, such as creating
  the canvas, drawing items, and handling physics
  - Render Engine
    - camera and objects to render
  - Physics System
    - uses law of gravitation, simulates movement
    - emits collision events
  - Event System
    - registers events based 

- GameObject: generic class for all game objects

- RenderComponent
  - all required information to render the component
  - either an image and location or a custom draw function
- PhysicsComponent
  - all information to perform physics
  - either a mass and radius/shape or a custom physics update function
- EventComponent
  - provides a way to register functions as event handlers, for keypresses
    of for physics events (or render events?)

# Runtime Order

- Initialize
  - initialize engine
    - create canvas
  - register game objects
    - player
      - ship renderer
      - ship physics
      - ship events - player controls
    - planets
      - planet renderer
      - planet physics
      - planet events - collisions?
    - decorations?
      - just renderer component
- Game Loop
  - poll for events (the ones which are not async?)
  - update physics system
  - render objects to screen
- Cleanup
