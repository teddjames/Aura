document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".scent-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const scentInput = document.getElementById("favorite-scent");

    if (validateForm(nameInput, emailInput, scentInput)) {
      alert("Thank you for sharing your favorite scent!");
      form.reset();
    }
  });

  function validateForm(name, email, scent) {
    if (name.value.trim() === "") {
      alert("Please enter your name.");
      name.focus();
      return false;
    }

    if (email.value.trim() === "") {
      alert("Please enter your email.");
      email.focus();
      return false;
    }

    if (!validateEmail(email.value)) {
      alert("Please enter a valid email address.");
      email.focus();
      return false;
    }

    if (scent.value.trim() === "") {
      alert("Please share your favorite scent notes.");
      scent.focus();
      return false;
    }

    return true;
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
