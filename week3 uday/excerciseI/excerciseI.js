
const choices = ["kumar", "bhuvi", "virat"];

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

// Loop through the choices and log them with the appropriate suffix
for (let i = 0; i < choices.length; i++) {
    const choiceNumber = i + 1;
    const suffix = getSuffix(choiceNumber);
    const choiceText = `My ${choiceNumber}${suffix} choice is ${choices[i]}`;

    // Create a list item and append it to the ul element
    const listItem = document.createElement("li");
    listItem.textContent = choiceText;
    document.getElementById("choicesList").appendChild(listItem);
}