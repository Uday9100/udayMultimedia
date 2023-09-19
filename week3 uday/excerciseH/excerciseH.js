let choices = []; // Array to hold top choices
let arrayLengthSet = false;

// Function to determine the appropriate suffix for a number
function getSuffix(number) {
    if (number === 1) {
        return "st";
    } else if (number === 2) {
        return "nd";
    } else if (number === 3) {
        return "rd";
    } else {
        return "th";
    }
}

// Function to set the length of the array
function setArrayLength() {
    const arrayLengthInput = document.getElementById("arrayLength");
    const length = parseInt(arrayLengthInput.value);

    if (isNaN(length) || length <= 0) {
        alert("Please enter a valid array length greater than 0.");
        return;
    }

    arrayLengthSet = true;
    choices = []; // Reset the choices array
    document.getElementById("choicesList").innerHTML = ""; // Clear the list
    document.getElementById("printedChoice").textContent = ""; // Clear the printed choice
    document.getElementById("choicesInput").style.display = "block";
}

// Function to add a choice to the list
function addChoice() {
    const choiceInput = document.getElementById("choiceInput");
    const choice = choiceInput.value;

    if (choice.trim() === "") {
        alert("Please enter a choice.");
        return;
    }

    choices.push(choice);
    choiceInput.value = ""; // Clear the input field

    if (choices.length === arrayLengthSet) {
        displayChoices();
    }
}

// Function to display the choices
function displayChoices() {
    const choicesList = document.getElementById("choicesList");

    for (let i = 0; i < choices.length; i++) {
        const choiceNumber = i + 1;
        const suffix = getSuffix(choiceNumber);
        const choiceText = `My ${choiceNumber}${suffix} choice is ${choices[i]}`;

        // Create a list item and append it to the ul element
        const listItem = document.createElement("li");
        listItem.textContent = choiceText;
        choicesList.appendChild(listItem);
    }
}

// Function to print the selected choice
function printChoice() {
    const choiceIndexInput = document.getElementById("choiceIndex");
    const index = parseInt(choiceIndexInput.value);

    if (isNaN(index) || index < 1 || index > choices.length) {
        alert("Please enter a valid choice number.");
        return;
    }

    const choiceNumber = index;
    const suffix = getSuffix(choiceNumber);
    const choiceText = `My ${choiceNumber}${suffix} choice is ${choices[index - 1]}`;
    
    document.getElementById("printedChoice").textContent = choiceText;
}

// Add an event listener to the "Set Length" button
const setLengthButton = document.getElementById("setLength");
setLengthButton.addEventListener("click", setArrayLength);

// Add an event listener to the "Add Choice" button
const addChoiceButton = document.getElementById("addChoice");
addChoiceButton.addEventListener("click", addChoice);

// Add an event listener to the "Print Choice" button
const printChoiceButton = document.getElementById("printChoice");
printChoiceButton.addEventListener("click", printChoice);