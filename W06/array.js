let courses = ["WDD131", "CSE290R", "CSE199"];

console.log(courses[0]);
console.log(courses[2]);

let coursesAndGPA = [
  {
    courseName: "WDD131",
    courseGPA: 3.7,
  },
  {
    courseName: "CSE290R",
    courseGPA: 4,
  },
  {
    courseName: "CSE199",
    courseGPA: 4,
  },
];

console.log(coursesAndGPA);
console.log(courseName);
console.log(courseGPA);

// looping through a array

for (let i = 0; 1, coursesAndGPA.length; i++) {
  console.log(coursesAndGPA[i].courseName);
  console.log(coursesAndGPA[i].courseGPA);
}

coursesAndGPA.forEach((item) => {
  console.log(item.courseName);
  console.log(item.courseGPA);
});

let body = document.querySelector("body");

coursesAndGPA.forEach((course) => {
  let dynamicHTML = `
    <div>
        <h2>${course.courseName}</h2>
        <p>${course.courseGPA}</p>
    </div>`;
  document
    .querySelector("#courses")
    .insertAdjacentHTML("beforeend", dynamicHTML);
});
