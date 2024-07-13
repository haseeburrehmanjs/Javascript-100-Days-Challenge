//* Programming Question: Hash Tag Generator

//? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

// ? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.

//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.

//? Otherwise, the function should return the generated hash tag prefixed with #.
//* Write a function generateHash to accomplish this task.

//o/p="#HaseebUrRehmanjs"
    
let generateHash = (word) => {
    word = word.split(' ')
    // console.log(word);

    word = word.map(item => {
        return item.replace(item[0], item[0].toUpperCase())
    })
    // console.log(word);
    word = `#${word.join('')}`
    return word
}

console.log(generateHash('haseeb ur rehman js'));