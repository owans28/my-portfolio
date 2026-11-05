
//  let numbers = [1, 2, 3];
//   numbers.push(4);  
//   numbers.pop();    
//   console.log(numbers);

let language= ["phyton", "javascript", "css"];
let pro=language.slice(1,3);
console.log(pro);
pro=language.slice(4);
console.log(pro);
pro=language.slice(-2);
console.log(pro);


// let type=[ "number", "boolean", "string", "array", "object",];
// let data=type.slice(3,2);
// console.log(data);
// data=type.splice(1,0)
// [language;'madn;'m

// let score=30;
// if (score>=2)
// {
//     console.log("passed");
    
// }else{
//     console.log("failed!! leave here now ");
// }


//  let score = 20;
//   if (score >= 35) {
//     console.log("Grade A");
//   } else if (score >= 25) {
//     console.log("Grade B");
//   } else if (score >= 20) {
//     console.log("fail!! leave here now");
  
//   }



//  let name ="Alice";
//  let age =25;
//  console.log(name);
//  console.log(age);
//   let car = {brand: "Toyota", model: "Camry"};
//   console.log(car.brand);
//   console.log(car.model);


//   function greet() {
//     console.log("Hello, welcome to JavaScript!");
//   }

//     console.log(sum);
//   }
//   addNumbers(); 


//   function greet(name) {
//     console.log("Hello " + name + "!");
//   }

//   greet("Charles");

//   function greet(name) {
//     console.log("Hello " + name + "!");
//   }

//   greet("big-owans");

// function add(a, b) {
//     return a + b;
//   }

//   let result = add(5, 10);
//   console.log(result);


//   let globalVar = "I’m global!";
//   function testScope() {
//     let localVar = "I’m local!";
//     console.log(globalVar);
//     console.log(localVar);
//   }
// testScope();

//   const greet = () => console.log("Hello!");
//   greet();


// concatenation adding a value or parameter inside a string +


// const scores = [45, 78, 82, 90];
//   console.log(scores.some(score => score > 80));  
//   console.log(scores.every(score => score >= 45)); 

const nums=[4,8,12];
console.log(Math.max(...nums));


//  const user = { name: "abgalumo", age: 25 };
//   const job = { role: "Developer" };
//   const profile = { ...user, ...job };
//   console.log(profile);


  
  function sum(...nums) {
    return nums.reduce((acc, val) => acc + val, 0);
  }
  console.log(sum(1, 2, 3, 4));



  // const colors = ["red", "green", "blue"];
  // const [first, second, third] = colors;
  // console.log(first, third);

  function display({ name, age }) {
    console.log(`${name} is ${age} is years old`);
  }
  

  display({ name: "John", age: 30 });
