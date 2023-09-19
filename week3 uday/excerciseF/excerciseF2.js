function calculateResult(multiplier, number) {
    return `${multiplier} * ${number} = ${multiplier * number}`;
  }

 
  const tables = [];


  for (let multiplier = 1; multiplier <= 10; multiplier++) {
   
    const table = [];
    for (let number = 0; number <= 10; number++) {
      table.push(calculateResult(multiplier, number));
    }

    tables.push(`Multiplication table for ${multiplier}:\n${table.join('\n')}`);
  }

  
  const tablesText = tables.join('\n\n');
  alert(tablesText);