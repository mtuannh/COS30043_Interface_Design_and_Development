//link to the form and the toggle button in HTML
const form = document.getElementById("applicationForm");
const toggleTermsBtn = document.getElementById("toggleTermsBtn");
const termsBox = document.getElementById("termsBox");

//function to set error message for a specific field
function setError(id, message) {
  const errorElement = document.getElementById(id + "Error");
  errorElement.textContent = message;
}

//function to clear all error messages before validating the form again
function clearAllErrors() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((item) => {
    item.textContent = "";
  });
}

//if the date of birth is over 16 years old 
function isAtLeast16(dobValue) {
  const dob = new Date(dobValue);
  if (Number.isNaN(dob.getTime())) {
    return false;
  }

  //calculate age based on the current date and the date of birth
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  return age >= 16;
}

//event listener for form submission to validate the form fields
form.addEventListener("submit", function (event) {
  clearAllErrors();
  let isValid = true;

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const email = document.getElementById("email").value.trim();
  const street = document.getElementById("street").value.trim();
  const suburb = document.getElementById("suburb").value.trim();
  const postcode = document.getElementById("postcode").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const dob = document.getElementById("dob").value;
  const jobCategory = document.getElementById("jobCategory").value;

  if (!/^[A-Za-z]+$/.test(firstName)) {
    setError("firstName", "First name is required and letters only.");
    isValid = false;
  }

  if (!/^[A-Za-z]+$/.test(lastName)) {
    setError("lastName", "Last name is required and letters only.");
    isValid = false;
  }

  if (username.length < 3) {
    setError("username", "Username must be at least 3 characters.");
    isValid = false;
  }

  if (!/^.{8,}$/.test(password) || !/[$%^&*]/.test(password)) {
    setError("password", "Password must be 8+ characters with one special char ($ % ^ & *).");
    isValid = false;
  }

  if (confirmPassword !== password || confirmPassword === "") {
    setError("confirmPassword", "Confirm password must match password.");
    isValid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError("email", "Enter a valid email address.");
    isValid = false;
  }

  if (street.length > 40) {
    setError("street", "Street address must be at most 40 characters.");
    isValid = false;
  }

  if (suburb.length > 20) {
    setError("suburb", "Suburb must be at most 20 characters.");
    isValid = false;
  }

  if (!/^\d{4}$/.test(postcode)) {
    setError("postcode", "Postcode must be exactly 4 digits.");
    isValid = false;
  }

  if (!/^04\d{8}$/.test(mobile)) {
    setError("mobile", "Mobile number must be 10 digits and start with 04.");
    isValid = false;
  }

  if (!dob || !isAtLeast16(dob)) {
    setError("dob", "Date of birth is required. Applicant must be at least 16 years old.");
    isValid = false;
  }

  if (!jobCategory) {
    setError("jobCategory", "Please select a preferred job category.");
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }
});

//event listener for the toggle button to show/hide the terms and conditions box
toggleTermsBtn.addEventListener("click", function () {
  termsBox.classList.toggle("hidden");
});
