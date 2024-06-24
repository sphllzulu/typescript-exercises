//function that returns a sum of two numbers
function sumOfTwoNums(a: number, b: number): number {
    return a + b;
  }
console.log(sumOfTwoNums(24, 14));

//function  that returns a fixed number
function Fixed(): number {
  return 17;
}
console.log(Fixed()); 

//Write a function that takes a string and an optional boolean parameter. If the boolean
//is true, return the string in uppercase; otherwise, return it in lowercase.

function optional(str: string, upperCase?: boolean): string {
  if (upperCase) {
    return str.toUpperCase();//if initialized with a boolean argument, an uppercase string will be returned
  } else {
    return str.toLowerCase();//if not initialized with a boolean arg or if its false, a lowercase string will be returned`
  }
}


console.log(optional("Siphelele")); 
console.log(optional("Zulu", true)); 
console.log(optional("Siphelele Zulu", false)); 



  
  export{}
