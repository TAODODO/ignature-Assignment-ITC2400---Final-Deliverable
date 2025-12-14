document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector(".contact-form");

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const city = document.getElementById("city");
  const zip = document.getElementById("zip");
  const email = document.getElementById("email");

  function capitalize(text) {
    text = text.trim();
    if (text === "") return "";
    return text[0].toUpperCase() + text.slice(1);
  }

  form.addEventListener("submit", function (e) {

    firstName.value = capitalize(firstName.value);
    lastName.value = capitalize(lastName.value);
    city.value = capitalize(city.value);

    if (!/^\d{5}(-\d{4})?$/.test(zip.value)) {
      e.preventDefault();
      alert("Zip code must be 5 digits or 12345-6789 format.");
      zip.focus();
      return;
    }

    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.value)) {
      e.preventDefault();
      alert("Please enter a valid email address.");
      email.focus();
      return;
    }

  });

});
