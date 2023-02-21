
var rootEl = document.querySelector(':root');
var rootStyle = getComputedStyle(rootEl);
var wrongPercentText = document.getElementById('wrongPercent');
var correctPercentText = document.getElementById('correctPercent');
var wrongTotText = document.getElementById('wrongTot');
var correctTotText = document.getElementById('correctTot');
var wrongPercent = 33.3;
var correctPercent = 66.7;
var wrongTot = '2/6';
var correctTot = '4/6';

window.onload = () => { // Al caricamento della pagina avvia l'animazione del grafico
    var pos = 100; //L'animazione è al contrario, il 100 è lo "0"
    var id = setInterval(frame, 45);
    function frame() {
        if(pos != Math.floor(wrongPercent)){
            pos = --pos;
            rootEl.style.setProperty('--percentage', `${pos}`); 
            console.log(pos); 
        } else { 
            clearInterval(id);
        }
    }
    
    console.log(pos);
};

writeResults = () => {  //Scrive le stringhe di output dei risultati
    correctPercentText.textContent = `${correctPercent}%`;
    wrongPercentText.textContent = `${wrongPercent}%`;
    correctTotText.textContent = `${correctTot} questions`;
    wrongTotText.textContent = `${wrongTot} questions`;
}
writeResults();