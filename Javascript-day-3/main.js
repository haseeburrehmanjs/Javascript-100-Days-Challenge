//* Interview Question: Count Occurrences of Character

//? Write a function called countChar that takes two parameters: a string and a character
// to count. The function should return the number of times the specified character appears in the string.

//todo Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function sho accept any character that is part of the ASCII character set and is printable).


let countChar = (word, char)=> {
    word = word.toLowerCase()
    char = char.toLowerCase()

    totalChar = word.split('').reduce((accum, currvalue) => {
        if(currvalue === char){
            accum++
        }
        return accum
    }, 0)
    return totalChar
}

console.log(countChar('haseeb ur rehman' , 'h'));




// let countChar = (word, char) => {
//     word = word.toLowerCase()
//     char = char.toLowerCase()

//     totalCount = word.split('').reduce((previousValue, Currentvalue) => {
//         if(Currentvalue === char){
//             previousValue++
//         }
//         return previousValue
//     }, 0)
//     // console.log(totalCount);

//     return totalCount
// }

// console.log(countChar("HASEEB UR REHMAN", "E")); // Output: 3