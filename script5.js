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

//3. Нэр мэндчилэх
//greet(name) функц нь "Hello, name!" гэж буцаана.

// function greetName(param) {
//   console.log(param);
// }
// const a = "Hello, John";
// greetName(a);

// function greetName(param) {
//   console.log(param);
// }

// greetName("Hello,john");

function greetName(text) {
  return text;
}

const greet = greetName("Hello, John");
console.log(greet);

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
//   return arr;
// }

// console.log(getLength.length);

function getLength(arr) {
  arr = arr.length;
  return arr;
}
console.log(getLength((a = [1, 2, 3, 4, "a"])));
