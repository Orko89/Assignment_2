//1.calculate difference
function calculateDifference(a, b) {
    return a - b;
}
let result = calculateDifference(10, 5);
console.log(result);


//2.odd or even

function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(3));
console.log(isOdd(4));


//3.smallest number
function findMin(numbers) {
    if (numbers.length === 0) {
        return null; // Return null if the array is empty
    }

    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return min;
}

let nums = [5, 2, 9, 4, 7];
console.log(findMin(nums));  // Output: 1


//4.filter even numbers
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

let numbers = [1, 2, 3, 4, 5, 6];
let evenNums = filterEvenNumbers(numbers);
console.log(evenNums);


//5.sort array descending
function sortArrayDescending(array) {
    return array.slice().sort((a, b) => b - a);
}

let numerals=[6,4,80,3,2,1,7,6];
console.log(sortArrayDescending(numerals));


//6.first letter lowercased
function lowercaseFirstLetter(str) {
    if (!str) return str; // Return if the string is empty
    return str.charAt(0).toLowerCase() + str.slice(1);
}

let string="America";
console.log(lowercaseFirstLetter(string));


//7.count vowels
function countVowels(str) {
    const vowelRegex = /[aeiouAEIOU]/g;
    const vowelMatches = str.match(vowelRegex);
    if (!vowelMatches) {
        return 0;
    }
    return vowelMatches.length;
}

let str="asdabczxmcqwqpuoiAJKBBOQOIPIPQ";
console.log(countVowels(str));


//8.find average
function findAverage(arr) {
    if (arr.length === 0) return 0; // Handle empty array case
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}

let array=[2,35,31,1,23,34,23,32];
console.log(findAverage(array));