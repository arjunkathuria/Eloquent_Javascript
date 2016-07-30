function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(otherVector) {
    return new Vector(this.x + otherVector.x, this.y + otherVector.y );
};

// The times method scales a vector by a given amount.
// It will be useful when we need to multiply a speed vector by a time interval to get the distance traveled
// during that time.

Vector.prototype.times = function(factor) {
    return new Vector(this.x * factor, this.y * factor);
};

