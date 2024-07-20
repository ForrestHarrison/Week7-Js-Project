// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

    // a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
    let lastIndex = ages.length - 1;  // Finding the last index dynamically
    let difference = ages[lastIndex] - ages[0];
    console.log("1a. Difference between last and first age:", difference);

    // b. Add a new age to your array and repeat the step above to ensure it is dynamic.
    ages.push(41);

        // Recalculate the difference after adding a new age.
        lastIndex = ages.length - 1;
        difference = ages[lastIndex] - ages[0];
        console.log("1b. New difference:", difference);

    // c. Use a loop to iterate through the array and calculate the average age.
    let sum = 0;
    for (let i = 0; i < ages.length; i++) {
        sum += ages[i];
    }
    let averageAge = sum / ages.length;
    console.log("1c. Average age:", averageAge);


// 2.Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

    // a. Use a loop to iterate through the array and calculate the average number of letters per name.
    let totalLetters = 0;
    for (let i = 0; i < names.length; i++) {
        totalLetters += names[i].length;
    }
    let averageLetters = totalLetters / names.length;
    console.log("2a. Avg number of letters per name:", averageLetters);

    // b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
    let allNames = '';
    for (let i = 0; i < names.length; i++) {
        allNames += names[i] + ' ';
    }
    let array = allNames;
    console.log("2b. All names concatenated:", allNames.trim());  // used trim to remove whitespace
    let lastElement = array[array.length - 1]; 
    let firstElement = array[0]; 


// 3. How do you access the last element of any array?

    console.log("3. with the arrays name.length - 1");

// 4. How do you access the first element of any array?

    console.log("4. with the arrays name and then 0 to indicate the elements position in the array.");


// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];

    for (let i = 0; i < names.length; i++) {
        nameLengths.push(names[i].length);
    }
    console.log("5. Length of each name:", nameLengths);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
    let sumLengths = 0;
    for (let i = 0; i < nameLengths.length; i++) {
        sumLengths += nameLengths[i];
    }
    console.log("6. Sum of name lengths:", sumLengths);

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 

    function concatenateWord(word, n) {
        let result = '';
        for (let i = 0; i < n; i++) {
            result += word;
        }
        return result;
    }

    console.log("7. Concatenated word:", concatenateWord('Hello', 3));  // Output: "HelloHelloHello"

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

    const fullName = (firstName, lastName) => firstName + ' ' + lastName;

    console.log("8. Full name:", fullName('John', 'Doe'));

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

    function isSumGreaterThan100(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum > 100;
    }

    console.log("9. Sum greater than 100:", isSumGreaterThan100([30, 40, 50]));  

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

    function calculateAverage(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum / numbers.length;
    }

    console.log("10. Average:", calculateAverage([10, 20, 30]));  // Output: 20

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

    function compareAverages(array1, array2) {
        let avg1 = calculateAverage(array1);
        let avg2 = calculateAverage(array2);
        return avg1 > avg2;
    }

    console.log("11. Average of array1 greater than array2:", compareAverages([20, 30, 40], [10, 20, 30]));  // Output: true

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

    function willBuyDrink(isHotOutside, moneyInPocket) {
        return isHotOutside && moneyInPocket > 10.50;
    }

    console.log("12. Will buy drink:", willBuyDrink(true, 15)); 


// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log("13. Factorial of 5:", factorial(5));  // Output: 120

/*
Explanation: This function calculates the factorial of a number recursively.
I used it to show common mathematical computation and recursion.
*/

