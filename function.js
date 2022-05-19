// FUNCTION
// format 1 declaration:
// function namaFunction(parameter){ ..kode dieksekusi }
function printNama(nama) {
  console.log("Halo " + nama);
}
printNama("Tama");

// format 2 expression ES5:
// const namaFunction = function(parameter){...kode dieksekusi}
const tambah = function (angka1, angka2) {
  console.log(angka1 + angka2);
  return angka1 + angka2;
};
tambah(3, 5);
let hasilTambah = tambah(9, 9);
console.log(hasilTambah);

// format 3 arrow function ES6:
// const namaFunction = (parameter) => {...kode dieksekusi}
const addition = (num1, num2) => {
  console.log(num1 + num2);
};
addition(7, 3);

// Return adalah keyword untuk mengembalikan nilai
// Kode apapun setelah return tidak akan dieksekusi
const cobaReturn = () => {
  console.log("Pesan 1 berhasil");
  return; // return undefined
  console.log("Pesan 2 tidak berhasil");
};
cobaReturn();

const kodeRahasia = (num) => {
  if (num !== 5) {
    console.log("Kode rahasia salah!");
    return "Error";
  }

  console.log("Kode rahasia ditemukan!");
};
kodeRahasia(5);

// Perbedaan antara Declaration dan Expression
bisaDipanggil();
function bisaDipanggil() {
  console.log("bisa dipanggil");
}

// anotherDoStuff();
const anotherDoStuff = function () {
  console.log("hello world 2");
};

// otherStuff();
var otherStuff = () => {
  console.log("hello world");
};

// tambah(10, 100)
