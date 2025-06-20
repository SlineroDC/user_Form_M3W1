// We start by creating our name and age variables that they take my data from the html inputs
// Get references to HTML elements by their IDs
const nameUser = document.getElementById("name");
const ageUser = document.getElementById("age");
const send = document.getElementById("answer");
const btn = document.getElementById("btninfo");

// Add click event listener to the button
btn.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent form submission

    const nameValue = nameUser.value; // Get the value from name input
    const ageValue = ageUser.value;   // Get the value from age input
    const ageNumber = parseInt(ageValue); // Convert age to number

    // Check if name is empty
    if (nameValue === "") {
        send.textContent = "The field cannot be empty in name";
        return;
    }
    // Check if age is not a number
    else if (isNaN(ageNumber)) {
        send.textContent = "Please enter a valid number";
        return;
    }
    else if(ageNumber<=0){
        send.textContent = "Please enter a number greater than zero"
    }
    // If age is less than 18
    else if (ageNumber < 18) {
        send.textContent = `Hello ${nameValue}, you're young! You have the whole world to explore!`;
    }
    // If age is 18 or more
    else {
        send.textContent = `Hi ${nameValue}, You're adult. Life is a journey, not a destination. Keep moving forward and enjoy the ride.`;
    }
})
