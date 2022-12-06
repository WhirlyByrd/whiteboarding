// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]


// const fizzBuzz = (num) => {


//   for (i=1; i <= num; i++){
//     if ( i % 15 === 0) {
//       console.log('FizzBuzz') 
//     } else if ( i % 3 === 0){
//       console.log('Fizz')
//     } else if (i % 5 === 0){
//       console.log('Buzz')
//     } else {
//       console.log(i)
//     }
//   }


  
// }

// fizzBuzz(20)


function fizzbuzz(n)
{
  let arr = []
  
  for(i=1; i <= n; i++) {
    if (i % 15 === 0) {
      arr.push('FizzBuzz')
    } else if (i % 3 === 0) {
      arr.push('Fizz')
    } else if (i % 5 === 0) {
      arr.push('Buzz')
    } else {
      arr.push(i)
    }
  }
}

console.log(fizzbuzz(10))