// Method adalah function di dalam object
const objMath = {
  angkaDefault: 100,
  tambah: function (angka1, angka2) {
    console.log(angka1 + angka2);
    return angka1 + angka2;
  },
  kurang: (angka1, angka2) => angka1 + angka2,
  kurangV2: (angka1, angka2) => {
    return angka1 + angka2;
  },
  olahAngkaDefault: (angkaPembagi) => {
    return objMath.angkaDefault;
  },
};

objMath.tambah(1, 2);
const result = objMath.kurang(10, 97);
console.log(result);

console.log(objMath.olahAngkaDefault());
