<a href="./Enums.md">What is the use of enums in TypeScript? Provide an example of a numeric and string enum.</a>



# Use of Enums in TypeScript

## What are Enums?
Enums in TypeScript are a way to define a set of named constants. They make it easier to work with fixed values, like a list of options, by giving them meaningful names. Enums can be numeric or string-based.

## When to use Enums?
- When you have a fixed set of values that don’t change, like days of the week, roles, or statuses.
- To make code more readable and avoid using plain numbers or strings.

## Numeric Enum Example
A numeric enum assigns numbers to names automatically, starting from 0 (unless specified).

```typescript
// Define a numeric enum for days of the week
enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

// Using the enum
let today: Days = Days.Wednesday;
console.log(today); // Output: 2 (because Wednesday is at index 2)
console.log(Days[today]); // Output: Wednesday
```

## String Enum Example
A string enum assigns string values to names, making it more descriptive.

```typescript
// Define a string enum for user roles
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}

// Using the enum
let role: UserRole = UserRole.Editor;
console.log(role); // Output: EDITOR
```

## How Enums Work
- Numeric enums assign numbers (0, 1, 2, etc.) to names by default, but you can set custom numbers.
- String enums use specific strings for better clarity.
- Enums make code easier to understand and prevent mistakes, like using wrong values.





<a href="./keyOF.md">What are some differences between interfaces and types in TypeScript?</a>


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
