{
    //
    //Problem solving 3
    const countWordOccurrences = (sentence: string, word: string): number => {
        const myWordArray = sentence.toLowerCase().split(' ')
        const result = myWordArray.filter(x => x === word.toLowerCase()).length
        return result;
    }

    countWordOccurrences("I love typescript", "typescript");
    console.log(countWordOccurrences("I love typescript", "typescript"))

    //
}