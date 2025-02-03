document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  const messageBox = document.createElement("div");
  messageBox.id = "formMessage";

  form.parentNode.insertBefore(messageBox, form.nextSibling);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
      messageBox.textContent = "Please fill in all the fields.";
      messageBox.style.color = "red";
      return;
    }

    messageBox.textContent = `Thank you for contacting us, ${name}! We will get back to you soon.`;
    messageBox.style.color = "#bfa06c";

    form.reset();
  });
});
