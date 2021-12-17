let questions = [
  {
    question: 'Mitä seuraavista väitteistä voi päätellä?',
    claims: ['Kaikki tontut pitävät joulusta.', 'Vili on tonttu.'],
    answers: [
      { answer: 'Vili pitää joulusta.', correct: true },
      { answer: 'Vili ei pidä joulusta.', correct: false },
      { answer: 'Ei voi päätellä kumpaakaan.', correct: false }
    ]
  },
  {
    question: 'Mitä seuraavista väitteistä voi päätellä?',
    claims: ['Kaikki öllöäklöt ovat ällöpellejä.', 'Joku öllöäklö on äiti'],
    answers: [
      { answer: 'Minun äitini on öllöäklö.', correct: false },
      { answer: 'Joku ällöpelle on äiti.', correct: true },
      { answer: 'Ei voi päätellä kumpaakaan.', correct: false }
    ]
  },
  {
    question: 'Mitä seuraavista väitteistä voi päätellä?',
    claims: ['Jos Miisa on kiltti tai Liisa on vitsikäs, äiti on iloinen.', 'Miisa ei ole kiltti tai äiti ei ole iloinen.'],
    answers: [
      { answer: 'Liisa on vitsikäs.', correct: false },
      { answer: 'Liisa ei ole vitsikäs.', correct: false },
      { answer: 'Ei voi päätellä kumpaakaan.', correct: true }
    ]
  },
  {
    question: 'Mitä seuraavista väitteistä voi päätellä?',
    claims: ['Kaikilla linnuilla on siivet.', 'Vain siivekkäät osaavat lentää.', 'Pingviini on lintu, mutta se ei osaa lentää.'],
    answers: [
      { answer: 'Pingviini ei ole siivekäs.', correct: false },
      { answer: 'Pingviinillä on siivet.', correct: true },
      { answer: 'Ei voi päätellä kumpaakaan.', correct: false }
    ]
  },
  {
    question: 'Mitä seuraavista väitteistä voi päätellä?',
    claims: ['Jos Mirkku on käynyt koulua, Markku osaa lukea.', 'Jos Markku ei osaa lukea, hän osaa laskea.', 'Mirkku ei ole käynyt koulua.'],
    answers: [
      { answer: 'Markku ei osaa laskea.', correct: false },
      { answer: 'Markku osaa laskea.', correct: false },
      { answer: 'Ei voi päätellä kumpaakaan.', correct: true }
    ]
  }
];
let participant = '';
let points = 0;
let i = 0;

document.getElementById('start-button').addEventListener('click', startQuiz);
document.getElementById('restart').addEventListener('click', () => location.reload());
let claimsList = document.getElementById('claims');
let answerButtons = document.getElementById('answers');

// START QUIZ
function startQuiz() {
  if (document.querySelector('#name').value) {
    participant = document.querySelector('#name').value;
  } else {
    participant = 'Nimetön tyyppi';
  }

  document.getElementById('pname').classList = 'hide-element';
  document.getElementById('start-button').classList = 'hide-element';
  nextQuestion();
}

// NEXT QUESTION
function nextQuestion() {
  resetState();
  document.getElementById('questions').classList.remove('hide-element');
  document.getElementById('answers').classList.remove('hide-element');

  if (i > 4) {
    feedback();
    document.getElementById('restart').classList.remove('hide-element');
    document.getElementById('answers').classList = 'hide-element';
  } else {
    let claims = questions[i].claims;
    let answers = questions[i].answers;
    document.getElementById('heading').textContent = `Kysymys: ${i + 1}`;
    document.getElementById('text').textContent = questions[i].question;
    document.getElementById('text').classList = 'text-center';

    // CLAIMS
    claims.forEach((element) => {
      let claim = document.createElement('li');
      claim.innerText = element;
      claimsList.appendChild(claim);
    });

    // ANSWERS

    answers.forEach((element) => {
      let answer = document.createElement('button');
      answer.setAttribute('class', 'anwbtn btn btn-outline-primary .btn-block');
      answer.setAttribute('type', 'button');
      answer.addEventListener('click', () => {
        checkAnswer(element.correct);
        nextQuestion();
      });
      answer.innerText = element.answer;
      answerButtons.appendChild(answer);
    });

    i++;
  }
}

// RESET CLAIMS AND ANSWERS

function resetState() {
  while (claimsList.firstChild) {
    claimsList.removeChild(claimsList.firstChild);
  }
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// CHECK IF ANSWER IS CORRECT

function checkAnswer(param) {
  if (param) {
    points = points + 1;
  }
}

// GIVE FEEDBACK

function feedback() {
  document.getElementById('questions').classList = 'hide-element';
  document.getElementById('heading').textContent = 'Palautetta suorituksesta';

  if (points === 0) {
    document.getElementById('text').textContent = `${participant}, sait ${points} pistettä. Suunta on vain ylöspäin!`;
  } else if (points < 3) {
    document.getElementById('text').textContent = `${participant}, sait ${points} pistettä. Luethan tehtävät huolellisemmin seuraavalla kerralla.`;
  } else if (points > 3 && points < 5) {
    document.getElementById('text').textContent = `Hineoa ${participant}! Sait ${points} pistettä. Pohdi vastausvaihtoehtoja vielä vähän tarkemmin niin saat varmasti täidet pisteet!`;
  } else if (points === 5) {
    document.getElementById('text').textContent = `Mahtavaa ${participant}! sait täydet ${points} pistettä!`;
  }
}
