const platLewat = (plat) => {
  let arrPlat = plat.split(" ");
  let intPlat = parseInt(arrPlat[1]);
  let tanggal = new Date();
  let today = tanggal.getDate();
  let hariIni = today % 2;
  if (intPlat % 2 === hariIni) {
    return "BOLEH LEWAT!";
  } else {
    return "NGGA BOLEH";
  }
};

console.log(platLewat("B 1112 CGK"));
console.log(platLewat("B 1113 CGK"));

console.log("=================");

const dansa = (arah) => {
  let y = 0;
  let x = 0;
  for (let i = 0; i < arah.length; i++) {
    const element = arah[i];
    switch (element) {
      case "maju":
        y++;
        break;
      case "mundur":
        y--;
        break;
      case "kanan":
        x++;
        break;
      case "kiri":
        x--;
        break;
    }
  }
  if (x === 0 && y === 0) {
    return true;
  } else {
    return false;
  }
};

let arrDansa = ["maju", "kanan", "kiri", "mundur"];

console.log(dansa(arrDansa));

console.log("=================");

const coba = (kata) => {
  let output = "";
  for (let i = 0; i < kata.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        output += kata[i].toUpperCase();
      } else {
        output += kata[i].toLowerCase();
      }
    }
    if (i < kata.length - 1) output += "-";
  }
  return output;
};

console.log(coba("AbCd"));

console.log("=================");

const testPass = (pass) => {
  pass = pass.replace(" ", "").toLowerCase().split("");
  if (pass.length < 6) {
    return "TIDAK STRONG";
  }
  let angka = "0123456789";
  let huruf = "abcdefghijklmnopqrstuvwxyz";
  let adaAngka = false;
  let adaHuruf = false;
  pass.forEach((element) => {
    if (angka.includes(element)) {
      adaAngka = true;
    } else if (huruf.includes(element)) {
      adaHuruf = true;
    }
  });
  if (adaAngka && adaHuruf) {
    return "STRONG";
  } else {
    return "TIDAK STRONG";
  }
};

console.log(testPass("abc123"));
