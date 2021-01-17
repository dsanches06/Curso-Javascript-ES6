"use strict";

class Math {
  sum(a, b) {
    return a + b;
  }
  multiply(a, b, callback) {
    setTimeout(() => {
      callback(a * b);
    }, 1000);
  }
  sub(a, b) {
    return a - b;
  }
  div(a, b) {
    return a / b;
  }
  mod(a, b) {
    return a % b;
  }
}

module.exports = Math;
