// Example 1 - Messy Code
function numberPlusOne(number) {
  return number + 1;
}

console.log(numberPlusOne(2)); // => 3

// Example 2 - Spaghetti Code
function calculateSum(numbers1, numbers2) {
  let result = 0;
  for (let i = 0; i < numbers1.length; i++) {
    result += numbers1[i];
  }
  for (let i = 0; i < numbers2.length; i++) {
    result += numbers2[i];
  }
  return result;
}
let arrayOfNumber1 = [1, 2, 3];
let arrayOfNumber2 = [4, 5, 6];
console.log(calculateSum(arrayOfNumber1, arrayOfNumber2)); // => 21

// Example 3 - Poorly Written Code
let numbers = [3, 5, 7, 2, 4, 6, -1];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    console.log(`number ${numbers[i]} is positive number`);
  } else if (numbers[i] < 0) {
    console.log(`number ${numbers[i]} is negative number`);
  }
}

// Example 4: Deeply nested conditionals
function calculateGrade(score) {
  if (score === 100) return "A+";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

console.log(calculateGrade(90));

// Example 5: Long function with multiple responsibilities
function processOrder(order, callFunction) {
  const getCallFuncData = callFunction(order);
}
processOrder(2, log_order);
// validate_order(order); //validates the order and returns a validated order.
//   calculate_total(order); //calculates the total price of the order.
//   apply_discount(order); //applies the discount to the order and returns the discounted price.
//   send_notification(order); //sends a notification about the order.
//   update_inventory(order); // updates the inventory after the order is processed.
//   log_order(order); //logs the order.
// Example 6: Duplicate code
function calculateArea(shape, width, height) {
  switch (shape) {
    case "rectangle":
      return `the area is ${width * height}`;
    case "triangle":
      return `the area is ${(width * height) / 2}`;
    case "circle":
      return `the area is ${Math.PI * Math.pow(width, 2)}`;
    default:
      throw new Error("Invalid shape");
  }
}
console.log(calculateArea("rectangle", 5, 10));
console.log(calculateArea("triangle", 4, 8));
console.log(calculateArea("circle", 3));
