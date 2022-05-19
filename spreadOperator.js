// Spread operator untuk mengeluarkan semua value dari variabel
// ...variabel

// Use case 1: Menggabungkan array
let arrayLama = [1, 2, 3, 4];
let arrayBaru = [5, 6, 7, 8];

// contoh menggunakan spread operator
console.log(arrayLama);
console.log(...arrayLama);

// jadinya string
let arrayGabungan = arrayLama + arrayBaru;
console.log(arrayGabungan);

// jadinya array 2 dimensi
arrayGabungan = [arrayLama, arrayBaru];
console.log(arrayGabungan);

// dengan spread operator untuk menggabungkan array
arrayGabungan = [...arrayLama, ...arrayBaru, ...arrayLama];
console.log(arrayGabungan);

// Use case 2: copy objek atau menggabungkan objek
const obj1 = {
  nama: "Budi",
  umur: 30,
};
const obj2 = {
  alamat: "Jakarta",
  pekerjaan: "Software Engineer",
};

// jadinya object di dalam object
let obj3 = { obj1 };
console.log(obj3);

// copy object dengan spread
obj3 = { ...obj1 };
console.log(obj3);

// menggabungkan object dengan spread
obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// Contoh penggunaannya adalah infinite scrolling yakni ketika kita scroll social media ke bawah
// dia akan menampilkan postingan lainnya
let posts = [
  { 1: 1 },
  { 2: 2 },
  { 3: 3 },
  // sampai 10
];
// misal ketika sudah di postingan ke 8 maka akan request backend kembali
let postinganBaru = [{ 11: 11 }, { 12: 12 }];
posts = [...posts, ...postinganBaru];
