// FOR LOOP
// format:
// for (inisialisasi; kondisi; perubahanCounter) { ...kode yang dieksekusi }

console.log("FOR LOOP -------");
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// bisa refernsi ke variabel yang sudah ada
let j = 0;
for (j; j < 5; j++) {
  console.log("Index ke: " + j);
}

// nilai refernsi harus berubah
// i++ maksudnya i = i + 1
for (let i = 0; i < 5; i++) {
  console.log(i);
}
for (let i = 0; i < 5; i = i + 1) {
  console.log(i);
}

// While dan Do While
console.log("While & Do While -------");
let index = 0;
while (index < 5) {
  console.log(index);
  index++;
}

index = 100;
do {
  console.log(index);
  index = index + 1;
} while (index < 10);

// Contoh loop di dalam loop
for (let x = 0; x < 10; x++) {
  // % artinya modulo
  // sisa bagi
  // 4 % 2 = 0
  // 9 % 2 = 1
  while (x % 2 === 0) {
    console.log("genap: " + x);
    x++;
  }
  console.log("ganjil: " + x);
}
