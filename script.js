
// Function to handle form validation and success message display
(function () {
  'use strict'

  // Select all forms with validation class
  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault() // Prevent the form from submitting

      // Check if form is valid
      if (!form.checkValidity()) {
        event.stopPropagation() // Stop form submission if invalid
      } else {
        // Hide the form and show the success message
        document.getElementById('checkout-form').style.display = 'none'
        document.getElementById('success-message').style.display = 'block'
      }

      // Add Bootstrap validation classes to the form
      form.classList.add('was-validated')
    }, false)
  })
})();
