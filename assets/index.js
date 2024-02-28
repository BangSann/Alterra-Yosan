let pilihan1 = document.getElementById("option1");
let pilihan2 = document.getElementById("option2");
let pilihan3 = document.getElementById("option3");

pilihan1.addEventListener("click", () => {
  // alert(pilihan1.value)
  let randNum = Math.random();
  suit(pilihan1.value, pilihanLawan(randNum));
  document.getElementById("option").innerText = pilihan1.value;
  document.getElementById("lawan").innerText = pilihanLawan(randNum);
});
pilihan2.addEventListener("click", () => {
  // alert(pilihan2.value)
  let randNum = Math.random();
  suit(pilihan2.value, pilihanLawan(randNum));
  document.getElementById("option").innerText = pilihan2.value;
  document.getElementById("lawan").innerText = pilihanLawan(randNum);
});
pilihan3.addEventListener("click", () => {
  // alert(pilihan3.value)
  let randNum = Math.random();
  suit(pilihan3.value, pilihanLawan(randNum));
  document.getElementById("option").innerText = pilihan3.value;
  document.getElementById("lawan").innerText = pilihanLawan(randNum);
});

const pilihanLawan = (randNum) => {
  if (randNum > 0.6) {
    return "Batu";
  } else if (randNum > 0.3) {
    return "Kertas";
  } else {
    return "Gunting";
  }
};

const suit = (option, lawan) => {
  if (option == lawan) {
    document.getElementById('hasil').innerText = "draw"
  } else {
    if (option == "Gunting") {
      if (lawan == "Kertas") {
        document.getElementById('hasil').innerText = "menang"
      } else if (lawan == "Batu") {
        document.getElementById('hasil').innerText = "kalah"
      }
    }
    else if (option == "Batu") {
      if (lawan == "Kertas") {
        document.getElementById('hasil').innerText = "kalah"
      } else if (lawan == "Gunting") {
        document.getElementById('hasil').innerText = "menang"
      }
    }
    else if (option == "Kertas") {
      if (lawan == "Gunting") {
        document.getElementById('hasil').innerText = "kalah"
      } else if (lawan == "Batu") {
        document.getElementById('hasil').innerText = "menang"
      }
    }
  }
};
