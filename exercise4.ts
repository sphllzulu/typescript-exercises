class Person {
    name: string;
    age: number;
    private socialSecurityNumber: string;
  
    constructor(name: string, age: number, socialSecurityNumber: string) {
      this.name = name;
      this.age = age;
      this.socialSecurityNumber = socialSecurityNumber;
    }
  
    getName(): string {
      return this.name;
    }
  
    getAge(): number {
      return this.age;
    }
  }
  
  
  const person = new Person("Siphelele Zulu", 30, "000000570000");//calling the constructor and initializing the variables declared in the class
  console.log(person.getName()); 
  console.log(person.getAge()); 
  
  export{}