// defining classes - a few options, similar to defining functions

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}


// class expressions
// unnamed
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name); // Rectangle

// named
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name); // Rectangle2



class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter - needed because no property assignments are allowed inside classes
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
