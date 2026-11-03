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
  enrolled: function (sectionNumber) {
    console.log(this.name);
  },
};

console.log(aCourse.name);
aCourse.enrolled(1);

// event listener when button is pressed
document.querySelector("#enrollStudent").addEventListener("click", (e) => {
  let sectionNumber = document.querySelector("#sectionNumber").value.trim();

  aCourse.sections.forEach((sections) => {
    if (sections.sectionNum == sectionNumber) {
      sections.enrolled += 1;
    }
    console.log(sections.sectionNum);
    console.log(sections.enrolled);
  });
});

//when pressed, fund the section num they entered

//increment enrollment of just that section by 1
