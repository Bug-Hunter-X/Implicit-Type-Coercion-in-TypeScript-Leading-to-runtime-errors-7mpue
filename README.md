# Implicit Type Coercion in TypeScript

This example demonstrates a potential issue in TypeScript where implicit type coercion can lead to runtime errors that aren't caught during compilation.

The `add` function is declared to accept two numbers, but the code calls it with a number and a string.  TypeScript doesn't throw a compile-time error. Instead, the code will run, but the result is `NaN`, indicating a runtime error.

The solution involves using type guards or stricter type checking to avoid this.