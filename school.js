const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};

function countCalculation(school) {
  const {
    departments: { math: { mathTeachersCount }, history: { historyTeachersCount } },
    students: { length: mathStudentsCount },
  } = school;
  return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount: school.departments.history.students };
}

console.log(countCalculation(school)); 

function findTopStudent(school, courseName) {
  const topStudent = school.students.reduce((top, current) => {
    if (!top || current.scores[courseName] > top.scores[courseName]) {
      return current;
    }
    return top;
  }, null);
  return topStudent;
}

console.log(findTopStudent(school, 'math')); 

function addNewDept(school, newDepartment) {
  return {
    ...school,
    departments: {
      ...school.departments,
      [newDepartment.name]: newDepartment,
    },
  };
}

const newDepartment = { name: "art", teachers: 2, students: 50 };
console.log(addNewDept(school, newDepartment)); 

function highestStudentCountDepartment(school) {
  const departmentWithHighestStudents = Object.entries(school.departments).reduce((maxDept, currentDept) => {
    const [deptName, { students }] = currentDept;
    return students > (maxDept ? maxDept[1].students : 0) ? currentDept : maxDept;
  }, null);
  return departmentWithHighestStudents ? departmentWithHighestStudents[0] : null; 
}

console.log(highestStudentCountDepartment(school)); 
const greetings = {
  English: "Hello",
  Spanish: "¡Hola",
  French: "Bonjour",
};

function generateGreeting(name, language = 'English') {
  const greeting = greetings[language] || greetings.English; 
  return `${greeting}, ${name}!`;
}

console.log(generateGreeting("Alice")); 
console.log(generateGreeting("Bob", "Spanish")); 
console.log(generateGreeting)
