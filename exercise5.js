"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // Addition method
    Calculator.prototype.add = function (a, b) {
        if (typeof a !== 'number' || isNaN(a)) {
            return "this is not a valid number.";
        }
        if (typeof b !== 'number' || isNaN(b)) {
            return "Invalid input: The second input must be a valid number.";
        }
        return a + b;
    };
    // Subtraction method
    Calculator.prototype.subtract = function (a, b) {
        if (typeof a !== 'number' || isNaN(a)) {
            return "Invalid input: The first input must be a valid number.";
        }
        if (typeof b !== 'number' || isNaN(b)) {
            return "Invalid input: The second input must be a valid number.";
        }
        return a - b;
    };
    // Multiplication method
    Calculator.prototype.multiply = function (a, b) {
        if (typeof a !== 'number' || isNaN(a)) {
            return "Invalid input: The first input must be a valid number.";
        }
        if (typeof b !== 'number' || isNaN(b)) {
            return "Invalid input: The second input must be a valid number.";
        }
        return a * b;
    };
    // Division method
    Calculator.prototype.divide = function (a, b) {
        if (typeof a !== 'number' || isNaN(a)) {
            return "Invalid input: The first input must be a valid number.";
        }
        if (typeof b !== 'number' || isNaN(b)) {
            return "Invalid input: The second input must be a valid number.";
        }
        if (b === 0) {
            return "division by 0 is not allowed";
        }
        return a / b;
    };
    return Calculator;
}());
var calculator = new Calculator();
console.log(calculator.add(5, 3));
console.log(calculator.subtract(7, 3));
console.log(calculator.multiply(5, 3));
console.log(calculator.divide(15, 3));
console.log(calculator.divide(4, 0));
console.log(calculator.divide(7, "three"));
