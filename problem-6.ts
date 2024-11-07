{
    //
    // Solving Problem 6
    interface Profile {
        name: string;
        age: number;
        email: string;
    }
    const updateProfile = <T>(mainObj: T, updateProperty: object) => {
        const updatedObj = { ...mainObj, ...updateProperty }
        return updatedObj;
    }
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));

    //
}