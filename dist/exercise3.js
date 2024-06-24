"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumOfTwoNums(a, b) {
    return a + b;
}
console.log(sumOfTwoNums(24, 14));
function Fixed() {
    return 17;
}
console.log(Fixed());
function optional(str, upperCase) {
    if (upperCase) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
}
console.log(optional("Siphelele"));
console.log(optional("Zulu", true));
console.log(optional("Siphelele Zulu", false));
