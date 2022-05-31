import TileMap from "./TileMap.js";

const tileSize = 32;

//creates a constant variable by grabbing the html element by its id
//id is an html attribute used to identify an element , so your grabbing the elememt by its id
const canvas = document.getElementById("gameCanvas");

const ctx = canvas.getContext("2d");

//initializes the tilemap object
const tileMap = new TileMap(tileSize);

//redraws the game canvas a number of times every second to give
//the illusion of animation
//basically the 'main'
function gameLoop() {
  tileMap.draw();
}

//calls the function 75 times every second to redraw the screen
setInterval(gameLoop, 1000 / 75);
