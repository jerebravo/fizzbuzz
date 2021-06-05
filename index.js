const fizzbuzz = require('./fizzbuzz')

const numbers = [-4,50,3,0,15,9,99,'30'];

for (const num in numbers) {
    console.log(fizzbuzz(numbers[num]))
}