// Destructuring berguna untuk memecah struktur array atau object menjadi beberapa variabel yang berbeda

// sebelum menggunakan destructuring
const siswa = {
  firstName: "Siti",
  lastName: "Khasanah",
};

// let firstName = siswa.firstName;
// let lastName = siswa.lastName;
// console.log(`${firstName} ${lastName}`);

let rgb = [255, 201, 100];
// let red = rgb[0];
// let green = rgb[1];
// let blue = rgb[2];
// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

// Menggunakan Destructuring
let { firstName, lastName } = siswa;
console.log(`${firstName} ${lastName}`);

let [red, green, blue] = rgb;
console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

// Contoh use case ketika backend menerima data dari frontend
const body = {
  username: "tama",
  password: "912830918309128",
  saveLoggedIn: true,
};

// cek autentikasi
function cekLogin(body) {
  const { username, password } = body;
  if (!username) {
    return "Username salah";
  }

  if (!password) {
    return "Password salah";
  }
}
