"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age, socialSecurityNumber) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
const person = new Person("Siphelele Zulu", 30, "000000570000");
console.log(person.getName());
console.log(person.getAge());
