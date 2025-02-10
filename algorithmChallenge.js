// 1. Reverse a string
function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
}

// 2. Find the second-largest number in an array
function findSecondLargest(arr) {
    // Sort the array in descending order
    arr.sort((a, b) => b - a);
    // Return the second element in the sorted array
    return arr[1];
}

// 3. Check if a given string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Compare the cleaned string with its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Test cases
const testString = "hello world";
const testArray = [10, 20, 4, 45, 99, 99];
const testPalindrome = "A man, a plan, a canal, Panama";

console.log("Reversed String:", reverseString(testString)); // Output: "dlrow olleh"
console.log("Second Largest Number:", findSecondLargest(testArray)); // Output: 45
console.log("Is Palindrome:", isPalindrome(testPalindrome)); // Output: true