class Calculator {
  // Addition method
  add(a: any, b: any): number | string {
    if (typeof a !== "number" || isNaN(a)) {
      return "Oops!!this is not a valid number.";
    }
    if (typeof b !== "number" || isNaN(b)) {
      return "Uh oh!! The second input must be a valid number.";
    }
    return a + b;
  }

  // Subtraction method
  subtract(a: any, b: any): number | string {
    if (typeof a !== "number" || isNaN(a)) {
      return "Oops!!this is not a valid number.";
    }
    if (typeof b !== "number" || isNaN(b)) {
      return "Uh oh!! The second input must be a valid number.";
    }

    return a - b;
  }

  // Multiplication method
  multiply(a: any, b: any): number | string {
    if (typeof a !== "number" || isNaN(a)) {
      return "Oops!!this is not a valid number.";
    }
    if (typeof b !== "number" || isNaN(b)) {
      return "Uh oh!! The second input must be a valid number.";
    }

    return a * b;
  }

  // Division method
  divide(a: any, b: any): number | string {
    if (typeof a !== "number" || isNaN(a)) {
      return "Oops!!this is not a valid number.";
    }
    if (typeof b !== "number" || isNaN(b)) {
      return "Uh oh!! The second input must be a valid number.";
    }
    if (b === 0) {
      return "division by 0 is not allowed";
    }
    return a / b;
  }
}

const calculator = new Calculator();

console.log(calculator.add(5, 3));
console.log(calculator.subtract(7, 3));
console.log(calculator.multiply(5, 3));
console.log(calculator.divide(15, 3));
console.log(calculator.divide(4, 0));
console.log(calculator.divide(7, "three"));

export {};
