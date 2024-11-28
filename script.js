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
