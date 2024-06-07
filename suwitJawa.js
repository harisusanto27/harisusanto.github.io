// var s = "";

// for (var i = 10; i > 0; i--) {
//   //   for (var k = 10; k >= i; k--) {
//   //     s += " ";
//   //
//   for (var l = 10; l >= i; l--) {
//     s += "*";
//   }

//   s += "\n";
// }

// console.log(s);

// for (var i = 9; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// var n = 5; // jumlah baris
// var result = "";

// // buat baris
// for (var row = 1; row <= n; row++) {
//   // cetak spasi
//   for (var space = 0; space < n - row; space++) {
//     result += " ";
//   }

//   // buat pola
//   for (var star = 0; star < row; star++) {
//     // jika nilai var star lebih dari atau sama dengan 1 tambahkan simbol tambah (+) setelahnya
//     if (star >= 1) {
//       result += "+";
//     }

//     // selain dari itu langsung cetak *
//     result += "*";
//   }

//   // print row
//   result += "\n";
// }

// console.log(result);

var tanya = true;
while (tanya) {
  // Menangkap pilihan player
  var p = prompt("pilih : gajah, semut, atau orang!\n( huruf kecil semua )");

  // menangkap pilihan computer
  // membangkitkan angka random
  var comp = Math.random();
  console.log(comp);

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  // menentukan rules
  var hasil = "";
  if (p == comp) {
    hasil = "SERI!";
  } else if (p == "gajah") {
    // if (comp = 'orang') {
    //   hasil = 'MENANG!';
    // }
    // else {
    //   hasil = 'KALAH!'
    // }
    hasil = comp == "orang" ? "MENANG!" : "KALAH!";
  } else if (p == "orang") {
    // if (comp = 'gajah') {
    //   hasil = 'KALAH!';
    // } else {
    //   hasil = 'MENANG!'
    // }
    hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
  } else if (p == "semut") {
    hasil = comp == "gajah" ? "MENANG" : "KALAH";
  } else {
    hasil = "SALAH MEMASUKKAN PILIHAN!";
  }

  // menampilkan hasil
  alert(
    "Kamu memilih : " +
      p +
      " dan ARI TAMPAN memilih : " +
      comp +
      "\nMaka hasilnya kamu : " +
      hasil
  );

  tanya = confirm("main lagi");
}

alert("Terima kasih sudah bermain :)");
