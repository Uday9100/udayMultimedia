function assignGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function calculateGrade() {
    var scoreInput = document.getElementById("score");
    var score = parseFloat(scoreInput.value);

    if (!isNaN(score)) {
        var grade = assignGrade(score);
        var resultElement = document.getElementById("result");
        resultElement.textContent = "Score: " + score + ", Grade: " + grade;
    } else {
        alert("Please enter a valid numeric score.");
    }
}