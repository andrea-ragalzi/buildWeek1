/*
Il primo comando pushState() sostituisce la pagina corrente con una nuova
pagina vuota, utilizzando l'URL corrente come URL della nuova pagina.
Il secondo comando assegna una funzione all'evento onpopstate, che viene
attivato quando l'utente cerca di tornare indietro nella cronologia.
La funzione onpopstate fa sì che il browser torni avanti di una pagina,
in modo che l'utente rimanga sulla pagina corrente.
Con questo codice, l'utente non sarà in grado di tornare indietro nella 
cronologia delle pagine, ma potrà comunque usare i pulsanti "Indietro" del
browser per tornare alla pagina precedente se non siamo sulla pagina corrente.
*/
window.history.pushState(null, null, window.location.href);
window.onpopstate = function (event) {
    window.history.go(1);
};
