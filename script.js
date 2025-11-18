console.log("HELLO WORLD");

const x = 5;
const y = 3;

let c = x + y;

console.log("Бодлого 1", c);

const a = 10;

const b = 4;

let result = 0;

result = result - b;

console.log("Бодлого 2", result);

const p = 7;
const q = 6;
let d = p * q;
console.log("Бодлого 3", d);

//Бодлого 4
const m = 20;

const n = 5;

let sum = m / n;

console.log("Бодлого 4", sum);

//Бодлого 5
const r = 15;
const s = 4;

let l = r % s;

console.log("Бодлого 5", l);

// Бодлого 6
num = 10;
num = num + 5;

console.log("Бодлого 6", num);

// Бодлого 7
num = 20;
num += 10;
console.log("Бодлого 7", num);

//Бодлого 8
num = 50;
num -= 20;
console.log("Бодлого 8", num);

//Бодлого 9
num = 6;
num *= 3;
console.log("Бодлого 9", num);

//Бодлого 10
num = 16;
num /= 4;
console.log("Бодлого 10", num);

// Бодлого 2-1
let j = 3;
let f = 4;
let o = 5;
let k = j + f + o;

console.log("Бодлого 2-1", k);

//Бодлого 2-2
const sec = 98;
const division = 60;
const min = sec / division; //butarhaitai min

const remainedSec = sec % division; //botid sec
const RealMin = (sec - remainedSec) / division; // bodit min

console.log(`мин:${RealMin} , сек:${remainedSec}  `);

//Бодлого 2-3

const second = 4290;
const divisions = 60;

const minut = second / divisions; //butarhaitai min

const RealSecond = second % divisions; // realsecond

const RemainMin = (second - RealSecond) / divisions; //RemainMin.
//or const RemainMin = (second-RealSecond) / divisions

const RealMinut = RemainMin % divisions;
const RealHour = (RemainMin - RealMinut) / divisions;

console.log(`цаг:${RealHour} мин:${RealMinut} сек:${RealSecond}`);
