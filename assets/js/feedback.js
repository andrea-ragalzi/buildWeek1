var colorStar = (maxIndex) => {
  for (let i = 0; i <= maxIndex; i++) {
    let star = starList[i];
    star.style.filter = "grayscale(0%)";
  }
}
var unColorStar = (minIndex) => {
  for (let i = minIndex; i <= maxIndex; i++) {
    let star = starList[i];
    star.style.filter = "grayscale(100%)";
  }
}
var clickedStar = (indexStar) => {
  selectedValue = true;
  unColorStar(indexStar + 1, starList.length - 1);
}

var selectedValue = false;
const starList = document.querySelectorAll(".star");


for (let i = 0; i < starList.length; i++) {
  let star = starList[i];
  star.addEventListener("mouseover", function () {
    colorStar(i);
  });

  star.addEventListener("mouseout", function () {
    if (!selectedValue) {
      unColorStar(0);
    }
  });
  star.addEventListener("click", function () {
    clickedStar(i);
  })
}