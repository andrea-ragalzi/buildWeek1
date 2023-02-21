window.addEventListener("load", (event) => {
setInterval(()=>timerOff(),"30000");
getRandomQuestions();
listenerButton(rispostaCorretta);

});


const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];
const QUESTIONS_FILE = 'assets/js/questions.json';
const button1 = document.getElementById("0");
const button2 = document.getElementById("1");
const button3 = document.getElementById("2");
const button4 = document.getElementById("3");
var rispostaCorretta;
var totale=1;
var corretti=0;
var errati=0;



var getRandomNumbers = (length) => {
    /**
* Genera un array di numeri casuali univoci da 0 a 'length' (incluso)
* utilizzando un set.
* @param {number} length - La lunghezza dell'array da generare.
* @returns {number[]} Un array di numeri casuali univoci da 0 a 'length'
(incluso).
    */
    if (!length) {
        return;
    }
    let set = new Set();
    while (set.size <= length) {
        set.add(Math.floor(Math.random() * (length + 1)));
    }
    return [...set];
}






var listenerButton = (questions)=>{
    
    console.log(questions);
    button1.addEventListener("click", ()=>{
        if(button1.getAttribute("value")==questions){
            document.getElementById("Totale").innerHTML= ++totale;
           ++corretti;
           restartTime();    
            console.log("corretto");
            getRandomQuestions();
            

        }else{
          
           restartTime();        
            ++errati;
            document.getElementById("Totale").innerHTML= ++totale;
            console.log("errato");
            //getRandomQuestions();
            
        }
    });

    button2.addEventListener("click", ()=>{
        if(button2.getAttribute("value")==questions){
            document.getElementById("Totale").innerHTML= ++totale;
            restartTime();
            ++corretti;
             console.log("corretto");
             getRandomQuestions();
        }else{
           
            restartTime();
            ++errati;
            document.getElementById("Totale").innerHTML= ++totale;
            console.log("errato");
            getRandomQuestions();
        }
    });

    button3.addEventListener("click", ()=>{
        if(button3.getAttribute("value")==questions){
            document.getElementById("Totale").innerHTML= ++totale;
            restartTime();
            ++corretti;
            console.log("corretto");
            getRandomQuestions();
        }else{
            restartTime();
            ++errati;
            document.getElementById("Totale").innerHTML= ++totale;
            console.log("errato");
            getRandomQuestions();
        }
    });

    button4.addEventListener("click", ()=>{
        if(button4.getAttribute("value")==questions){
            restartTime();
            document.getElementById("Totale").innerHTML= ++totale; 
            ++corretti;
            document.getElementById("Totale").innerHTML= ++totale;
            console.log("corretto");
            getRandomQuestions();
            
        }else{
            restartTime();
            ++errati;
            document.getElementById("Totale").innerHTML= ++totale;
            console.log("errato");
         getRandomQuestions();
            

        }
    });
    

}





let con=0;

var getRandomQuestions = () => {
    /**
 * Genera un insieme casuale di domande e relative risposte utilizzando
 * un array di oggetti 'questions'.
 * Le risposte sono ordinate casualmente per ciascuna domanda e mostrate
 * come testo su quattro bottoni.
 * @param {HTMLElement} button1 - Il primo bottone sul quale visualizzare
 * la prima risposta.
 * @param {HTMLElement} button2 - Il secondo bottone sul quale visualizzare
 * la seconda risposta.
 * @param {HTMLElement} button3 - Il terzo bottone sul quale visualizzare
 * la terza risposta.
 * @param {HTMLElement} button4 - Il quarto bottone sul quale visualizzare
 * la quarta risposta.
 */
    

    console.log(++con);
    let ra=Math.floor(Math.random()*questions.length);
    
    for(let i=0;i<questions.length;i++){
        document.getElementById("domanda").innerHTML=questions[ra].question;
        let randomNumbers =
          getRandomNumbers(questions[ra].incorrect_answers.length);
        let answers =
            questions[ra].incorrect_answers.concat(questions[ra].correct_answer);
            
        button1.innerText = answers[randomNumbers[0]];
        button1.setAttribute("value",answers[randomNumbers[0]]);

        button2.innerText = answers[randomNumbers[1]];
        button2.setAttribute("value",answers[randomNumbers[1]]);

        button3.innerText = answers[randomNumbers[2]];
        button3.setAttribute("value",answers[randomNumbers[2]]);

        button4.innerText = answers[randomNumbers[3]];
        button4.setAttribute("value",answers[randomNumbers[3]]);

         return rispostaCorretta=questions[ra].correct_answer;
        console.log(rispostaCorretta);
      
      //  console.log(questions[ra].correct_answer);
      
      // return stampaRisp(rispostaCorretta);
     ;     
}

}






