/*
Create a function that determines whether a number is Oddish or Evenish.
A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even.
If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. 
oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

*/

function oddishOrEvenish(number) {
    const digits = Array.from(String(number), Number); // Convert the number to an array of its digits
    const sum = digits.reduce((acc, curr) => acc + curr, 0); // Calculate the sum of the digits

    if (sum % 2 === 0) {
        return "Evenish";
    } else {
        return "Oddish";
    }
}

console.log(oddishOrEvenish(121));

console.log(oddishOrEvenish(41)); 