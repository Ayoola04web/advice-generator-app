// TASK 1 - VARIABLES AND DATA TYPES


let firstName = "Ayoola";
let lastName = "Aworeni";
let age = 25;
let isEnrolled = true;
let graduationDate =null;

//values that should not change use const.
const studentId = "STU-00123";
const gpa = 4.5;

console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
console.log("Student ID:", studentId);
console.log("GPA:", gpa);
console.log("Is Enrolled:", isEnrolled);
console.log("Graduation Date:", graduationDate);

//Reassign firstname to a nickname 
firstName ="Ayo";

console.log("Nickname:", firstName);


// Task 2 - Operators

let totalScore = 0;
console.log("Initial Score:", totalScore);


totalScore += 45;
console.log("After First Test (+-45):", totalScore);

totalScore += 30;
console.log("After Second Test (+30):", totalScore);

totalScore -= 5;
console.log("After Deduction (-5):", totalScore);

totalScore *= 2;
console.log("After Bonus Round (x2):", totalScore);

totalScore++;
console.log("After Increment (+1):", totalScore);

console.log("Remainder when divided by 7:", totalScore % 7);


//Task 3 -- Type Conversion


let studentAge = "19";
let examScore = "74.5";
let passMark = "50";
let studentName = 101;


// parseInt converts the age string into a whole number.
studentAge = parseInt(studentAge);

// parseFloat converts the score string into a decimal number
examScore = parseFloat(examScore);

// Number ()converts the pass mark string into a number
passMark = Number(passMark);

// String() converts the numeric name value into text
studentName = String(studentName);


console.log("studentAge:", studentAge, "|Type:", typeof studentAge);
console.log("examScore:", examScore, "|Type:", typeof examScore);
console.log("passMark:", passMark, "|Type:", typeof passMark);
console.log("studentName:", studentName, "|Type:", typeof studentName);


// Compare examScore and passMark
console.log("examScore > passMark:", examScore > passMark)


// Task 4 - Conditional Statements 
//====================================

// Part A - if / else if / else 

// Test 1 
let score = 73;
let grade;

if  (score >= 70) {
    grade = "A - Distinction";
} else if (score >= 60) {
    grade = "B -Merit";
} else if (score >= 50) {
    grade = "C - Pass";
} else if (score >= 40) {
    grade ="D - Near Pass";
} else {
    grade = "F - Fail";
}

console.log(`Score: ${score} | Grade: ${grade}`);

/*
// Test 2
let score = 65;
let grade;


if  (score >= 70) {
    grade = "A - Distinction";
} else if (score >= 60) {
    grade = "B -Merit";
} else if (score >= 50) {
    grade = "C - Pass";
} else if (score >= 40) {
    grade ="D - Near Pass";
} else {
    grade = "F - Fail";
}

console.log(`Score: ${score} | Grade: ${grade}`);
*/



/*
// Test 3
let score = 38;
let grade;

if   (score >= 70) {
    grade = "A - Distinction";
} else if (score >= 60) {
    grade = "B -Merit";
} else if (score >= 50) {
    grade = "C - Pass";
} else if (score >= 40) {
    grade ="D - Near Pass";
} else {
    grade = "F - Fail";
}

console.log(`Score: ${score} | Grade: ${grade}`);
*/



// ===========================================
// Part B - switch statement
// ===========================================

// Test 1
let monthNumber = 3;

switch (monthNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break
     case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break
     case 9:
        console.log("September");
        break
     case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number");
}

/*
// Test 2
monthNumber = 8;

switch (monthNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break
     case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break
     case 9:
        console.log("September");
        break
     case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number");
}
*/


/*
// Test 3 (Invalid)
monthNumber = 15;

switch (monthNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break
     case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break
     case 9:
        console.log("September");
        break
     case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number");
}
*/










