```markdown
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
```