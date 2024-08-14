// write a function find max number in array 

// let findMax = (arr) => {
//     return Math.max(...arr)
// }

// console.log(findMax([1,2,3,4,5,67]));
// console.log(findMax([-10, -2, -4, -9, -1]));
// console.log(findMax([5]));

// let findMax = (arr) => {
//     return Math.max(...arr)
// }

// console.log(findMax([1,2,3,4,5,67]));
// console.log(findMax([-10, -2, -4, -9, -1]));
// console.log(findMax([5]));


let form = document.querySelector('#form')
let number = document.querySelector('#number')
let h2 = document.querySelector('.number')

form.addEventListener('submit', event => {
    event.preventDefault()
    let number1 = number.value

    function formattedNumber(num){
        num = num.replace(/^0/, '+92')
        h2.innerHTML = num
    }
    console.log(formattedNumber(number1));
    
})

let findMax = (array) => {
    return array.max(...array)
}

console.log(findMax([1,2,3,4,5,67]));
console.log(findMax([-10, -2, -4, -9, -1]));
console.log(findMax([5]));