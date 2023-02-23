var initPage = async () => {
    try {
        questions = await readJsonFile(QUESTION_FILENAME)
        questions = shuffle(questions);
    } catch (error) {
        console.error(error);
    }
}

var readJsonFile = async (filename) => {
    try {
        const response = await fetch(filename);
        if (!response.ok) {
            throw new Error('Error while loading JSON file');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

var startQuiz = async () => {
    try {
        await initPage();
        showQuestion();
    } catch (error) {
        console.error(error);
    }
}

var checkAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct_answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion === questions.length) {
        endQuiz();
    } else {
        restartTime();
        showQuestion();
    }
}

var endQuiz = () => {
    questionElem.innerHTML = `Your score is ${score}/${questions.length}`;
    buttonsElem.innerHTML = '';
    progressElem.innerHTML = '';
    const secretKey = "mZTiZlCYMNrgOlQGFPkMskSO4EWEO5AZOc7FWtRjOyMYIhOJLSlZZICIpnvZEsxn";
    localStorage.setItem('score', CryptoJS.AES.encrypt(score.toString(), secretKey).toString());
    localStorage.setItem('questionsNumber', CryptoJS.AES.encrypt(questions.length.toString(), secretKey).toString());
    window.location.href = 'results.html';
    const stateObj = { page: "404" };
    const pageTitle = "404 - Benchmark";
    const newUrl = "404.html";
    window.history.pushState(stateObj, pageTitle, newUrl);
}

var showQuestion = () => {
    questionElem.innerHTML = questions[currentQuestion].question;
    buttonsElem.innerHTML = '';
    if (questions[currentQuestion].type === "boolean") {
        buttonsElem.innerHTML += `<button onclick="checkAnswer('True')">True</button>`;
        buttonsElem.innerHTML += `<button onclick="checkAnswer('False')">False</button>`;
    }
    else {
        let answers = questions[currentQuestion].incorrect_answers.concat(
            questions[currentQuestion].correct_answer);
        shuffle(answers);
        for (let i = 0; i < answers.length; i++) {
            buttonsElem.innerHTML +=
                `<button onclick="checkAnswer('${answers[i]}')">${answers[i]}</button>`;
        }
    }
    progressElem.innerHTML = `${currentQuestion + 1}<span id="violet">/${questions.length}</span>`;
}

var shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const QUESTION_FILENAME = './assets/json/questions.json';
const questionElem = document.getElementById('question');
const buttonsElem = document.getElementById('buttons');
const progressElem = document.getElementById('progress');
var questions;
var currentQuestion = 0;
var score = 0;
var encryptedScore;
var encryptedQuestionLength;


window.onload = () => {
    startQuiz();
}