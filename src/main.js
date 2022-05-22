import { GameEngine } from "./game_engine/game_engine.js";
import { Player } from "./objects/player.js";

let GE = new GameEngine();

// TODO: load objects and add them to the engine
let player = new Player();

GE.add_object(player);

GE.run();
