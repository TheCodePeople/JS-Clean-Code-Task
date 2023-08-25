// Example 1 - Messy Code
function increment(a){ //rename the functions names and make the logic more readable
  return a + 1;
} 
function process(a){
  return increment(a);
}
console.log(process(2));

// Example 2 - Spaghetti Code
function calculateSum(numbers) {

return numbers.reduce((sum, num) => sum + num, 0); // replace the for loop with reduce to loop easily 
 
}
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
console.log(calculateSum([...numbers1, ...numbers2]));  // use spread syntax to deconstruct an object into separate variables.

// Example 3 - Poorly Written Code

const positiveNum = [3,5,7]; // put the numbers in an array 
const anyNumbers = [2,4,6]
if (positiveNum.every(num => num > 0)) { // use .evrey method to executes a function for each array element.
  console.log('All numbers are positive ');
}
if (anyNumbers.some(num => num > 0)) {
  console.log('At least one number is a positive number');
}

// Example 4: Deeply nested conditionals
function calculateGrade(score) {
  if (score >= 90) {
  return score === 'A';  // use else if instead of nested conditionals to be more simplified 
  } else if (score >= 80) {
    return score === 'B'; {
    }
  } else if (score >= 70) {
    return score === 'C'; {
    }
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// Example 5: Long function with multiple responsibilities
function processOrder(order) {  // create every single function alone to do it`s work

}
  validateOrder(order);{

  }
  calculateTotal(order);{

  }
  applyDiscount(order);{

  }
  sendNotification(order);{

  }
  updateInventory(order);{

  }
  logOrder(order);{

  }


// Example 6: Duplicate code
function calculateArea(shape, width, height) { // use switch for duplicated code and simplified it
    switch (shape) {
      case `rectangle`:
        return width * height;
      case `triangle`:
        return (width * height)/2 ;
      case `circle`:
        return Math.PI*Math.pow(width ,2 );
        default : throw new Error(`Invalid shape`);
    }
  }

