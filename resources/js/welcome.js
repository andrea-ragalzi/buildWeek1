var selezione = () => {
    var selectDaVerificare = document.getElementById("Difficulty");
    var indiceSelezionato = selectDaVerificare.selectedIndex;
    var valoreSelezionato = selectDaVerificare.options[indiceSelezionato];
    var testoDentroLopzione = valoreSelezionato.text;
    return testoDentroLopzione;
}

var button = document.getElementById('proceed');

button.addEventListener('click', () => {
    localStorage.setItem('difficolta', selezione());
})

