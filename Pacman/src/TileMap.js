//exports whatever you want
export default class TileMap {
  //tilesize indicates how big each tile should be
  constructor(tileSize) {
    this.tileSize = tileSize;

    this.yellowDot = new Image();
    this.yellowDot.src = "../images/yellowdot.png";

    this.wall = new Image();
    this.wall.src = "../images/wall.png";
  }

  map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  //draws the actual canvas on the screen
  draw(ctx) {
      //loops over rows
    for(let row= 0; row < this.map.length;row++){
        //loops over columns
        for(let column=0; column < this.map[row].length; column++){
            let tile = this.map[row][column];
            if(tile == 1){
                this.#draWall(ctx, column,row,this.tileSize);
            }
            else if (tile === 0){
                this.#drawDot(ctx, clumn,row,this.tileSize);
            }
        }
    }
  }
#drawDot(ctx, column,row,size){
    ctx.drawImage(this.wall,column*this.tileSize,row* this.tileSize,size,size);


#drawWall(ctx, column,row,size){
    ctx.drawImage(this.wall,column*this.tileSize,row* this.tileSize,size,size);
}

  setCanvasSize(canvas) {
    canvas.width = this.map[0].length * this.tileSize;
    canvas.height = this.map.length * this.tileSize;
  }
}

}
