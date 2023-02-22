
const params = new URLSearchParams(CryptoJS.AES.decrypt(window.location.search,'TOYT079n'+'sH8GO8T2XsD7bt5Cs4LoLILPIX'+'S73rUIl7wMTNdSidRtis5wK3pnjg').toString(CryptoJS.enc.Utf8));
const score = params.get('score')
const questionsLength = params.get('questionsLength')
console.log('score ' + score +'questions length ' + questionsLength)
var nDomande = questionsLength;
var rootEl = document.querySelector(':root');
var rootStyle = getComputedStyle(rootEl);
var wrongPercentText = document.getElementById('wrongPercent');
var correctPercentText = document.getElementById('correctPercent');
var wrongTotText = document.getElementById('wrongTot');
var correctTotText = document.getElementById('correctTot');
var correctPercent = (Math.floor(((score / nDomande) * 100) * 100 ) / 100);
console.log(correctPercent);
var wrongPercent = (100 - correctPercent);
console.log(wrongPercent);
var wrongTot = `${nDomande - score}/${nDomande}`;
var correctTot = `${score}/${nDomande}`;

window.onload = () => { // Al caricamento della pagina avvia l'animazione del grafico
    var pos = 100; //L'animazione è al contrario, il 100 è lo "0"
    var id = setInterval(frame, 45);
    function frame() {
        if(pos != Math.floor(wrongPercent) && pos>0){
            pos = --pos;
            rootEl.style.setProperty('--percentage', `${pos}`); 
            console.log('frame-position:'+pos); 
        } else { 
            clearInterval(id);
        }
    }
};

writeResults = () => {  //Scrive le stringhe di output dei risultati
    correctPercentText.textContent = `${correctPercent}%`;
    wrongPercentText.textContent = `${wrongPercent}%`;
    correctTotText.textContent = `${correctTot} questions`;
    wrongTotText.textContent = `${wrongTot} questions`;
}
writeResults();