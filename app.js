// const arr = [1, 2, 3, 4, 5];

// console.log(arr.reduce((acc, curr) => acc + curr, 0));
// const squareNum = (num) => {
//   return num * num;
// };
// const customMap = (arr, cb) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(cb(arr[i]));
//   }
//   return newArr;
// };

// console.log(customMap(arr, squareNum));

// Filter

// const isEven = (num) => {
//   if (num % 2 === 0) {
//     return num;
//   }
//   //   return false;
// };

// const customFilter = (arr, cb) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       newArr.push(cb(arr[i]));
//     }
//   }
//   return newArr;
// };

// console.log(customFilter(arr, isEven));

//reduce  -- total sum
// const arr = [1, 2, 3, 4, 5];
// const totalSum = (sum, num) => {
//   return sum + num;
// };

// // console.log(arr.reduce((acc, curr) => acc + curr, 0));
// const customReduce = (arr, cb) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = cb(sum, arr[i]);
//   }
//   return sum;
// };

// console.log(customReduce(arr, totalSum));

// custom sort

// const arr = [2, 1, 3, 0, 9, 8, 5, 6];
// const sorted = [...arr].sort((num1, num2) => num1 - num2);
// console.log(sorted);
// // const customSort =

// const customSort = (arr, cb) => {
//   const newArr = [];
// };

// console.log(customSort(arr, cb));

//interview dsa
//check if user with such name exist

// const arr = [
//   { name: "Manish", age: 17 },
//   { name: "Abhishek", age: 18 },
//   { name: "Abhay", age: 19 },
//   { name: "Mayank", age: 22 },
//   { name: "Aman", age: 20 },
// ];

// const isNameExist = (name, user) => {
//   let isFound = false;
//   for (let i = 0; i < user.length; i++) {
//     if (user[i].name === name) {
//       isFound = true;
//     }
//   }
//   return isFound;
// };

// console.log(isNameExist("AManish", arr));

// const isAgeExist = (name, users) => {
//   const user = users.find((user) => user.age === name);
//   return Boolean(user);
// };
// console.log(isAgeExist(122, arr));

// // Level 3

// const isAgeExist = (name, users) => {
//   const user = users.some((user) => user.age === name);
//   return user;
// };
// console.log(isAgeExist(2, arr));

// ?
//
//Adding element
// const newArr = [1, 2];

// const append = (arr, ele) => {
//   arr.push(ele);
//   return arr;
// };
// console.log(append(newArr, 9)); //adding in original arr

// const append = (arr, ele) => {
//   const newA = [...arr, ele];
//   return newA;
// };
// console.log("ori", newArr);
// console.log(append(newArr, 9));

// Remove duplicate arr

// const ele = [1, 2, 2, 3, 4, 5, 5];

// const removeDuplicate = (ele) => {
//   const uniqueEle = [];
//   ele.forEach((ele) => {
//     if (!uniqueEle.includes(ele)) {
//       uniqueEle.push(ele);
//     }
//   });
//   return uniqueEle;
// };
// console.log(removeDuplicate(ele));

// Set obj is a built-in javascript stru that allow us to store unique ele of any type string,number
// const ele = [1, 2, 2, 3, 4, 5, 5];

// const removeDuplicate = (ele) => {
//   // return [new Set(ele)]; //[ Set(5) { 1, 2, 3, 4, 5 } ]
//   return [...new Set(ele)]; //[ 1, 2, 3, 4, 5 ]
// };
// console.log(removeDuplicate(ele)); //original arr not modify

// Reduce
// const ele = [1, 2, 2, 3, 4, 5, 5];

// const removeDuplicate = (ele) => {
//   return ele.reduce((acc, curr) => {
//     return acc.includes(curr) ? acc : [...acc, curr];
//   }, []);
// };
// console.log(removeDuplicate(ele));

// ConCat
// const element1 = [12, 23, 4, 455, 55];
// const element2 = ["12", "23", "4", "455", ",55"];

// const mergeArr = (arr1, arr2) => {
//   // arr1.push(...arr2);

//   // return arr1;
//   // return [...arr1, ...arr2];

//   return arr1.concat(...arr2);
// };
// console.log(mergeArr(element1, element2));

//Palindrome Number

// const isPalindrome = (x) => {
//   return x === +x.toString().split().reverse().join(""); //121 =>'121'
// }; //121 =>'121' => ['1','2',3']=>['1','2',3']
// console.log(isPalindrome("1211"));

// const isPalindrome = (x) => {
//   return x < 0 ? false : x === +x.toString().split().reverse().join(""); //121 =>'121'
// }; //121 =>'121' => ['1','2',3']=>['1','2',3']
// console.log(isPalindrome("1211"));

// Fibonacci Number
//0,1,2,3,5,8,13,21,34
// f(0)=0, f(1)=1

//f(n)= f(n-1)+f(n-2) for n>1

// const fib = (n) => {
//   const arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr;
//   return arr[5];
// };
// console.log(fib(5));

// ??
// Recursion

// const fib = (n) => {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// };
// console.log(fib(3));
//n=3 => fib(2)+fib(1)
// fib(2)=> fib(0)+fib(1) //0 ,1

// Valid Anagram

// const isAnagram = (s, t) => {
//   s = s.split("").sort().join("");
//   t = t.split("").sort().join("");
//   return s === t;
// };
// console.log(isAnagram("car", "nagaram"));
// //anagram
// //nagaram

// const isAnagram1 = (s, t) => {
//   if (s.length !== t.length) return false;
//   let obj1 = {};
//   let obj2 = {};
//   for (let i = 0; i < s.length; i++) {}
// };
// console.log(isAnagram1("car", "nagaram"));
// //anagram
// //nagaram

// const twoSum = (num, target) => {
//   for (let p = 0; p < num.length; p++) {
//     for (let s = p + 1; s < num.length; s++) {
//       if (num[p] + num[s] === target) {
//         return [p, s];
//       }
//     }
//   }
// };
// console.log(twoSum([2, 3, 4, 5, 9], 9));
// //[3,2,4] = 3+2 ,3+4 ,2+4

// const twoSum = (num, target) => {};
// console.log(twoSum([2, 3, 4, 5, 9], 9));
// //[3,2,4] = 3+2 ,3+4 ,2+4

//
// Best time to sell and buy stockes
// const maxProfit = (price) => {
//   let globalPrice = 0;
//   for (let i = 0; i < price.length - 1; i++) {
//     for (let j = i + 1; j < price.length; j++) {
//       const currProfit = price[j] - price[i];
//       if (currProfit > globalPrice) {
//         globalPrice = currProfit;
//       }
//     }
//   }
//   return globalPrice;
// };
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// function isOdd(number) {
//   return new Promise((resolve, reject) => {
//     if (typeof number !== "number") {
//       reject("not corerct type");
//       return;
//     }

//     setTimeout(() => {
//       if (number % 2 === 0) resolve(false);
//       else resolve(true);
//     }, 3000);
//   });
// }

// isOdd(3)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

const isEven = (num, callback) => {
  setTimeout(() => {
    if (num % 2 === 0) {
      callback(null, true);
    } else {
      //   callback(new Error("Number is Odd"), false);
      callback("Err :Number is odd", false);
    }
  }, 3000);
};

function isEvenAsync(num) {
  return new Promise((resolve, reject) => {
    isEven(num, (err, status) => {
      if (err) {
        reject(err);
      } else {
        resolve(status);
      }
    });
  });
}

// Example usage
isEvenAsync(45)
  .then((result) => {
    console.log(result); // Output: true
  })
  .catch((error) => {
    console.error(error); // Won't be executed in this case
  });
