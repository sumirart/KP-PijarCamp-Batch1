// JavaScript punya banyak method bawaan / built in function

// Split
// Membagi string menjadi beberapa bagian sesuai separatornya dan memasukan ke array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
let str = "Hari ini hari Kamis";
let arrayStr = str.split(" ");
console.log(arrayStr);

let kota = "Jakarta";
let arrayKota = kota.split("");
console.log(arrayKota);
console.log(kota.split("", 3));

// Join
// Menggabungkan string
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
console.log(arrayKota.join());
console.log(arrayKota.join(""));
console.log(arrayStr.join(" "));

arrayKota = kota.split("a");
console.log(arrayKota);
arrayKota = arrayKota.join("e");
console.log(arrayKota);
