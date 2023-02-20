/*const starList = document.getElementById("starList");
starList.addEventListener("mouseover");
starList.addEventListener("mouseout")*/
var colorStar = (maxIndex) => {
  for (let i = 0; i <= maxIndex; i++) {
    let star = starList[i];
    star.style.filter = "grayscale(0%)";
  }
}
var unColorStar = (minIndex, maxIndex) => {
  for (let i = minIndex; i <= maxIndex; i++) {
    let star = starList[i];
    star.style.filter = "grayscale(100%)";
  }
}
var clickedStar = (indexStar) => {
  selectedValue = true;
  unColorStar(indexStar+1, starList.length - 1);
}

var selectedValue = false;
const starList = document.querySelectorAll(".star");
console.log(starList);


for (let i = 0; i < starList.length; i++) {
  let star = starList[i];
  star.addEventListener("mouseover", function () {
    console.log("Il mouse è sopra l'elemento!");
    colorStar(i);
  });

  star.addEventListener("mouseout", function () {
    if (!selectedValue) {
      console.log("Il mouse ha lasciato l'elemento!");
      unColorStar(0, starList.length - 1);
    }
  });
  star.addEventListener("click", function () {
    console.log("mouse ha cliccato");
    clickedStar(i);
  })
}
//ciao da Andrea