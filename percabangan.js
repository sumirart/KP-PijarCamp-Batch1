// If
// formatnya: if(pengecekan kondisi)
// { kode yang dieksekusi kalau benar }
if (1 + 1 == 2) {
  console.log("Kondisi ini benar");
}

if (5 == "5") {
  console.log("5 sama dengan 5");
}

if (6 === "6") {
  console.log("6 sama dengan 6");
}

if (5 !== "5") {
  console.log("5 tidak sama dengan 5");
}

if (true) {
  console.log("true");
}

if (false === false) {
  console.log("false");
} else {
  console.log("benar");
}

let jam = 3;
if (jam < 12 && jam > 5) {
  console.log("pagi hari");
} else if (jam < 15 && jam > 12) {
  console.log("siang hari");
} else if (jam < 19 && jam > 15) {
  console.log("sore hari");
} else if (jam < 24 && jam > 19) {
  console.log("malam hari");
} else {
  console.log("dini hari");
}
