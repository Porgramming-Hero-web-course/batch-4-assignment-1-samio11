{
    //
    //Problem solving 3
    const countWordOccurrences = (sentence: string, word: string): number => {
        const myWordArray = sentence.toLowerCase().split(' ')
        const result = myWordArray.filter(x => x === word.toLowerCase()).length
        return result;
    }

    countWordOccurrences("TypeScript is great. I love TypeScript !", "typescript")

    // console.log(countWordOccurrences("TypeScript is great. I love TypeScript !", "typescript"))

    //
}