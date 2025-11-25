function add(a, b) {
  return a + b;
}

const sum1 = add(2, 5);
console.log(sum1);

//1. Тооны квадрат
//numberSquare(n) функц бич. Дуудвал квадрат утгыг буцаана.

function numberSquare(a, b) {
  return a * b;
}

const sum2 = numberSquare(3, 3);
console.log(sum2);

//2. Тоо тэгш эсвэл сондгой
//isEven(n) функц бичээд true/false буцаа.

function myEven(x) {
  if (x % 2 === 0) {
    console.log("true");
  } else {
    console.log("false");
  }
  return x;
}

const Even = myEven(89);

// 3. Нэр мэндчилэх
// greet(name) функц нь "Hello, name!" гэж буцаана.

function greetName(param) {
  console.log(param);
}
const a = "Hello, John";
greetName(a);

// function greetName(param) {
//   console.log(param);
// }

// greetName("Hello,john");

// function greetName(text) {
//   return text;
// }

// const greet = greetName("Hello, John");
// console.log(greet);

//4. Хоёр тооны нийлбэр
//sum(a, b) функц — хоёр тооны нийлбэр буцаа.

// function number(a, b) {
//   return a + b;
// }
// const sum = number(2, 3);
// console.log(sum);

// function number(a, b) {
//   console.log(a + b);
// }
// number(3, 3);

function number(a, b) {
  return a + b;
}

console.log(number(3, 5));

//5. Хамгийн ихийг олох
//maxOfTwo(a, b) — томыг нь буцаа.

function bigLetters(a, b) {
  if (a > b) {
    console.log(a);
  } else console.log(b);

  return a, b;
}
bigLetters(3, 4);

//6. Массивын урт
//getLength(arr) — массивын урт буцаа.

// function getLength(arr) {
//   arr = arr.length;
//   return arr;
// }
// console.log(getLength((arr = [1, 2, 3, 7, 9])));

//7. Үсгийг том болгох
//toUpper(str) — өгөгдсөн үгийг том үсгээр буцаа.

// function upper(str) {
//   return str.toUpperCase();
// }
// let g = upper("hdewu");
// console.log(g);

// function upper(str) {
//   str = str.toUpperCase();
//   return str;
// }
// console.log(upper((str = "fhirwek")));

///8. Тоо эерэг эсэх
//isPositive(n) — 0-с их бол true буцаа.

// function isPositive(n) {
//   if (n > 8) {
//     console.log("true");
//   }
//   return n;
// }
// isPositive(3);

//9. Массивын эхний элементийг авах
//firstItem(arr) — массивын эхний элементийг буцаа.

// function firstItem(arr) {
//   arr = arr.splice(0, 1);
//   return arr;
// }
// console.log(firstItem((arr = [1, 2, 3, 3, 4, 5, 6])));

//1. Массивын бүх элементийн нийлбэр
//sumArray(arr) — массивын бүх тоог нийлүүлж буцаа.
// const numbers = [1, 2];
// function array(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     element = numbers[i];
//     console.log(element);

//     sum += element;
//   }
//   console.log(sum);
// }

// array(numbers);

//2. Зурвасыг эсрэгээр эргүүлэх
//reverseString(str) — string-г урвуу болго.

// const text = "hello";

// function reverseString(string) {
//   let reversedtext = "";

//   for (let i = string.length - 1; i >= 0; i--) {
//     reversedtext += string[i];
//   }
//   // console.log(reversedtext);
// }
// reverseString(text);

//3. Хамгийн их тоо ол (array)
// maxInArray(arr) — массив дахь хамгийн том тоо.

// const numbers = [2, 4, 71];
// function maxInArray(num) {
//   let maxNum = num[0];
//   for (let i = 0; i < num.length; i++) {
//     if (maxNum > num[i]) {
//       maxNum = maxNum;
//     } else {
//       maxNum = num[i];
//     }
//   }
//   return maxNum;
// }
// const result = maxInArray(numbers);
// console.log(result);

//4. Үгийг эхний үсгийг том болгох (capitalize)
//capitalize(word)
//Жишээ: "hello" → "Hello"

const text = "hello";
function capitalize(word) {
  let capWord = word[0];

  for (let i = 0; i < word.length; i++) {
    if (capWord > word[i]) {
      capWord = word[0].toLowerCase();
    } else {
      capWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  }
  return capWord;
}
const result = capitalize(text);
console.log(result);

// const text = "hello";
// function capitalize(word) {
//   let capWord = "";

//   for (let i = 0; i < word.length; i++) {
//     // capWord + word[i];
//     if (i === 0) {
//       capWord += word[i].toUpperCase();
//     } else {
//       capWord += word[i];
//     }
//   }
//   return capWord;
// }
// const result = capitalize(text);
// console.log(result);

//5. Өгөгдсөн тооны факториал
//factorial(n) — 5! гэх мэт.

function factorial(n) {
  let sum = 1;
  for (i = 0; i < n; i++) {
    sum += sum * i;
  }
  console.log(sum);
}

factorial(5);

//6. Палиндром эсэхийг шалгах
//isPalindrome(str) — урд хойд аль ч талаараа ижил эсэх.
