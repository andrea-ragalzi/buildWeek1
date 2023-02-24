var selezione = () => {
    const indiceSelezionato =
        document.getElementById("Difficulty").selectedIndex;
    var valoreSelezionato = selectDaVerificare.options[indiceSelezionato];
    var testoDentroLopzione = valoreSelezionato.text;
    return testoDentroLopzione;
}

var button = document.getElementById('proceed');

button.addEventListener('click', () => {
    localStorage.setItem('difficolta', selezione());
})

