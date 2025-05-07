
# Use of keyof Keyword in TypeScript

## What is keyof?
`keyof` is a special keyword in TypeScript. It takes all the property names (keys) from an object type and creates a union type. In simple words, it tells us what properties an object has.

## When to use it?
- When we need to dynamically use the property names of an object.
- When we want to make sure a key is only a valid property of the object.

## Example
Here is a simple example:

```typescript
// Define an interface for a student
interface Student {
  name: string;
  age: number;
  grade: string;
}

// Use keyof to get all property names
type StudentKeys = keyof Student; // "name" | "age" | "grade"

// Function to get a property value dynamically
function getProperty(obj: Student, key: StudentKeys) {
  return obj[key];
}

// Example usage
const student: Student = {
  name: "Rohan",
  age: 15,
  grade: "A"
};

console.log(getProperty(student, "name")); // Output: Rohan
console.log(getProperty(student, "age")); // Output: 15
```

## How it works
- `keyof Student` creates a union type: `"name" | "age" | "grade"`.
- The `getProperty` function uses this to ensure only valid keys (`name`, `age`, or `grade`) are passed.
- This makes the code safe and prevents errors like trying to access a property that doesn’t exist.
