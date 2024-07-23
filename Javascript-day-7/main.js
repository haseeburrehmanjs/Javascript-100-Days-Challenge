// write a function find max number in array 

let findMax = (arr) => {
    return Math.max(...arr)
}

console.log(findMax([1,2,3,4,5,67]));
console.log(findMax([-10, -2, -4, -9, -1]));
console.log(findMax([5]));