function calculateResult(number)
{
    return `${number} * 9 = ${number * 9}`;
}

   const results = [];

for (let i = 0; i <= 10; i++) 
{
    results.push(calculateResult(i));
}
  const resultsText = results.join('\n');
  alert(`Multiplication results:\n${resultsText}`);