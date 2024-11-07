{
    //
    // Solving Problem 5
    const getProperty = <T, Y extends keyof T>(obj: T, prop: Y) => obj[prop]
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));

    //
}