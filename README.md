
# 📌  What’s the Difference Between Interface vs Types in TypeScript?

In TypeScript, one of the first things you will encounter is the ability to define the shape of objects using either interface or type While they often appear interchangeable, there are key differences between this two. 



## What is an Interface?

An interface in TypeScript is used to describe the structure of an object. It defines the properties and methods an object can have.

## Usage/Examples

```javascript

interface Person {
  name: string;
  age: number;
  greet(): void;
}

```


You can then use this interface to type-check objects:

```javascript

const user: Person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log("Hello!");
  }
};

```
## What is a Type Alias?
A type in TypeScript can define not just objects, but any kind of type — including primitives, unions, tuples, intersections, and more.
```javascript

type Person = {
  name: string;
  age: number;
  greet(): void;
};

type Status = "active" | "inactive";
type UserId = number | string;

```
So, type is more flexible than interface.

##  Key Differences Between interface and type

- Extending:
   - interface: Can extend using the extends keyword

  - type: Can extend using intersections (&)

- Declaration Merging:

  - interface: Supported (can merge multiple declarations)

  - type:  Not supported

- Use for Primitives/Unions:

  - interface:  Not allowed

  - type:  Allowed (type ID = number | string)

- Implements by Classes:

  - interface:  Yes

  - type:  Yes

- Complex Composition:

  - interface: Limited support

  - type: More powerful — supports unions, intersections, and advanced types
## Conclusion
While interface and type in TypeScript can seem similar, they serve different purposes and excel in different scenarios. As a rule of thumb:
- Use interface for object shapes and class contracts.
- Use type for everything else (especially unions, primitives, and advanced types).
Understanding these distinctions will help you write cleaner, more maintainable TypeScript code.





# 📌 The use of enums in TypeScript? With example of a numeric and string enum.

TypeScript adds powerful tools to JavaScript to help developers write safer and more readable code and one of those tools is the enum. Short for 'enumeration', enums let you define a set of named constants, making your code more expressive and maintainable.

## What is an Enum?
An enum in TypeScript is a way to define a collection of related values under a single name. It’s often used to represent a fixed set of options, such as directions, status codes, or user roles.

### Why use enums?
- Make code more readable and self-documenting

- Avoid "magic strings" or numbers in your logic

- Group related values under a single type


### Numeric Enums
By default, TypeScript enums are numeric. They start at 0 and increment automatically.

## Example:
```javascript
enum Direction {
  North,
  East,
  South,
  West
}

let dir: Direction = Direction.East;
console.log(dir); // Output: 1


```
### String Enums
If you want more readable output or need fixed string values (like for API calls), you can use string enums.

### Example:
```javascript
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}

const role: UserRole = UserRole.Admin;
console.log(role); // Output: "ADMIN"



```
## When to Use Enums
Use enums when:

- You have a fixed set of related constants

- You want more meaningful names over raw values

- You’re dealing with sets of states, roles, types, etc.
# Conclusion
Enums in TypeScript help you write clearer, more maintainable code by giving semantic names to constant values. Whether you choose numeric or string enums, they’re a powerful addition to your TypeScript .
