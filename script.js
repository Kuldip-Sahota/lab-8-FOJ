let student = {
    name: "John Doe",
    age: 20,
    enrolled: true,
    courses: ["Math", "Science", "History"],
    displayInfo: function() {
        return `${this.name}, Age: ${this.age}`;
    }
};

console.log(student.name);
console.log(student.age);
console.log(student.displayInfo());

let studentJSON = JSON.stringify(student);
console.log(studentJSON);

let studentObj = JSON.parse(studentJSON);
console.log(studentObj);

let { name, courses } = student;
console.log(name, courses);

let scores = [85, 92, 78, 90];
let [firstScore, secondScore] = scores;
console.log(firstScore, secondScore);

let clonedStudent = { ...student };
console.log(clonedStudent);

clonedStudent.graduationYear = 2025;
console.log(clonedStudent);

let newCourses = ["Art", "Music"];
let allCourses = [...student.courses, ...newCourses];
console.log(allCourses);

student.addCourse = function(course) {
    this.courses.push(course);
};
student.getTotalCourses = function() {
    return this.courses.length;
};

student.addCourse("English");
console.log(student.getTotalCourses());
