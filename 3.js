let result = 0; // Variable to hold the result

function add() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }

    result = num1 + num2;
    displayResult(); // Update the displayed result
}

function clearFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    result = 0;
    displayResult(); // Update the displayed result
}

function displayResult() {
    document.getElementById('displayResult').textContent = result;
}




function displayGreeting() {

    // Get the current date
    var currentDate = new Date();
  
    // Get the current hour
    var currentHour = currentDate.getHours();
  
    // Define the greeting message based on the current hour
    var greeting;
    if (currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
  
    // Display the greeting message using an alert box
    alert(greeting);
    var userName = document.getElementById("nameInput").value;
  
    // Display the greeting message with the user's name using an alert box
    alert(greeting + ", " + (userName.trim() !== "" ? userName : "there") + "!");
  }

  

  // Get the button element
const colorButton = document.getElementById('colorButton');

// Add click event listener to the button
colorButton.addEventListener('click', function() {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Set the button's background color to the random color
    colorButton.style.backgroundColor = randomColor;
});
