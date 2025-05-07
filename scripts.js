// Update total price when quantity changes
document.querySelectorAll('.quantity').forEach((input, index) => {
    input.addEventListener('input', () => {
      const productDiv = input.closest('.product');
      const price = parseFloat(productDiv.getAttribute('data-price'));
      const quantity = parseInt(input.value) || 0;
      const total = price * quantity;
      productDiv.querySelector('.total').textContent = total.toFixed(2);
    });
  });
  
  // Function for button click
  function goToFinishCart() {
    window.location.href = "finish-cart.html";
  }
  