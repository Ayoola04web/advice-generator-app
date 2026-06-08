// QUESTION 1: Create Student Objects

const students = [
    {
        id: 1,
        name: "Alice Johnson",
        age: 20,
        grades: [85, 92, 78]
    },
    {
        id: 2,
        name: "John Smith",
        age: 22,
        grades: [65, 70, 68]
    },
    {
        id: 3,
        name: "Mary Brown",
        age: 19,
        grades: [95, 90, 98]
    },
    {
        id: 4,
        name: "David Wilson",
        age: 21,
        grades: [50, 55, 58]
    },
    {
        id: 5,
        name: "Sarah Davis",
        age: 20,
        grades: [75, 80, 72]
    }
];

console.log("Students Array:", students);

// QUESTION 2: Calculate Averages

function calculateAverage(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / grades.length;

    return Number(average.toFixed(2));
}

const studentsWithAverage = students.map(student => {
    return {
        ...student,
        average: calculateAverage(student.grades)
    };

});

console.log("Students With Average:", studentsWithAverage);


// QUESTION 3: Filter Passing Students

function getPassingStudents(students) {
    return students.filter (student => student.average >= 60);
}

const passingStudents = getPassingStudents(studentsWithAverage);

console.log("Passing Students:", passingStudents);

// QUESTION 4: Function & Callbacks

function processStudents(students, callback) {
    return students.map(student => callback(student));
}

function addLetterGrade(student) {
    let grade;

    if (student.average >= 90) {
        grade ="A";
    } else if (student.average >= 80) {
        grade = "B";  
    } else if (student.average >= 70) {
        grade = "C";
    } else if (student.average >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }
    return {
        ...student,
        letterGrade: grade
    };
}

function addStatus(student) {
    return {
        ...student,
        status: student.average >= 60 ? "Pass" : "Fail"
    };
}

const studentsWithGrades = processStudents(
    studentsWithAverage,
    addLetterGrade
);

console.log("Students With Letter Grades:", studentsWithGrades);

const studentsWithStatus = processStudents(
    studentsWithAverage,
    addStatus
);

console.log("Students With Staus:", studentsWithStatus);


// QUESTION 5: Find Student by ID

function findStudentsById(students, id) {
    const student = students. find(student => student.id === id);

    return student || null;
}

const foundStudent = findStudentsById(students, 3);
console.log("Student Found:", foundStudent);

const notFound =findStudentsById(students, 10);
console.log("Student Not Found:", notFound);