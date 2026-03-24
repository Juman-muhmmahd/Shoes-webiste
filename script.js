function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

function addToCart(product) {
  alert(product + " added to cart!");
}

function submitForm(e) {
  e.preventDefault();
  alert("Message sent successfully!");
}