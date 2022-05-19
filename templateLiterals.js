// Template Literals
// Cara menggabungkan string sebelumnya:
// 'string 1' + 'string 2'
let nama = "Tama";
console.log("Halo nama saya " + nama + ", salam kenal!");

// Template literals
// Menggunakan kutip terbalik ` (di atas tombol tab kiri, sebelah angka 1)
// `String ${namaVariabel} string lainnya`
console.log(`Halo nama saya ${nama}, salam kenal!`);

// Contoh manfaat string literals di library/framework React
("Halo Tama, selamat siang!");
// let helloMessage = 'Halo' + user.name + ', selamat ' + messageBasedOnTime + '!'
let helloMessage = `Halo ${user.name} selamat ${messageBasedOnTime}!`;
// <p>{helloMessage}</p>
