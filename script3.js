// const cars = ["Toyota", "Harrier", "Land200", "Crown", "Prius"];
// console.log(cars);

//1. Өөрийн дуртай 5 жимсний жагсаалт үүсгээд, хамгийн эхний болон хамгийн сүүлийн жимсийг хэвлэ.
// const fruits = ["apple", "strawberry", "lemon", "tomota", "lettuce"];
// fruits.pop();
// fruits.pop();
// fruits.pop();
// fruits.pop();
// console.log(fruits);

// const fruits2 = ["apple", "strawberry", "lemon", "tomota", "lettuce"];
// fruits2.shift();
// fruits2.shift();
// fruits2.shift();
// fruits2.shift();
// console.log(fruits2);

// 2. ['apple', 'banana'] массивын төгсгөлд 'mango' нэм.

// const fruits = ["apple", "banana"];
// fruits.push("mango");

// console.log(fruits);

// 3.[1, 2, 3, 4] массиваас сүүлийн элементийг pop() ашиглан устга.

const number = [1, 2, 3, 4];
number.pop();
console.log(number);

// 4. [10, 20, 30] массивын эхэнд 5 нэм.

// const numbers = [10, 20, 30];
// numbers.unshift(5);
// console.log(numbers);

// 5.[100, 200, 300] массиваас эхний элементийг shift() ашиглан устга.

// const numbers = [100, 200, 300];
// numbers.shift();
// console.log(numbers);

// 6. [1, 2, 3] ба [4, 5, 6] массивуудыг нэгтгэж шинэ массив үүсгэ.

// const numbers = [1, 2, 3];
// const numbers1 = [4, 5, 6];

// const allNumbers = numbers.concat(numbers1);
// console.log(allNumbers);

// 7. ['apple', 'banana', 'orange'] массив дотор 'banana' байгаа эсэхийг шалга.

// const fruits = ["apple", "banana", "orange"];

// console.log(fruits.includes("banana"));

// 8. ['cat', 'dog', 'bird'] массив дотор 'dog' хэддэх индекст байгааг ол.

const text5 = ["cat", "bird", "dog"];
const dog = text5.indexOf("dog");
console.log(dog);

// 9.['I', 'love', 'JavaScript'] массивыг join() ашиглан нэг мөр болгон холбож хэвлэ.

const text = ["I", "love", "Java"];
const sum = text.toString();
console.log(sum);

// 10. [10, 20, 30, 40, 50] массиваас эхний 3 элементийг slice() ашиглан аваад шинэ массив үүсгэ.

const Num = [10, 20, 30, 40, 50];
const NewNum = Num.slice(3, 5);
console.log(NewNum);

// 11. [1, 2, 3, 4] массиваас хоёр дахь элементийг splice() ашиглан устга.

const number2 = [1, 2, 3, 4, 5, 6];
number2.splice(1, 3);
console.log(number2);

// 12. [1, 2, 3, 4, 5] массивыг reverse() ашиглан урвуугаар эргүүл.

const Numbers3 = [1, 2, 3, 4, 5];
Numbers3.reverse();
console.log(Numbers3);

// 13.['banana', 'apple', 'cherry'] массивыг sort() ашиглан үсгийн дарааллаар эрэмбэл.

const numbers4 = ["apple", "cherry", "banana"];
const sorted = numbers4.toSorted();
console.log(sorted);

// 14. Өгөгдсөн хувьсагч массив мөн эсэхийг Array.isArray() ашиглан шалга.

const cars = ["land", "toyota", "pruis"];
console.log(Array.isArray(cars));

// 15. ['red', 'blue', 'green'] массивын нийт уртыг хэвлэ.

const text1 = ["red", "blue", "green"];
console.log(text1.length);

const text2 = ["red", "blue", "green"];
const length = text2.length;
console.log(length);

// 16. [10, 20, 30] массивын дундах элемент (20)-ийг 25 болгож солино уу.

const number5 = [10, 20, 30];
number5.splice(1, 1, "25");
console.log(number5);

// 17.['HTML', 'CSS'] ба ['JavaScript', 'React'] массивуудыг нэгтгээд нийт хэдэн элементтэй болохыг хэвлэ.

const text3 = ["HTML", "CSS"];
const text4 = ["JavaScript", "React"];

const alltext = text3.concat(text4);
console.log(alltext.length);

//18.  [1, 2, 3, 4, 5] массиваас сүүлийн 2 элементийг splice() ашиглан устга.

const num = [1, 2, 3, 4, 5];
num.splice(3, 2);
console.log(num);

///19. [5, 10, 15, 20] массиваас гурав дахь элементийг splice() ашиглан хас.

const num1 = [5, 10, 15, 20];
num1.splice(2, 1);
console.log(num1);

// 20.[100, 200, 300] массиваас 200 байгаа эсэхийг шалгаад, байвал “байна”, байхгүй бол “байхгүй” гэж хэвлэ.

// const num2 = [100, 200, 300];

// if (num2.includes(200) === true) {
//   console.log("bna");
// }

// const num2 = [100, 200, 300];
// const included = num2.includes(200);
// console.log(included);

// const num2 = [100, 200, 300];
// console.log(num2.includes(200));

const num2 = [100, 200, 300];
const included = num2.includes(100);

if (included) {
  console.log("bna");
} else {
  console.log("bhgvi");
}
