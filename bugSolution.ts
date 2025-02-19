function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: arguments must be numbers');
  }
  return a + b;
}

let result1 = add(1, '2'); // Still compiles, result is NaN
let result2 = addSafe(1, 2); // Correct
console.log(result1); // NaN
console.log(result2); // 3

//Alternative solution using a more restrictive type definition.
function addStrict(a: number, b: number): number {
    return a + b;
}

//This will now produce a compile-time error because the types are strictly enforced.
//let result3 = addStrict(1, '2'); 