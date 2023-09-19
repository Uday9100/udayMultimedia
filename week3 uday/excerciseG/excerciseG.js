function assignGrade(score) {
    if (score >= 90) {
      return 'A';
    } else if (score >= 80) {
      return 'B';
    } else if (score >= 70) {
      return 'C';
    } else if (score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }

  
  function calculateGrade() {
    const scoreInput = document.getElementById('scoreInput');
    const score = parseFloat(scoreInput.value);

    if (!isNaN(score) && score >= 0 && score <= 100) {
      const grade = assignGrade(score);
      alert(`For ${score}, you got a ${grade}.`);
    } else {
      alert('Please enter a valid score between 0 and 100.');
    }
  }