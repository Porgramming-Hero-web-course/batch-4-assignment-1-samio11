{
    //
    // Solving Problem 02
    const removeDuplicates = (value: number[]) => {
        let newArray: number[] = []
        for (let i = 0; i < value.length; i++) {
            if (!newArray.includes(value[i])) {
                newArray.push(value[i])
            }
        }
        return newArray;
    }
    removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    // console.log( removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
    //
}