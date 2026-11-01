const form = document.querySelector("#ticketForm");
const attendeeType = document.querySelector("#attendeeType");
const accessContainer = document.querySelector("#accessContainer");
const accessInput = document.querySelector("#accessInput");
const output = document.querySelector("#output");

function updateAccessField() {
  const value = attendeeType.value;

  // Show the access field and update its label based on the selected type

  const label = accessContainer.querySelector("label");

  accessContainer.hidden = value === ""; // hide when nothing is chosen

  if (value === "student") {
    label.textContent = "Student I#";
  } else if (value === "guest") {
    label.textContent = "Access Code";
  }

  accessInput.value = "";
}

attendeeType.addEventListener("change", updateAccessField);
updateAccessField();

// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  // Adding "T00:00" makes the date local time instead of UTC
  const chosen = new Date(value + "T00:00");
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.attendeeType.value;
  const eventDate = form.eventDate.value;
  const accessValue = form.accessInput.value.trim();

  // Validate the input
  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  // Students must enter exactly 9 digits for their I#
  if (type === "student" && !/^\d{9}$/.test(accessValue)) {
    output.textContent = "Student I# must be exactly 9 digits.";
    return;
  }

  // Guests must enter the event access code
  if (type === "guest" && accessValue !== "EVENT131") {
    output.textContent = "Please enter a valid access code.";
    return;
  }

  // Build the ticket with textContent so typed text can't run as HTML
  const lines = [
    `${firstName} ${lastName}`,
    `Email: ${email}`,
    `Event Date: ${eventDate}`,
    `Ticket Type: ${type}`,
  ];

  const heading = document.createElement("h2");
  heading.textContent = "Ticket Confirmed";
  output.append(heading);

  lines.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    output.append(p);
  });

  form.reset();
  updateAccessField();
});
