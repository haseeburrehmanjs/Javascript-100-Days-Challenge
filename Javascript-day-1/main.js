//* Programming Question: Longest Word in a String

//? Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

// Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
// ? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.



let longestWords = (array) => {
    words = array.split(' ')

    words = words.sort((a, b) => {
        return b.length - a.length
    })
    console.log(words);
    console.log(words[0]);
}

longestWords('watch thapa technical javascript course on youtube')



// let longestWord = (array) => {
//     // console.log(array);
//     if(array.length === 0 || array.trim().length === 0){
//         return false
//     }

//     word = array.split(' ')
//     // console.log(word);

//     word = word.sort((a, b) => {
//         return a.length - b.lenght
//     })
//     console.log(word[0]);

// }

// longestWord('haseeburrehmanjs khan ha to bhai pagal-youtuber')

