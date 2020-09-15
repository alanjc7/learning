// greetings.js
sayHelloInEnglish = function() {
  return "Hello";
};

sayHelloInSpanish = function() {
  return "Hola";
};


// exports
exports.sayHelloInEnglish = function() {
  return "HELLO";
};

exports.sayHelloInSpanish = function() {
  return "Hola";
};

// another file
var greetings = require("./greetings.js");

// usage
greetings.sayHelloInEnglish();

greetings.sayHelloInSpanish();
