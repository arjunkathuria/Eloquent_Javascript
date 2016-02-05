function Vector(x,y){
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(this,other){
  return new Vector(this.x+other.x, this.y+other.y) ;
}

// grid to represented as an array of size length x width
// where an element (x,y) is found at (x,y*width)
// when a sigle number is passed through an array constructor it creates a new empty array of given length

function Grid(width,height){
  this.space = new Array(width*height);
  this.width = width;
  this.height = height;
}

Grid.prototype.isInside = function(vector){
  return vector.x >=0 && vector.x <this.width &&
         vector.y >=0 && vector.y < this.height;
};
Grid.prototype.get = function(vector){
  return this.space[vector.x + vector.y*this.width];
}
Grid.prototype.set = function(vector,value){
  this.space[vector.x + this.width * vector.y] = value;
};

var directions = {
  "n" :  new Vector( 0, -1);
  "ne" : new Vector( 1, -1);
  "e" :  new Vector( 1,  0);
  "se" : new Vector( 1,  1);
  "s" :  new Vector( 0,  1);
  "sw" : new Vector(-1,  1);
  "w" :  new Vector(-1,  0);
  "nw" : new Vector(-1, -1);
};
