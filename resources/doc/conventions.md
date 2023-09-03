# Convenzioni

## Nomenclatura

Usare il camelCase per i nomi dei file, le variabili, le funzioni.
Usare il PascalCase per le classi.
Usare lo SCREAMING_CASE per le costanti (tipo il PI_GRECO o il NOME_DI_UN_FILE).

## STRUTTURA BRANCH E MAIN

- root folder
  - index.html
  - assets folder
    - css folder
    - doc folder
    - img folder
    - js folder
    - json folder
  
## ORGANIZZAZIONE SCRIPT JS

Scrivere il codice nel seguente ordine:
- import
- class
- functions
- variables
- entry point code

Ordinare le funzioni e le classi alfabeticamente quabdo possibile.

## HTML

Seguire questa struttura per il body:
- header
- main
- footer

## CSS

Ogni pagina HTML avrà un div container che racchiude tutto il contenuto
all'interno del body. 
Tale container avrà una classe nominata con lo schema -> .nomepaginaContainer.

es.---------------------------------------------------------------------------------

    div class='feedbackContainer'> (oppure 'resultsContainer', oppure 'quizContainer'>
		
		//
		// CONTENUTO
		//

    div


----------------------------------------------------------------------------------

Così facendo potete utilizzare i selettori CSS come meglio credete MA PONENDOLI COME FIGLI DEL CONTAINER.

es.----------------------------------------------------------------------------------

.feedbackContainer div {--

.feedbackContainer #thisId {
	//
}

--------------------------------------------------------------------------------------
