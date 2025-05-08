🆚 Interface vs Type in TypeScript
In TypeScript, one of the first things you'll encounter is the ability to define the shape of objects using either interface or type. While they often seem interchangeable, there are key differences between the two.

🧩 What is an Interface?
An interface in TypeScript is used to describe the structure of an object — the properties and methods it can have.

✅ Example
typescript
Copy
Edit
interface Person {
  name: string;
  age: number;
  greet(): void;
}

const user: Person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log("Hello!");
  }
};
🏷️ What is a Type Alias?
A type in TypeScript can define not just object shapes, but any kind of type — including primitives, unions, tuples, intersections, and more.

✅ Example
typescript
Copy
Edit
type Person = {
  name: string;
  age: number;
  greet(): void;
};

type Status = "active" | "inactive";
type UserId = number | string;
👉 type is generally more flexible than interface.

🔍 Key Differences Between interface and type
Feature	interface	type
Extending	extends keyword	Intersection: type A = B & C
Declaration Merging	✅ Supported	❌ Not Supported
Unions / Primitives	❌ Not Supported	✅ Supported
Implements in Classes	✅ Yes	✅ Yes
Complex Composition	Limited	More powerful (supports union & intersection)

⚖️ When to Use interface vs type
✔️ Use interface when:
Defining the shape of an object or class

You want declaration merging (e.g., extending 3rd-party interfaces)

Following OOP-style development patterns

✔️ Use type when:
You need to define unions or intersections

You’re aliasing primitives, tuples, or other complex structures

You follow a functional programming approach

✅ Conclusion
While interface and type can be used to describe similar shapes in TypeScript, they excel in different scenarios.

🔹 Use interface for object shapes and class contracts
🔹 Use type for unions, primitives, and advanced compositions

Understanding these differences helps you write cleaner, scalable, and more maintainable TypeScript code.

