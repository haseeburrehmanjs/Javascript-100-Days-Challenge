//? Write a function called checkTriangle Type that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

// console.log(checkTriangleType(3, 3, 3)); // Output: "equilateral" console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles" console.log(checkTriangleType(5, 8, 6)); // Output: "scalene"

//todo The function should adhere to the following rules:

//? If all three sides are of equal length, return "equilateral". 
//? If only two sides are of equal length, return "isosceles". 
//? If all three sides have different lengths, return "scalene".



let checkTriangleType = (a, b, c) => {
    // console.log(a, b, c);

    if (a === b && b === c) {
        console.log('this is equilateral');
    } else if (a === b || a === c || b === c){
        console.log('this is isosceles');
    }else {
        console.log('this is scalene');
    }
}

checkTriangleType(1, 2, 3)


// let checkTrianleType = (a, b, c)=> {
//     if(a === b && b === c){
//         console.log('3no baraber hain');
//     }else if (a === b || a === c){
//         console.log('do cona baraber hain');
//     }else {
//         console.log('ak bhi baraber nahi ha!');
//     }
// }

// console.log(checkTrianleType(1,2,2));

