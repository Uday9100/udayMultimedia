function pluralize(noun, number) {
    if (number === 1) {
        return number + " " + noun;
    } else {
        if (noun === "sheep" || noun === "geese") {
            return number + " " + noun;
        } else {
            return number + " " + noun + "s";
        }
    }
}

function pluralizeNoun() {
    var nounInput = document.getElementById("noun").value;
    var numberInput = parseInt(document.getElementById("number").value);

    if (!isNaN(numberInput) && nounInput.trim() !== "") {
        var result = pluralize(nounInput, numberInput);
        var resultElement = document.getElementById("result");
        resultElement.textContent = result;
    } else {
        alert("Please enter a valid noun and number.");
    }
}