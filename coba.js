// if, else, nested if
let e = 3;
let k = 24;
if (e > k) {
  console.log("yaa lebih besar dari gaa");
} else if (e < k) {
  console.log("yaa lebih kecil dari gaa");
} else {
  console.log("yaa sama dengan gaa");
}

// switch case
let day = "minggu";
switch (day) {
  case "senin":
    console.log("Hari ini Senin");
    break;
  case "selasa":
    console.log("Hari ini Selasa");
    break;
  case "rabu":
    console.log("Hari ini Rabu");
    break;
  default:
    console.log("Hari ini bukan Senin, Selasa, atau Rabu");
}

// for statement
for (let m = 0; m < 5; m++) {
  console.log(m);
}

// while
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// do while
let a = 0;
do {
  console.log(a);
  a++;
} while (a < 5);

// function
function greeting(name) {
  return "Hello, Apa Kabar " + name + "? Sehat ga?";
}
console.log(greeting("Eka Melisa"));
