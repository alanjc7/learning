const Calculator = require('./simple-calc.js');

class AdvancedCalculator extends Calculator {
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}

module.exports = new AdvancedCalculator();
