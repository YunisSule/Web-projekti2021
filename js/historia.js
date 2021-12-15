let questionIndex = -1;
let correctAnswer = 0;
let correctAnswers = 0;
let studentName = '';

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

class Answer {
    constructor(text, correct) {
        this.text = text;
        this.correct = correct;
    }
    getText() { return this.text; }
    isCorrect() { return this.correct; }
}

document.querySelector('#next').addEventListener('click', advanceQuiz);

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

function results() {
    let result = document.createElement('p');
    let next = document.querySelector('#next');
    let title = document.querySelector('h3');

    if(studentName) title.textContent = studentName + ', tiesit ' + correctAnswers + ' / 5 oikein';
    else title.textContent = 'Tulos: ' + correctAnswers + ' / 5 oikein';

    if(correctAnswers < 4) result.textContent = 'Tämä olisi voinut mennä paremminkin. :/';
    else if(correctAnswers < 5) result.textContent = 'Melkein kaikki oikein. :)';
    else result.textContent = 'Erinomaista! :D';

    document.querySelector('#visa').appendChild(result);

    next.style.display = 'block';
}

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
        element.classList.add('vaihtoehto');
        element.classList.add('border');
        element.classList.add('border-primary');
        element.classList.add('rounded');
        element.textContent = shuffledOptions[i].getText();
        element.addEventListener('click', function() { chooseOption(i) });
        quiz.appendChild(element);
        if(shuffledOptions[i].isCorrect()) correctAnswer = i;
    }
}

function drawProgressBar(quiz) {
    let progress = document.createElement('div');
    let progressBar = document.createElement('div');
    let percent = questionIndex * 20;

    progressBar.classList.add('progress-bar');
    progressBar.setAttribute('role', 'progressbar');
    progressBar.style.width = percent + '%';
    progressBar.setAttribute('aria-valuenow', percent);
    progressBar.setAttribute('aria-valuemin', 0);
    progressBar.setAttribute('aria-valuemax', 100);
    progressBar.textContent = percent + '%';

    progress.classList.add('progress');
    progress.appendChild(progressBar);

    quiz.appendChild(progress);
}

function chooseOption(optionChosen) {
    let answer = document.createElement('div');
    let reason = document.createElement('div');
    let chosenWisely = optionChosen === correctAnswer;
    let optionElements = document.querySelectorAll('.vaihtoehto');

    for(let i = 0; i < 4; i++) {
        if(i === correctAnswer) optionElements[i].classList.add('oikein');
        else if(i === optionChosen) optionElements[i].classList.add('ei-oikein');
        optionElements[i].replaceWith(optionElements[i].cloneNode(true));
    }

    if(chosenWisely) {
        correctAnswers++;
        answer.classList.add('oikein');
        answer.textContent = 'Oikein!';
    }
    else {
        answer.classList.add('ei-oikein');
        answer.textContent = 'Oikea vastaus on: ';
        answer.textContent += optionElements[correctAnswer].textContent + '. ';
    }
    answer.classList.add('perustelu');
    document.querySelector('#visa').appendChild(answer);

    reason.textContent += answers[questionIndex];
    reason.classList.add('perustelu');
    reason.classList.add('oikein');
    document.querySelector('#visa').appendChild(reason);

    document.querySelector('#next').style.display = 'block';
}

function shuffleArray(array) {
    for(let i = 0; i < array.length; i++) {
        let newPosition = randomInteger(0, array.length - 1);
        let a = array[newPosition];
        array[newPosition] = array[i];
        array[i] = a;
    }
    return array;
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}