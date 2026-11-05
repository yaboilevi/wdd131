// JavaScript objects

const aCourse = {
  code: "WDD 131",
  name: "Dynamic Web Fundamentals",
  credits: "2",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 353",
      enrolled: 9,
      days: "MWF",
      instructor: "Bro Warner",
    },
  ],
  // find the section they entered and add one student to just that section
  enrollStudent: function (sectionNumber) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNumber,
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
    }
  },
};

// fill in the course name and code
function setCourseInfo(course) {
  document.querySelector("#courseName").textContent = course.name;
  document.querySelector("#courseCode").textContent = course.code;
}

// build one table row for a section
function sectionTemplate(section) {
  return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
  </tr>`;
}

// build all rows and put them in the table body
function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections").innerHTML = html.join("");
}

setCourseInfo(aCourse);
renderSections(aCourse.sections);

// event listener when button is pressed
document.querySelector("#enrollStudent").addEventListener("click", (e) => {
  const sectionNumber = document.querySelector("#sectionNumber").value.trim();
  aCourse.enrollStudent(sectionNumber);
});
