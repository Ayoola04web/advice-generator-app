// Arrow Functions

const square = (n) => n * n;

const greet = (name) => `Hello, ${name}!`;


const multiply = (a, b) => a * b;

const getFullName = (firstName, lastName) =>
    `${firstName} ${lastName}`;

console.log(square(5));
console.log(greet("Ayoola"));
console.log(multiply(4, 3));
console.log(getFullName("Ayoola", "Aworeni"));


//Destructing

const student = {
    name: "Amaka",
    age: 22,
    course: "Frontend Development",
    city: "Abuja",
};

const scores = [88, 72, 95, 60, 45];

//Destructure name and course
const { name, course } = student;

//Rename age to studentAge
const { age: studentAge } = student;

//First and second scores
const [firstScore, secondScore] = scores;

console.log(name);
console.log(course);
console.log(studentAge);
console.log(firstScore);
console.log(secondScore);


//Spread Operator

const frontend = ["HTML", "CSS", "Javascript"];

const backend = ["Node.js", "Express", "MonoDB"];

const userProfile = {
    username: "coder-ade",
    email: "ade@example.com"
};



//Combibne arrays
const fullStack = [...frontend, ...backend];

console.log (fullStack);

//Create new object with updated email
const updatedProfile = {
    ...userProfile,
    email: "newmail@example.com"
};

console.log("Original:", userProfile);
console.log("Updated:", updatedProfile);



//Template Literals

const userName = "Fatima";
const age = 24;

const intro = `My name is ${userName} and I am ${age} years old.`;

console.log(intro);

//Rectangle Area

const width = 8;
const height = 5;

const areaMessage =
   `The area of the rectangle is ${width * height}`;

console.log(areaMessage);   


// Array Methods 

const products = [
    {name: "Laptop", price: 450000, inStock: true },
    {name: "Mouse", price: 8000, inStock: true },
    {name: "Monitor", price: 10000, inStock: false },
    {name: "Keyboard", price: 15000, inStock: true },
];

//Product names
const productNames = products.map(product => product.name);

console.log(productNames);

// In stock products
const inStockProducts = products.filter(
    product => product.inStock
);

console.log(inStockProducts);

//Uppercase names of in-stock products 
const uppercaseCaseNames = products
   .filter(product => product.inStock
    .map(product => product.name.toUpperCase()),
   )

console.log(upperCaseNames);

// Ternary Operator

const role = "editor";

const access =
  role === "admin"
  ? "Full Access"
  : role === "editor"
  ? "Edit Access"
  : role === "viewer"
  ? "Read Only"
  : "No Access"

  console.log(access);

  // logical &&

  const cartItems = 0;

  console.log(cartItems && "View Cart");

  // Because cartItems is 0 (falsy),
  // Javascript returns 0 instead of "View Cart"

  console.log(cartItems > 0 && "View Cart");


// ES Modules

import formatCurrency, {
    add,
    capitalize,
    APP_VERSION
} from "./utilis";


console.log(add(10, 20));

console.log(capitalize("javascripts"));

console.log(APP_VERSION);

console.log(formatCurrency(45000));



