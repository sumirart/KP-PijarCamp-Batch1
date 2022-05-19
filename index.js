// keyword namaVariabel = isi variable
/**
 * var
 * let
 * const
 */

// deklarasi variabel
var negara = "Indonesia";
let nama = "Tama";
const tempatTanggalLahir = "Jakarta, 01-01-1990";

// ";" adalah tanda bahwa barisnya berakhir

// deklarasi variabel sekaligus
/** artinya sama dengan:
 * let alamat = "Jakarta"
 * let noHP = "08999999999"
 */
let alamat = "Jakarta",
  noHP = "08999999999",
  golonganDarah = "AB";

// const tidak bisa diubah
// tempatTanggalLahir = "Bandung, 01-01-1990";
nama = "Budi";

// console.log(variabel atau isi variabel)
console.log(nama);
console.log("Tama");

/**
 * PERBEDAAN SCOPE
 * Scope adalah jangkauan variabel kita
 */

console.log("Perbedaan VAR LET CONST ----------------");
// contoh scope
// 1.function scope
function tes() {
  let letDalamFunction = "ini di dalam function tes";
  var varDalamFunction = "var di dalam function";
  console.log(varDalamFunction);
  console.log(nama);
}
tes();
// console.log(varDalamFunction);
// console.log(letDalamFunction);

// global scope
let globalScope = "Ini bisa diakses dimana saja";

// block scope adalah semua yang berada di dalam { } kecuali function
// if, looping, switch
if (1 + 1 === 2) {
  let letDalamIf = "di dalam If";
  var varDiDalamBlockScope = "Var di dalam block scope";
}
// console.log(letDalamIf);

for (let index = 0; index < 1; index++) {
  let BlockScopeFor = "di dalam For";
  var varDiDalamBlockScope = "Var di dalam for loop scope";
}
console.log(varDiDalamBlockScope);

{
  let BlockScopeKosong = "di dalam block scope kosong";
}
// console.log(BlockScopeKosong);
