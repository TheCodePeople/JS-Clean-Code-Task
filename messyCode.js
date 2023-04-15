// Example 1 - Messy Code
function c(a){return a+1;}function b(a){return c(a);}function a(a){return b(a);}
console.log(a(2));

// Example 2 - Spaghetti Code
function calculateSum(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i];
  }
  for (let i = 0; i < b.length; i++) {
    result += b[i];
  }
  return result;
}
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
console.log(calculateSum(numbers1, numbers2));

// Example 3 - Poorly Written Code
let x=3;let y=5;let z=7;let q=2;let w=4;let e=6;
if (x > 0 && y > 0 && z > 0) {
  console.log('x, y, and z are all positive numbers');
}
if (q > 0 || w > 0 || e > 0) {
  console.log('At least one of q, w, or e is a positive number');
}

// Example 4: Deeply nested conditionals
function calculateGrade(score) {
  if (score >= 90) {
    if (score === 100) {
      return 'A+';
    } else {
      return 'A';
    }
  } else if (score >= 80) {
    if (score === 89) {
      return 'B+';
    } else {
      return 'B';
    }
  } else if (score >= 70) {
    if (score === 70) {
      return 'C-';
    } else {
      return 'C';
    }
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// Example 5: Long function with multiple responsibilities
function processOrder(order) {
  validateOrder(order);
  calculateTotal(order);
  applyDiscount(order);
  sendNotification(order);
  updateInventory(order);
  logOrder(order);
}

// Example 6: Duplicate code
function calculateArea(shape, width, height) {
  if (shape === 'rectangle') {
    return width * height;
  } else if (shape === 'triangle') {
    return (width * height) / 2;
  } else if (shape === 'circle') {
    return Math.PI * Math.pow(width, 2);
  } else {
    throw new Error('Invalid shape');
  }
}
