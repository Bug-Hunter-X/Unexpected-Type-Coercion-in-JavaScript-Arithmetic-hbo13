function foo(a, b) {
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    return null; // Handle null or non-numeric values
  }
  return a + b; // Corrected addition
}

console.log(foo(10, 20)); // 30
console.log(foo(10, null)); // null
console.log(foo('hello', 20));// null
console.log(foo(10, '20')); // null