console.log("HELLO");

let weekNumber = 4;
let weekName;

if (weekNumber === 1) {
    weekName = "Monday";
    console.log(weekName);
} else if (weekNumber === 2) {
    weekName = "Tuesday";
    console.log(weekName);
} else if (weekNumber === 3) {
    weekName = "wednesday";
    console.log(weekName);
}
else
    console.log("Thursday");


// const weekNumber = 2;

// switch (weekNumber) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("tuesday");
//   default:
//     console.log("Wed");
// }
//1. 2 тоог оруулж ихийг нь хэвлэх

// const a = 5;
// const b = 8;
// if (a > b) {
//   console.log("A их", a);
// } else {
//   console.log("B их", b);
// }


//2. 3 ширхэг тоон дундах хамгийн их/хамгийн бага


// const a = 3;
// const b = 4;
// const c = 6;
// if (a > b) {
//     console.log("a их");
// }
// else {
//     console.log("b их");
// }
// if (a < b < c) {
//     console.log("c их");
// } else {
//     console.log("b их");
// }
// if (c > a < b) {
//     console.log(" a baga");
// }



//3.  Тоог тэгш/сондгой шалгах

// const a = 5
// if (a % 2 === 0) {
//   console.log("tegsh", a);
// } else {
//   console.log("sondgoi", a);
// }

// const a = 6;

// if (a % 2 === 0) {
//   console.log("tegsh", a);
// } else {
//   console.log("sondgoi", a);
// }


//4. Стрингийн уртыг хэвлэх

// let text = "sunsta,rmoon";
// let lenght = text.length;
// console.log(lenght);


// const text = 'dfjweijdfio'
// console.log(text.length);



//5.  Стрингийг том үсэг болгож хувиргах

// let text = "home";
// let result = text.toUpperCase();
// console.log(result);

const text = 'HOME'
console.log(text.toLowerCase());



// БОДЛОГО: 6. Тоог 3-аар болон 5-аар хуваагддаг эсэхийг шалгах. 3-т хуваагдал Fizz, 5-т хуваагдал Buzz, хоёуланд нь хуваагддаг бол FizzBuzz гэх хэвлэ

// const a = 9;
// if (a % 3 === 0) {
//   console.log("FIZZ", a);
// } else {
//   console.log("NotFIZZ", a);
// }

// const b = 15;
// if (b % 5 === 0) {
//   console.log("BUZZ", b);
// } else {
//   console.log("NotBUZZ", b);
// }

// const c = 30;
// if (c % 3 === 0 && c % 5 === 0) {
//   console.log("FizzBuzz", c);
// }

// БОДЛОГО: 7. Хоёр string-ийг нэгтгэх a = Hello b = World

// const a = "Hello";
// const b = "World";

// const ab = a + b;
// console.log(ab);

//

// БОДЛОГО: 8. 2 тооны дундаж

// const a = 5;
// const b = 10;

// let Average = (a + b) / 2;
// console.log("AVERAGE=", Average);

// БОДЛОГО: 9. Тоо эерэг эсвэл сөрөг эсэхийг шалгах - "эерэг", "сөрөг" эсвэл "тэг"

// const a = 107;

// if (a > 0) {
//   console.log("positive number", a);
// } else if (a === 0) {
//   console.log("Zero", a);
// } else {
//   console.log("negative", a);
// }

// const a = -107;

// if (a > 0) {
//   console.log("positive number", a);
// } else if (a === 0) {
//   console.log("Zero", a);
// } else {
//   console.log("negative", a);
// }

// БОДЛОГО: 10. Тоог 10-аас их эсэхийг шалгах

// const a = 9;

// if (a > 10) {
//   console.log(a, "is greater than 10");
// } else if (a < 10) {
//   console.log(a, "is less than 10");
// }

// БОДЛОГО: 11. Хоёр тоо тэнцүү эсэхийг шалгах - "тэнцүү" эсвэл "ялгаатай"

// const a = 3;
// const b = 5;

// if (a === b) {
//   console.log(a, "is equal number 5");
// } else if (a === b || a > b) {
//   console.log(a, "is difference number b");
// } else {
//   console.log(a, "is difference number B");
// }

//

//  БОДЛОГО: 12. Тоог 100-аас их, 0-аас бага эсэхийг шалгах

const a = -10;

if (a > 100) {
    console.log("is greater than number 100");
} else if (a < 0) {
    console.log("is less than number 0");
}

//  БОДЛОГО: 13. Тоог 10%, 20% эсвэл 30% өсгөх

// const a = 20;

// const b = 10;
// const c = 20;
// const r = 30;

// const H = 100;

// const percentageTen = (a * b) / H;
// const percentageSum = percentageTen + a;
// console.log("total", percentageSum);

// const percentageTen2 = (a * c) / H;
// const percentageSum2 = percentageTen2 + c;
// console.log("total", percentageSum2);

// const percentageTen3 = (a * c) / H;
// const percentageSum3 = percentageTen3 + b;
// console.log("total", percentageSum3);

// 16. Тоог 100-аас хэтэрвэл 100 болгож хэвлэх

// const a = 150;
// const b = 100;

// if (a > b) {
//   console.log(b);
// }

// //17. Хоёр тэмдэгт ижил эсэхийг шалгах === ашиглах

const x = 3;
const y = 5;

if (x === y) {
    console.log('true');

} else {
    console.log(false);

}

//18. Хоёр оронтой тооны цифрүүдийг сольж урвуулах


// const R = 23
// const R1 = (R % 10) * 10

// const S = 23
// const S1 = Math.floor(S / 10)

// const number = R1 + S1
// console.log(number);


// const f = 13
// const m = f % 10
// console.log(m);


// let n = 1234

// let i = 0

// let k = 0
// let b = 0


// while (n > i) {
//     k = n % 10 + k * 10
//     n = Math.floor(n / 10)

//     if (n === 0) {

//         b = b + k

//         console.log(b);
//     }

// }


// let n = -689
// let i = 0
// let isNegative = n < 0


// let lastDigit = 0
// let reversedNum = 0
// let b = 0


// n = Math.abs(n)

// while (n > 0) {
//     lastDigit = n % 10
//     reversedNum = (reversedNum * 10) + lastDigit
//     n = Math.floor(n / 10)
//     if (n === 0) {

//         b = b + reversedNum
//         console.log(-reversedNum);
//     }
// }


// let n = [23, 4]
// n.reverse();
// console.log(n);

// let Number = 56
// n1 = Number % 10
// n2 = Math.floor(Number / 10)
// reversed_digits = (n1 * 10) + n2
// console.log(reversed_digits);


// let Number = "976"
// const myArray = Number.split("")
// const reversedArray = []
// if (myArray.length >= 0) {
//     let i = myArray.length - 1
//     reversedArray.push(myArray[i])

// }

// if (myArray.length >= 0) {
//     let i = myArray.length - 2
//     reversedArray.push(myArray[i])

// }

// if (myArray.length >= 0) {
//     let i = myArray.length - 3
//     reversedArray.push(myArray[i])

// }
// reversedStr = reversedArray.join('')
// console.log(reversedStr);




// const salary = [100, 200, 300]
// const increaseSalaryPercent = 0.1

// let result = 0
// let i = 0
// while (i < salary.length) {
//     result = salary[i] * increaseSalaryPercent + salary[i]
//     console.log(result);
//     i++

// }


//19.Тоо сөрөг бол эерэг болгож, эерэг бол хэвээр үлдээх

// let number = -29
// number = Math.abs(number)
// console.log(number);




//20. 1970.01.01 -ээс яг одоог хүртэл хэдэн он, сар, өдөр, цаг, минут, секунд, дооль, милисекунд өнгөрсөнг ол






//21. Дугаарын хязгаарлалтаар машин чинь хэд хэд дэх өдөр явахгүйг хэвлэнэ

