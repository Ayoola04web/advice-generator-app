// Basic Types

let studentName: string = "Tunde";

let studentAge: number = 21;

let isEnrolled: boolean = true;

// Incorrect declaration

// let courseName: number = "Frontend Development";

// Wrong because number type cannot hold text

let courseName: string = "Frontend Development";




// Typed Function

function addNumbers (a: number, b: number): number{
    return a + b;
}

function isAdult(age: number): boolean {
    return age >= 18;
}

function getArea(
    width: number,
    height: number
): number {
    return width * height;
}

console.log(addNumbers(5, 10));

console.log(isAdult(21));

console.log(getArea(8, 5));



// Student Interface

interface Student {
    id: number;
    name: string;
    age: number;
    course: string;
    isActive: boolean;
}

const student1: Student = {
    id: 1,
    name: "Amaka",
    age: 22,
    course: "Backend Development",
    isActive: false
};

const student2: Student = {
    id: 2,
    name: "Tunde",
    age: 25,
    course: "Backend Development",
    isActive: false
};

console.log(student1);
console.log(student2);

// Instructor Interface

interface Instructor {
    name: string;
    cohort: number;
    subjects: string[];
}

function introduceInstructor(
    instructor: Instructor
): string {
    return `${instructor.name} teaches Cohort ${instructor.cohort} and covers: ${instructor.subjects.join(", ")}`;
}

const instructor1: Instructor = {
    name: "Stanley",
    cohort: 8,
    subjects: ["HTML", "CSS", "Javascript"]
};

console.log(
    introduceInstructor(instructor1)
);


// Arrays

let names: string[] = [
    "Ada",
    "Bola",
    "Chidi"
];

let scores: number[] = [
    78,
    90,
    55,
    88
];

// Union Types

function formatId(
    id: string | number
): string {
    return String(id);
}


console.log(formatId(42));

console.log(formatId("abc"));
    
