const start = parseInt(prompt("Enter the starting number:"));
const end = parseInt(prompt("Enter the ending number:"));

if (!isNaN(start) && !isNaN(end)) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            alert(`${i} is even`);
        } 
        else {
          alert(`${i} is odd`);
        }
    }
}
else
    {
        alert("Invalid input. Please enter valid numbers.");
    }
