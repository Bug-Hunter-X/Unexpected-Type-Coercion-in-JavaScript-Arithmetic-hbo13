# Unexpected Type Coercion in JavaScript Arithmetic

This repository demonstrates a common JavaScript bug involving type coercion and unexpected behavior when performing arithmetic operations with null values or different data types. The bug.js file contains the erroneous code, while bugSolution.js provides a corrected version.

## Bug Description
The original code attempts to add two numbers. However, it lacks sufficient input validation, which leads to type errors when non-numeric values are involved.

## How to Reproduce
1. Clone this repository.
2. Open bug.js in a browser's console or a JavaScript environment.
3. Observe the unexpected output and the error that occurs when non-numeric values are used.

## Solution
The bugSolution.js file shows the corrected code. It includes explicit type checking and handling of null values, preventing the type errors that occurred in the original code.