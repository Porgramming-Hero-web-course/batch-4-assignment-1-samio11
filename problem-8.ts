{
    //
    // Solving Problem 8
    const validateKeys = <T>(obj: T, keys: (keyof T)[]) => {
        return keys.every(x => x in obj);
    }
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));


    //
}