// Callback Function adalah function biasa, yang dikirimkan sebagai parameter ke function lain, kemudian dieksekusi di function tersebut.

function saySomething(message) {
  console.log(message);
}

function sayHi(message, callback) {
  callback(message);
}

sayHi("Halo semuanya", saySomething);

// sama seperti berikut, namun tidak dinamis
function sayHi2(message) {
  saySomething(message);
}
sayHi2("halooo");

const array = [1, 2, 3, 4, 5];

array.map((value, index) => {
  console.log(`Value ke ${value}, index ke ${index}`);
});

// perbedaan antara langsung deklarasi callback function di dalam method
// VS
// membuat function terlebih dahulu baru passing ke parameter
const callbackFn = (value, index) =>
  console.log(`Value ke ${value}, index ke ${index}`);

array.map(callbackFn);
