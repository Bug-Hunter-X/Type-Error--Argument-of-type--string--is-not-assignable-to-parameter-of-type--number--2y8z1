# Type Error in TypeScript

This repository demonstrates a common type error in TypeScript where a string is passed as an argument to a function expecting a number.  The TypeScript compiler catches this error, preventing runtime surprises.

## Bug Description

The `add` function is defined to accept two number parameters. However, in the code, the function is called with a string as the second argument. This results in a compile-time error because TypeScript's type system enforces type safety.

## How to reproduce:

1. Clone this repository.
2. Compile the TypeScript code using the TypeScript compiler (tsc).
3. Observe the compilation error indicating a type mismatch.

## Solution

Ensure that all arguments passed to a function match the function's parameter types.  Explicit type checking is crucial in TypeScript to maintain type safety.