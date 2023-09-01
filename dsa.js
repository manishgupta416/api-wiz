// function findMajorityElement(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         count++;
//       }
//     }
//     if (count > nums.length / 2) {
//       return nums[i];
//     }
//   }
//   return "No majority element found.";
// }

// Example usage:
// const arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
// const majorityElement = findMajorityElement(arr);
// console.log(`The majority element is: ${majorityElement}`);

// const vowelString = "Manish";
// const vowels = "aeiouAEIOU";
// const stringWithoutVowel = (str) => {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!vowels.includes(str[i])) {
//       result += str[i];
//     }
//   }
//   return result;
// };

// console.log(stringWithoutVowel(vowelString));

// const string = "aabcss";
// const countOccurrance = (str) => {
//   let count = 1;
//   let res = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++;
//     } else {
//       res = res + str[i] + count;
//       count = 1;
//     }
//   }
//   console.log(res);
//   // res += str[str.length - 1] + count;
//   return res;
// };
// console.log(countOccurrance(string));

const arrStr = ["flower", "flow", "flight"];

const getCommonPrefix = (str) => {
  let prefix = arrStr[0];

  for (let i = 0; i < str.length; i++) {
    const currentString = str[i];
    let j = 0;
    while (
      j < prefix.length &&
      j < currentString.length &&
      prefix[j] === currentString[j]
    ) {
      j++;
    }
    prefix = prefix.slice(0, j);
    if (prefix === "") {
      break;
    }
  }
  return prefix;
};
console.log(getCommonPrefix(arrStr));

// Array Manipulation:

// Given an array of integers, find the maximum subarray sum.
// Implement an algorithm to rotate an array by a given number of positions.

// String Manipulation:

// Write a function to check if a string is a palindrome.
// Given two strings, write a function to check if they are anagrams of each other.

// Recursion:

// Write a recursive function to calculate the nth Fibonacci number.
// Implement a recursive function to calculate the factorial of a number.

// Question: Write a function to reverse a string.
// Given an array of integers, find two numbers such that they add up to a specific target number.

// find the majority element in an array involves counting the occurrences of each element and checking if any element appears more than n/2 times.

// check if a given character is a vowel. Here's a simple JavaScript function to check if a character is a vowel:
// function isVowel(char) {
//   // Convert the character to lowercase to handle both uppercase and lowercase vowels
//   char = char.toLowerCase();

//   // Check if the character is one of the vowels
//   return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
// }

// If you want to check if a given string contains any vowel characters, you can modify the function to accept a string and iterate through its characters to check for vowels. Here's a JavaScript function to do that:
function containsVowel(str) {
  // Convert the string to lowercase to handle both uppercase and lowercase vowels
  str = str.toLowerCase();

  // Define a string containing all vowels
  const vowels = "aeiou";

  // Iterate through each character in the string
  for (let char of str) {
    // Check if the character is a vowel
    if (vowels.includes(char)) {
      return true;
    }
  }

  // If no vowel is found after iterating through the entire string, return false
  return false;
}
console.log(containsVowel("Hello"));

// You can count vowels and consonants in a string without using regular expressions in JavaScript. Here's a method using simple loops and character comparisons:
function countVowelsAndConsonants(str) {
  // Convert the string to lowercase to handle both uppercase and lowercase letters
  str = str.toLowerCase();

  // Initialize counters for vowels and consonants
  let vowelCount = 0;
  let consonantCount = 0;

  // Define an array containing all vowels
  const vowels = ["a", "e", "i", "o", "u"];

  // Iterate through each character in the string
  for (let char of str) {
    // Check if the character is a letter (ignore non-alphabet characters)
    if (char >= "a" && char <= "z") {
      // Check if the character is a vowel
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }

  // Return an object with the counts
  return {
    vowels: vowelCount,
    consonants: consonantCount,
  };
}

// Example usage:
const result = countVowelsAndConsonants("Hello, World!");
console.log(result); // { vowels: 3, consonants: 7 }

// To achieve the desired output of compressing consecutive characters in a string, you can create a JavaScript function to iterate through the input string and count consecutive characters. Here's one way to do it:

function compressString(input) {
  let compressed = "";
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      compressed += input[i] + count;
      count = 1;
    }
  }

  return compressed;
}

// Example usage:
const input = "abbabbbabbbb";
const compressed = compressString(input);
console.log(compressed); // Output: 'a1b2a1b3a1b4'
function compressString(input) {
  let compressed = "";
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      compressed += input[i] + count;
      count = 1;
    }
  }

  return compressed;
}

// Example usage:
const input = "abbabbbabbbb";
const compressed = compressString(input);
console.log(compressed); // Output: 'a1b2a1b3a1b4'

// You can remove vowels from a string in JavaScript by iterating through each character of the string and checking if it's a vowel (either uppercase or lowercase) using conditional statements. Here's a simple function to do this:

function removeVowels(str) {
  const vowels = "aeiouAEIOU"; // Include both lowercase and uppercase vowels
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      result += str[i];
    }
  }

  return result;
}

// Example usage:
const inputString = "Hello, World!";
const stringWithoutVowels = removeVowels(inputString);
console.log(stringWithoutVowels); // Output: 'Hll, Wrld!'

// String Reversal:

// Given a string, write a function to reverse it without using the built-in reverse method.
function reverseString(str) {
  return str.split("").reverse().join("");
}
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
// Anagram Detection:

// Write a function that checks if two strings are anagrams of each other.
function areAnagrams(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

// Palindrome Detection:

// Write a function to determine if a given string is a palindrome.
// String Truncation:

// Given a string and a maximum length, truncate the string to that length and add "..." to the end if it exceeds the maximum length.
function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + "...";
}
function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }
  let truncated = "";
  for (let i = 0; i < maxLength; i++) {
    truncated += str[i];
  }
  return truncated + "...";
}

// Q1. Write a function to count the number of words in a given string
// Q2. Write a function that removes duplicate characters from a string.
// Q3. Write a function that checks if one string is a rotation of another. (e.g., "waterbottle" is a rotation of "erbottlewat")
function isRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  // Concatenate the first string to itself
  const doubledStr1 = str1 + str1;
  // By concatenating the first string with itself, you effectively create a string that contains all possible rotations of the original string. For example, if the original string is "waterbottle," then doubling it gives you "waterbottlewaterbottle," which contains all possible rotations like "erbottlewat," "terbottlewa," and so on.
  
  // Check if the second string is a substring of the doubled string
  if (doubledStr1.includes(str2)) {
    return true;
  }

  return false;
}

// Example usage:
const string1 = "waterbottle";
const string2 = "erbottlewat";

if (isRotation(string1, string2)) {
  console.log(`${string2} is a rotation of ${string1}`);
} else {
  console.log(`${string2} is not a rotation of ${string1}`);
}

// Q4. Compress a string by replacing consecutive characters with the character followed by the count of consecutive occurrences. For example, "aaabbbccc" becomes "a3b3c3"



// String Compression:

.
// Longest Substring Without Repeating Characters:

// Given a string, find the length of the longest substring without repeating characters.
// Pattern Matching:

// Implement a function that searches for a pattern within a given string and returns the indices of all occurrences of the pattern.
// Find First Non-Repeating Character:

// Write a function that finds the first non-repeating character in a string.
// Check for Balanced Parentheses:

// Write a function that checks if a string of parentheses is balanced (e.g., "({[()]})" is balanced, but "({[()]}" is not).

// Find the Duplicate Number:
// Find the Missing Number:
function findMissingNumber(nums) {
  const n = nums.length + 1; // Expected length of the array
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  for (let num of nums) {
    sum -= num;
  }

  return sum;
}

// Two Sum:
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// To print alternate words in a string in uppercase, you can use the following JavaScript function:

function alternateWordsToUpperCase(inputString) {
  const words = inputString.split(" "); // Split the input string into an array of words
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (i % 2 === 0) {
      // If the index is even (0, 2, 4, ...), convert the word to uppercase
      result += words[i].toUpperCase();
    } else {
      // If the index is odd (1, 3, 5, ...), keep the word as-is
      result += words[i];
    }

    // Add a space between words (except for the last word)
    if (i < words.length - 1) {
      result += " ";
    }
  }

  return result;
}

// Example usage:
const inputString = "this is a sample string to test the function";
const result = alternateWordsToUpperCase(inputString);
console.log(result); // Output: 'THIS is A sample STRING to TEST the FUNCTION'

// here's a simple JavaScript function that prints alternate words in a string in uppercase:
function alternateWordsToUpperCase(inputString) {
  const words = inputString.split(" "); // Split the input string into an array of words
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (i % 2 === 0) {
      // If the index is even (0, 2, 4, ...), convert the word to uppercase
      result += words[i].toUpperCase();
    } else {
      // If the index is odd (1, 3, 5, ...), keep the word as-is
      result += words[i];
    }

    // Add a space between words (except for the last word)
    if (i < words.length - 1) {
      result += " ";
    }
  }

  return result;
}

// Example usage:
const inputString = "this is a sample string to test the function";
const result = alternateWordsToUpperCase(inputString);
console.log(result); // Output: 'THIS is A sample STRING to TEST the FUNCTION'

// To transform a string so that every alternate character is in uppercase, you can use the following JavaScript function:
function alternateCharactersToUpperCase(inputString) {
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    if (i % 2 === 0) {
      // If the index is even, convert the character to uppercase
      result += inputString[i].toUpperCase();
    } else {
      // If the index is odd, keep the character as-is
      result += inputString[i];
    }
  }

  return result;
}

// Example usage:
const inputString = "manish";
const result = alternateCharactersToUpperCase(inputString);
console.log(result); // Output: 'mAaIsNh'

// Problem: Remove Duplicates from an Array

// Question: Write a function that takes an array of numbers and removes any duplicate values. The resulting array should contain only the unique numbers in the same order as they appeared in the original array.

function removeDuplicates(arr) {
  const uniqueArray = [];

  for (let num of arr) {
    if (!uniqueArray.includes(num)) {
      uniqueArray.push(num);
    }
  }

  return uniqueArray;
}

// Example usage:
const inputArray = [1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(inputArray);
console.log(result); // Output: [1, 2, 3, 4, 5]

// Factorial Calculation:

// Question: Write a function to calculate the factorial of a non-negative integer.
function factorial(n) {
  if (n < 0) {
    return "Invalid input"; // Factorial is not defined for negative numbers
  }

  if (n === 0 || n === 1) {
    return 1; // Factorial of 0 and 1 is 1
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// Example usage:
const num = 5;
const result = factorial(num);
console.log(result); // Output: 120 (5!)

// Write a function to count the number of words in a given string.
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the missing number.
function findMissingNumber(nums) {
  const n = nums.length + 1; // Expected length of the array

  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
}

// Example usage:
const nums = [3, 0, 1];
const missingNumber = findMissingNumber(nums);
console.log(missingNumber); // Output: 2

// implement a function that finds the common prefix among an array of strings.

const arrStr = ["flower", "flow", "flight"];

const getCommonPrefix = (strs) => {
  if (!strs || strs.length === 0) {
    return "";
  }

  let prefix = strs[0]; // Initialize prefix with the first string

  for (let i = 1; i < strs.length; i++) {
    const currentStr = strs[i];
    let j = 0;

    // Compare characters of the current string with the prefix
    while (
      j < prefix.length &&
      j < currentStr.length &&
      prefix[j] === currentStr[j]
    ) {
      j++;
    }

    // Update prefix to only include common characters
    prefix = prefix.slice(0, j);

    // If the prefix becomes an empty string, there are no common characters
    if (prefix === "") {
      break;
    }
  }

  return prefix;
};

console.log(getCommonPrefix(arrStr)); // Output: "fl"
// while (j < prefix.length && j < currentStr.length): This is the condition for the while loop. It continues to execute as long as both of the following conditions are met:

// j is less than the length of the current common prefix (prefix.length).

// count the occurrence of each character in the input string and produce the desired result.

const inputString = "aabcss";
const countOccurrence = (str) => {
  let count = 1; // Start the count at 1 since we are comparing with the next character
  let res = "";
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      res += str[i] + count;
      count = 1; // Reset the count for the next character
    }
  }
  // Add the last character and its count to the result
  res += str[str.length - 1] + count;
  return res;
};
console.log(countOccurrence(inputString));
