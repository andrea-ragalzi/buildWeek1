class Star {
    constructor() {
        this.html;
        this.clicked;
    }
}

var clickedStar = (indexStar) => {
    for (let i = 0; i <= indexStar; i++) {
        let star = stars[i];
        star.clicked = true;
    }
    for (let i = indexStar + 1; i < stars.length; i++) {
        let star = stars[i];
        star.clicked = false;
    }
}

var colorStar = (maxIndex) => {
    for (let i = 0; i <= maxIndex; i++) {
        let star = stars[i];
        star.html.style.filter = "brightness(1)";
    }
}

var createStars = () => {
    const starHtmlList = document.querySelectorAll(".star");
    let result = [];
    for (let starHtml of starHtmlList) {
        let star = new Star();
        star.html = starHtml;
        star.clicked = false;
        result.push(star);
    }
    return result;
}

var unColorStar = (minIndex) => {
    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        if (star.clicked) {
            star.html.style.filter = "brightness(1)";
        }
        else {
            star.html.style.filter = "brightness(0)";
        }
    }
}

var stars = createStars();

for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    star.html.addEventListener("mouseover", function () {
        colorStar(i);
    });
    star.html.addEventListener("click", function () {
        clickedStar(i);
        unColorStar(i);
    })
    star.html.addEventListener("mouseout", function () {
        unColorStar(i);
    });
}