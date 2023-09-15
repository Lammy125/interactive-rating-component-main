const numLabels = document.querySelectorAll(".num");

numLabels.forEach((label) => {
  label.addEventListener("click", () => {
    // Uncheck all radio inputs
    radioInputs.forEach((input) => {
      input.checked = false;
    });

    // Check the clicked radio input
    const radio = label.querySelector('input[type="radio"]');
    radio.checked = true;

    // Reset all label colors to default
    numLabels.forEach((otherLabel) => {
      otherLabel.style.backgroundColor = "hsl(213, 19%, 18%)";
      otherLabel.style.color = "hsl(0, 0%, 100%)";
    });

    // Change the background color and text color of the clicked label
    label.style.backgroundColor = "hsl(217, 12%, 63%)";
    label.style.color = "hsl(0, 0%, 100%)";
  });

  // Add hover effect
  label.addEventListener("mouseenter", () => {
    label.style.backgroundColor = "hsl(25, 97%, 53%)"; // Change background color on hover
  });

  label.addEventListener("mouseleave", () => {
    // Reset to default or the checked state's color
    if (!label.querySelector('input[type="radio"]').checked) {
      label.style.backgroundColor = "hsl(213, 19%, 18%)"; // Default background color
    } else {
      label.style.backgroundColor = "hsl(217, 12%, 63%)"; // Checked background color
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get references to the form, radio inputs, and submit button
  const feedbackForm = document.getElementById("responseContainer");
  const radioInputs = document.querySelectorAll(
    'input[type="radio"][name="number"]'
  );
  const submitButton = document.getElementById("submitBtn");

  // Add a click event listener to the submit button
  submitButton.addEventListener("click", function (event) {
    // Check if any radio input is checked
    let isChecked = false;
    radioInputs.forEach((input) => {
      if (input.checked) {
        isChecked = true;
      }
    });

    // If none of the radio inputs are checked, prevent the form submission
    if (!isChecked) {
      event.preventDefault();
      alert("Please select a rating before submitting.");
    } else {
      // If a radio input is checked, navigate to response.html
      window.location.href = "response.html";
    }
  });

  // Extract the selected rating from the URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const selectedRating = urlParams.get("number");

  // Get the element where we will display the selected rating
  const selectedNumberElement = document.getElementById("selectedNumber");

  // Check if a rating was selected
  if (selectedRating !== null) {
    // Display the selected rating in the HTML
    selectedNumberElement.textContent = selectedRating;
  }
});
