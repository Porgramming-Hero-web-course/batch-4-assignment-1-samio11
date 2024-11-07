# Union and Intersection Types in TypeScript

TypeScript offers powerful type operators, namely **union** and **intersection** types, that enhance 
1.type safety, 
2.enable flexible code, 
3.help manage complex data structures.

## Union Types

A **union type** allows a variable to hold values of multiple types. With union types, TypeScript checks that the value conforms to at least one of the specified types. This is particularly useful when a function or variable needs to handle different types in different scenarios.

### Example
```typescript
type UserInfo = {
    name: string;
    age: number;
    gender : 'Male' | 'Female';
    bloodGroup : 'AB+' | 'AB-' | 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-';
}

const person1 : UserInfo = {
    name: 'John',
    age: 25,
    gender: 'Male',
    bloodGroup: 'O+',
}

## Intersection Types
An intersection type combines multiple types into one. A variable of an intersection type must satisfy all of the included types. Intersection types are ideal for creating complex types that combine properties from multiple types, especially when dealing with mixed or extended data structures.

interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
}

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
  name: "Alice",
  age: 25,
  employeeId: 101,
};

