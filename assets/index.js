let pilihan1 = document.getElementById("option1");
let pilihan2 = document.getElementById("option2");
let pilihan3 = document.getElementById("option3");
let total = 0
let win = 0

pilihan1.addEventListener("click", () => {
  // alert(pilihan1.value)
  let randNum = Math.random();
  suit(pilihan1.value, pilihanLawan(randNum));
  document.getElementById("option").innerText = pilihan1.value;
  document.getElementById("lawan").innerText = pilihanLawan(randNum);
  total += 1 
  addRatioWin(total,win)
});
pilihan2.addEventListener("click", () => {
  // alert(pilihan2.value)
  let randNum = Math.random();
  suit(pilihan2.value, pilihanLawan(randNum));
  document.getElementById("option").innerText = pilihan2.value;
  document.getElementById("lawan").innerText = pilihanLawan(randNum);
  total += 1
  addRatioWin(total,win)
});
pilihan3.addEventListener("click", () => {
  // alert(pilihan3.value)
  let randNum = Math.random();
  suit(pilihan3.value, pilihanLawan(randNum));
  document.getElementById("option").innerText = pilihan3.value;
  document.getElementById("lawan").innerText = pilihanLawan(randNum);
  total += 1
  addRatioWin(total,win)
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
    document.getElementById('hasil').style.color = 'grey'
  } else {
    if (option == "Gunting") {
      if (lawan == "Kertas") {
        document.getElementById('hasil').style.color = 'green'
        document.getElementById('hasil').innerText = "menang"
        win += 1
      } else if (lawan == "Batu") {
        document.getElementById('hasil').style.color = 'red'
        document.getElementById('hasil').innerText = "kalah"
      }
    }
    else if (option == "Batu") {
      if (lawan == "Kertas") {
        document.getElementById('hasil').style.color = 'red'
        document.getElementById('hasil').innerText = "kalah"
      } else if (lawan == "Gunting") {
        document.getElementById('hasil').style.color = 'green'
        document.getElementById('hasil').innerText = "menang"
        win += 1
      }
    }
    else if (option == "Kertas") {
      if (lawan == "Gunting") {
        document.getElementById('hasil').style.color = 'red'
        document.getElementById('hasil').innerText = "kalah"
      } else if (lawan == "Batu") {
        document.getElementById('hasil').style.color = 'green'
        document.getElementById('hasil').innerText = "menang"
        win += 1
      }
    }
  }
};

const addRatioWin =( total , win )=>{
  document.getElementById('win').innerText=(win/total)*100
  document.getElementById('total').innerText=total
}
