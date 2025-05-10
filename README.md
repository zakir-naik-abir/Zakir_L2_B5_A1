# Zakir_L2_B5_A1

Question Number 1: What are some differences between interfaces and types in TypeScript?

Here are some differences between interfaces and types in TypeScript:

Declaration Merging:
Interfaces are open to declaration merging, meaning that multiple declarations with the same name will be merged into a single declaration. Types, on the other hand, cannot be merged.

Extending:
Interfaces can extend other interfaces and classes, while types cannot extend classes. However, types can intersect with other types using the & operator.

Use Cases:
Interfaces are primarily used to define the shape of objects and class contracts. Types are more versatile and can be used to define aliases for any kind of type, including primitive types, union types, and intersection types.

Syntax:
Interfaces are defined using the interface keyword, while types are defined using the type keyword.

Error Messages:
When encountering errors related to interfaces, TypeScript often provides more descriptive and helpful error messages compared to errors related to types.



Question Number 2: Provide an example of using union and intersection types in TypeScript.

Union types allow a variable or parameter to hold more than one possible type.

Example: A variable that can be a string or number:
ts
Copy
Edit
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log("Your ID is (string): " + id.toUpperCase());
  } else {
    console.log("Your ID is (number): " + id);
  }
}

printId("abc123");  // Output: Your ID is (string): ABC123
printId(101);       // Output: Your ID is (number): 101
✅ Intersection Types
Intersection types combine multiple types into one. The resulting type has all properties from all the combined types.

Example: Combining two interfaces:
ts
Copy
Edit
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type EmployeeDetails = Person & Employee;

const zakir: EmployeeDetails = {
  name: "Zakir Naik",
  age: 23,
  employeeId: 1234,
  department: "Developer"
};

console.log(zakir.name);        // Output: Zakir Naik
console.log(zakir.department);  // Output: Developer


