//* Programming Question: Hash Tag Generator

//? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

// ? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.

//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.

//? Otherwise, the function should return the generated hash tag prefixed with #.
//* Write a function generateHash to accomplish this task.

//o/p="#HaseebUrRehmanjs"


let h2 = document.querySelector('h2')
let input = document.querySelector('#hastTage')
let form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()

    let generateHash = (str) => {
        // console.log(str);
        if(str.length > 280 || str.trim().length === 0){
            return false
        }
    
        str = str.split(' ')
        // console.log(str);
        str = str.map((item) => {
            return item.replace(item[0], item[0].toUpperCase())
        })
        console.log(str);
        str = `#${str.join('')}`
        h2.innerHTML = str
        
    }
    generateHash(input.value);

    input.value = ''
})

    