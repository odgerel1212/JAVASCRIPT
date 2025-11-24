// Pinecone гэж 1 удаа хэвлэ.
// • Pinecone гэж 10 удаа хэвлэ.
// • Pinecone гэж n удаа хэвлэ.
// • 20 хүртэлх сондгой тоонуудыг хэвлэ
// • 40 хүртэлх тэгш тоонуудыг хэвлэ.
// • 20 хүртэлх тэгш тоонуудын нийлбэрийг ол.
// • 40 хүртэлх сондгой тоонуудын нийлбэрийг ол.
// • Өгөгдсөн n тооны нийлбэрийг ол.
// • 100 гийн тоог n удаа нэм. (Example: 10, Result:1000)

// • 125 хүртэлх тооны үржвэрийг ол.

// • 125 хүртэлх сондгой тооны үржвэрийг ол.

// • n тооны factorial ийг ол.

// 1. Pinecone гэж 1 удаа хэвлэ.
// console.log("pinecone");

//2. Pinecone гэж 10 удаа хэвлэ.

// for (let i = 0; i < 10; i++) {
//   console.log("Pinecone");
// }

//3. Pinecone гэж n удаа хэвлэ.

// let n = 100;
// for (let i = 0; i < n; i++) {
//   console.log("Pinecone1");
// }

// 4. 20 хүртэлх тэгш тоонуудын нийлбэрийг ол.

// let n = 21;
// for (let i = 0; i < n; i++) {
//   a = i % 2;
//   if (a === 0) {
//     console.log(i);
//   }
// }

// 5. 40 хүртэлх тэгш тоонуудыг хэвлэ.

// let n = 40;
// for (let i = 0; i <= n; i++) {
//   a = i % 2;
//   if (a === 0) {
//     console.log(i);
//   }
// }

//6.  40 хүртэлх сондгой тоонууды ол.

// let n1 = 40;
// for (let i = 0; i < n1; i++) {
//   let a = i % 2;
//   if (a === 1) {
//     console.log(i);
//   }
// }

//7. 20 хүртэлх тэгш тоонуудын нийлбэрийг ол.
// let b = 0;
// let n = 10;
// for (let i = 0; i <= n; i++) {
//   a = i % 2;
//   if (a === 0) {
//     b = b + i;
//   }
// }
// console.log(b);

//8. 40 хүртэлх сондгой тоонуудын нийлбэрийг ол.
// let a = 40;
// for (let i = 0; i <= 40; i++) {
//   console.log(a);
// }

//1.  10 аас 1 рүү буурах дарааллаар хэвлэ.

// let number = 0;
// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

//2. Өгөгдсөн n тооны хүрдийг харуул.

// let n = 12;
// let s = 10;

// for (i = 1; i <= s; i++) {
//   console.log(n * i);
// }

/// 3. 987654 дээрх тоо хэдэн оронтой тоо гэдгийг тоол. Result:6

let n = 987654;

const a1 = n % 10;
console.log(a1);

const a2 = n % 100;
console.log(a2);

const a3 = n % 1000;
console.log(a3);

const a4 = n % 10000;
console.log(a4);

const a5 = n % 100000;
console.log(a5);

const a6 = n % 1000000;
console.log(a6);

let num = 98;
let count = 0;
for (let i = 0; num > i; i++) {
  count++;
}
