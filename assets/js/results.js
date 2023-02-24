var writeResults = () => {  //Scrive le stringhe di output dei risultati
    correctPercentText.textContent = `${correctPercent}%`;
    wrongPercentText.textContent = `${wrongPercent}%`;
    correctTotText.textContent = `${correctTot} questions`;
    wrongTotText.textContent = `${wrongTot} questions`;

    if (correctPercent >= 60) {
        document.getElementById('iDd').innerHTML = "<p class='innerDonut1'>Congratulations!<span>You passed the exam.</span></p><p class='innerDonut2'>We'll send you the certificate in few minutes.<br> Check your email (including promotions / spam folder)</p>";
    } else {
        document.getElementById('iDd').innerHTML = "<p class='innerDonut1'>Ops!<span>You did not pass the exam.</span></p><p class='innerDonut2'>Seems you have to study a little more.</p>";
    }

    //Screen < 1280px   
    document.getElementById('iDdSs').innerHTML = `<h2>Score</h2><h2>${correctPercent}%</h2><span>${correctTot} questions</span>`;

    if (correctPercent >= 60) {
        document.getElementById('oBsS').innerHTML = "<p class='outerDonut1'>Congratulations!<span>You passed the exam.</span></p><p class='outerDonut2'>We'll send you the certificate in few minutes.<br> Check your email (including promotions / spam folder)</p>";
    } else {
        document.getElementById('oBsS').innerHTML = "<p class='outerDonut1'>Ops!<span>You did not pass the exam.</span></p><p class='outerDonut2'>Seems you have to study a little more.</p>";
    }
}

const secretKey = "mZTiZlCYMNrgOlQGFPkMskSO4EWEO5AZOc7FWtRjOyMYIhOJLSlZZICIpnvZEsxn";
const nQuestions = parseInt(CryptoJS.AES.decrypt(localStorage.getItem('questionsNumber'), secretKey).toString(CryptoJS.enc.Utf8));
const score = parseInt(CryptoJS.AES.decrypt(localStorage.getItem('score'), secretKey).toString(CryptoJS.enc.Utf8));
var rootEl = document.querySelector(':root');
var rootStyle = getComputedStyle(rootEl);
var wrongPercentText = document.getElementById('wrongPercent');
var correctPercentText = document.getElementById('correctPercent');
var wrongTotText = document.getElementById('wrongTot');
var correctTotText = document.getElementById('correctTot');
var correctPercent = (Math.floor(((score / nQuestions) * 100) * 100) / 100);
var wrongPercent = (Math.floor((100 - correctPercent) * 100) / 100);
var wrongTot = `${nQuestions - score}/${nQuestions}`;
var correctTot = `${score}/${nQuestions}`;

window.onload = () => { // Al caricamento della pagina avvia l'animazione del grafico
    var pos = 100; //L'animazione è al contrario, il 100 è lo "0"
    var id = setInterval(frame, 45);
    function frame() {
        if (pos != Math.floor(wrongPercent) && pos > 0) {
            pos = --pos;
            rootEl.style.setProperty('--percentage', `${pos}`);
        } else {
            clearInterval(id);
        }
    }
};

writeResults();