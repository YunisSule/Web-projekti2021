/**
 * @author Olli-Pekka Hautamäki <n1haol00@students.oamk.fi>
 */

const questions = [
    'Mikä esihistorian kausi edelsi rautakautta?',
    'Ketkä saivat äänestää antiikin Ateenan kansankokouksissa?',
    'Mikä seuraavista kaupungeista katsotaan kuuluvan Suomen keskiaikaisiin kaupunkeihin?',
    'Ketä pidetään suomen kirjakielen isänä?',
    'Kenet lapsistaan Kustaa Vaasa nimesi Suomen herttuakunnan herttuaksi?'];
const options = [
        ['Pronssikausi', 'Kivikausi', 'Keskiaika', 'Neoliittinen eli keraaminen kausi'],
        ['Miehet', 'Naiset', 'Orjat', 'Metoikit eli Ateenaan muualta muuttaneet'],
        ['Turku', 'Helsinki', 'Oulu', 'Rovaniemi'],
        ['Mikael Agricola', 'Martti Luther', 'J.V. Snellman', 'Aleksis Kivi'],
        ['Juhana', 'Eerik', 'Katariina', 'Kaarle']];
const answers = [
        'Rautakautta (500 eaa. – 1200/1300 jaa.) edelsi pronssikausi (n. 1700–500 eaa.).',
        'Äänioikeus oli vain vapailla yli 20-vuotiailla miespuolisilla Ateenan kansalaisilla.',
        'Suomen keskiaikaiset kaupungit on perustettu 1200–1400-luvuilla; muut myöhemmin.',
        'Mikael Agricola (1510–1557) kirjoitti ja käänsi ensimmäiset suomenkieliset kirjat.',
        'Juhana, myöhemmin Juhana III, toimi Suomen herttuana 1556–1563.'];

let questionIndex = -1;
let correctAnswer = 0;
let correctAnswers = 0;
let studentName = '';        

/**
 * Class for keeping track of the correct answer after they've been shuffled.
 */
class Answer {
    constructor(text, correct) {
        this.text = text;
        this.correct = correct;
    }
    getText() { return this.text; }
    isCorrect() { return this.correct; }
}

document.querySelector('#next').addEventListener('click', advanceQuiz);

/**
 * Advances the quiz to the next phase when the arrow icon is clicked.
 */
function advanceQuiz() {
    document.querySelector('.mb-3').style.display = 'none';
    document.querySelector('#next').style.display = 'none';
    questionIndex++;

    if(questionIndex === 0) studentName = document.getElementById("formGroupExampleInput").value;

    document.querySelector('#visa').replaceChildren();

    if(questionIndex < 5) nextQuestion();
    else if (questionIndex === 5)  results();
    else window.location.href = './maantieto.html';
}

/**
 * Builds questions' GUI on the page.
 */
function nextQuestion() {
    let quiz = document.querySelector('#visa');
    let shuffledOptions = new Array();

    for(let i = 0; i < 4; i++) shuffledOptions.push(new Answer(options[questionIndex][i], i === 0));
    shuffledOptions = shuffleArray(shuffledOptions);

    document.querySelector('h3').textContent = 'Kysymys ' + Number(questionIndex + 1) + ': ' + questions[questionIndex];

    quiz.textContent = '';
    drawProgressBar(quiz);

    for(let i = 0; i < 4; i++) {
        let element = document.createElement('div');
        element.setAttribute('index', i);
        element.classList.add('vaihtoehto', 'border', 'border-primary', 'rounded');
        element.textContent = shuffledOptions[i].getText();
        element.addEventListener('click', function() { chooseOption(i) });
        quiz.appendChild(element);
        if(shuffledOptions[i].isCorrect()) correctAnswer = i;
    }
}

/**
 * Draws a visual aid using Bootstrap's progress bar for the user to track quiz progress.
 * 
 * @param {Element} quiz The quiz div element the progress bar is appended to.
 */
function drawProgressBar(quiz) {
    let progress = document.createElement('div');
    let progressBar = document.createElement('div');
    let percent = Math.max(5, questionIndex * 20);

    progressBar.classList.add('progress-bar');
    progressBar.setAttribute('role', 'progressbar');

    progressBar.setAttribute('aria-valuenow', percent);
    progressBar.style.width = percent + '%';
    progressBar.textContent = percent + '%';

    progressBar.setAttribute('aria-valuemin', 0);
    progressBar.setAttribute('aria-valuemax', 100);

    progress.classList.add('progress');
    progress.appendChild(progressBar);

    quiz.appendChild(progress);
}

/**
 * Randomizes the order of an array's elements.
 * Used for shuffling answer options.
 * 
 * @param {Array} an array to be shuffled
 * @returns {Array} the array shuffled
 */
function shuffleArray(array) {
    for(let i = 0; i < array.length; i++) {
        let newPosition = randomInteger(0, array.length - 1);
        let a = array[newPosition];
        array[newPosition] = array[i];
        array[i] = a;
    }
    return array;
}

/**
 * Generates a random integer between the given boundaries.
 * 
 * @param {Number} min value
 * @param {Number} max value
 * @returns {Number} The random integer
 */
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Updates the page and quiz based on the answer picked.
 * 
 * @param {Number} optionChosen 
 */
function chooseOption(optionChosen) {
    let answer = document.createElement('div');
    let reason = document.createElement('div');
    let chosenWisely = optionChosen === correctAnswer;
    let optionElements = document.querySelectorAll('.vaihtoehto');
    let nextArrow = document.querySelector('#next');

    optionElements[optionChosen].textContent = 'Vastasit: ' + optionElements[optionChosen].textContent;
    for(let i = 0; i < 4; i++) {
        if(i === correctAnswer) optionElements[i].classList.add('oikein');
        else if(i === optionChosen) optionElements[i].classList.add('ei-oikein');

        /*Removes the irremovable anonymous function event listener
        so that selecting the answers still visible on the page has no effect.*/
        optionElements[i].replaceWith(optionElements[i].cloneNode(true));
    }

    if(chosenWisely) {
        correctAnswers++;
        answer.classList.add('oikein');
        answer.textContent = 'Oikein!';
    }
    else {
        answer.classList.add('oikein');
        answer.textContent = 'Oikea vastaus on: ';
        answer.textContent += optionElements[correctAnswer].textContent + '. ';
    }
    answer.classList.add('perustelu');
    document.querySelector('#visa').appendChild(answer);

    reason.textContent += answers[questionIndex];
    reason.classList.add('perustelu', 'oikein');
    document.querySelector('#visa').appendChild(reason);

    updateProgressBar(document.querySelector('.progress-bar'), 15);
    nextArrow.style.display = 'block';
    nextArrow.scrollIntoView(false);
}

/**
 * Increases the progress bar when an answer is picked.
 * 
 * @param {Element} progressBar The progress bar element
 * @param {Number} increase How much is added
 */
function updateProgressBar(progressBar, increase) {
    let percent = Number(progressBar.getAttribute('aria-valuenow')) + increase;
    progressBar.setAttribute('aria-valuenow', percent);
    progressBar.style.width = percent + '%';
    progressBar.textContent = percent + '%';
}

/**
 * Displays the results of the quiz.
 */
function results() {
    let result = document.createElement('p');
    let smiley = document.createElement('i');
    let next = document.querySelector('#next');
    let title = document.querySelector('h3');

    if(studentName) title.textContent = studentName + ', tiesit ' + correctAnswers + ' / 5 oikein';
    else title.textContent = 'Tulos: ' + correctAnswers + ' / 5 oikein';

    smiley.classList.add('fa-regular');

    switch(correctAnswers) {
        case 0:
            smiley.classList.add('fa-face-anguished');
            result.textContent = 'Kaikki pieleen';
            break;
        case 1:
            smiley.classList.add('fa-face-disappointed');
            result.textContent = 'Olisi voinut mennä paremminkin.';
            break;
        case 2:
            smiley.classList.add('fa-face-diagonal-mouth');
            result.textContent = 'Sinnepäin';
            break;
        case 3:
            smiley.classList.add('face-raised-eyebrow');
            result.textContent = 'Melkein kaikki oikein';
            break;
        case 4:
            smiley.classList.add('face-smile');
            result.textContent = 'Melkein täydellistä';
            break;
        case 5:
            smiley.classList.add('face-laugh');
            result.textContent = 'Erinomaista!';
            break;
    }

    document.querySelector('#visa').appendChild(smiley);
    document.querySelector('#visa').appendChild(result);

    next.style.display = 'block';
}