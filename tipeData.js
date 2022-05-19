/**
 * Number
String
Boolean
Function
Array (masuk ke Object)
Object
null
undefined
 */

// Number
let umur = 123123;
8931232398;
let floatingPoint = 3.1412839;
console.log("Number -----");
console.log(umur);
console.log(floatingPoint);
console.log(999);

// String
let nama = "Tama";
let noKartu = "0004783483748";
console.log("String -----");
console.log(noKartu);

// Boolean - sering digunakan untuk pengecekan / conditional
let benar = true;
false;
console.log("Boolean -----");
console.log(benar);

// Function
function iniFunction() {
  return "tes";
}
console.log("Function -----");
console.log(iniFunction);

// Null
let error = false;
let errorMessage = null;
let undf;
console.log("Null vs Undefined -----");
console.log(errorMessage);
console.log(undf);

// Array
let listPeserta = [
  "tama",
  "fariz",
  "hasbuddin",
  "shandy",
  "adi",
  "azhari",
  "caroline",
];
console.log("Array -----");
console.log(listPeserta);
console.log(listPeserta.length);
// format untuk memanggil data di dalam Array adalah "variabelArray[index/urutan]"
// indexnya dimulai dari 0
console.log(listPeserta[1]);
// contoh memanggil array dengan index yang merupakan variabel
let urutan = 6;
console.log(listPeserta[urutan]);

// Array 2 dimensi
let array2Dimensi = [
  [1, 2, 3],
  [4, 5, 6],
];
// let array1Dimensi = array2Dimensi[1];
console.log(array2Dimensi[1][1]);

// Object
// Object juga merupakan tipe data yang biasanya punya anak
/** const obj = {
 *  key: value,
 *  key: value,
 * }
 */
const tama = {
  nama: "Tama",
  umur: 50,
  alamat: "Jakarta",
  noKTP: noKartu,
  contohArray: array2Dimensi,
  //   error: error, sama dengan yg bawah
  error,
};
console.log("Object -----");
console.log(tama);
// contoh memanggil key object ada 2 opsi:
// 1 - obj.key contoh tama.nama
// 2 - obj[key] contoh tama[nama] > biasanya untuk yang menggunakan variabel
console.log(tama.nama);
console.log(tama.umur);
console.log(tama[nama]); // sama dengan tama.Tama
let keyObj = "umur";
console.log(tama[keyObj]);

// Array of Objects
let arrayOfObjects = [
  {
    id: 1,
    nama: "tama",
  },
  {
    id: 2,
    nama: "Dadi",
  },
  {
    id: 3,
    nama: "Jean",
  },
];
console.log("Array of Objects -----");
console.log(arrayOfObjects[2].nama);

// Pengecekan tipe variabel dengan typeof
console.log("Pengecekan dengan Typeof -----");
console.log(typeof arrayOfObjects);
console.log(typeof nama);
console.log(typeof umur);
