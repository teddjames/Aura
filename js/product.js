document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      button.textContent = "Added to Cart";

      button.disabled = true;
    });
  });
});
