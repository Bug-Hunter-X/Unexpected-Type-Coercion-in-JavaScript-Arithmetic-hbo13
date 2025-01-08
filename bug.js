function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Potential error if a or b is not a number
}

console.log(foo(10, 20)); // 30
console.log(foo(10, null)); // null
console.log(foo('hello', 20)); //Uncaught TypeError: Cannot convert object to primitive value