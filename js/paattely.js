let participants = [];
let tasks = [
  {
    task: 'Mitä seuraavista väitteistä voi päätellä?',
    claims: {
      c1: 'Kaikki tontut pitävät joulusta.',
      c2: 'Vili on tonttu.'
    },
    answers: {
      a1: 'Vili pitää joulusta.',
      a2: 'Vili ei pidä joulusta.',
      a3: 'Ei voi päätellä kumpaakaan.'
    },
    correctAnswer: 'Vili pitää joulusta'
  },
  {
    task: 'Mitä seuraavista väitteistä voi päätellä?',
    claims: {
      c1: 'Kaikki öllöäklöt ovat ällöpellejä.',
      c2: 'Joku öllöäklö on äiti'
    },
    answers: {
      a1: 'Minun äitini on öllöäklö.',
      a2: 'Joku ällöpelle on äiti.',
      a3: 'Ei voi päätellä kumpaakaan.'
    },
    correctAnswer: 'Joku ällöpelle on äiti.'
  },
  {
    task: 'Mitä seuraavista väitteistä voi päätellä?',
    claims: {
      c1: 'Jos Miisa on kiltti tai Liisa on vitsikäs, äiti on iloinen.',
      c2: 'Miisa ei ole kiltti tai äiti ei ole iloinen.'
    },
    answers: {
      a1: 'Liisa on vitsikäs.',
      a2: 'Liisa ei ole vitsikäs.',
      a3: 'Ei voi päätellä kumpaakaan.'
    },
    correctAnswer: 'Ei voi päätellä kumpaakaan.'
  },
  {
    task: 'Mitä seuraavista väitteistä voi päätellä?',
    claims: {
      c1: 'Kaikilla linnuilla on siivet.',
      c2: 'Vain siivekkäät osaavat lentää.',
      c3: 'Pingviini on lintu, mutta se ei osaa lentää.'
    },
    answers: {
      a1: 'Pingviini ei ole siivekäs.',
      a2: 'Pingviinillä on siivet.',
      a3: 'Ei voi päätellä kumpaakaan.'
    },
    correctAnswer: 'Pingviinillä on siivet.'
  },
  {
    task: 'Mitä seuraavista väitteistä voi päätellä?',
    claims: {
      c1: 'Jos Mirkku on käynyt koulua, Markku osaa lukea.',
      c2: 'Jos Markku ei osaa lukea, hän osaa laskea.',
      c3: 'Mirkku ei ole käynyt koulua.'
    },
    answers: {
      a1: 'Markku ei osaa laskea.',
      a2: 'Markku osaa laskea.',
      a3: 'Ei voi päätellä kumpaakaan.'
    },
    correctAnswer: 'Ei voi päätellä kumpaakaan.'
  }
];
let i = 0;

let c1 = document.createElement('li');
let c2 = document.createElement('li');
let c3 = document.createElement('li');
let a1 = document.createElement('li');
let a2 = document.createElement('li');
let a3 = document.createElement('li');
let radioL1 = document.createElement('label');
let radioL2 = document.createElement('label');
let radioL3 = document.createElement('label');
let radio1 = document.createElement('input');
let radio2 = document.createElement('input');
let radio3 = document.createElement('input');

document.querySelector('#next').addEventListener('click', addName);
document.querySelector('#next').addEventListener('click', nextQuestion);

/* ADD NAME AND POINT COINT*/

function addName() {
  let name = document.querySelector('#name').value;

  let participant = { name: name, points: 0 };

  participants.push(participant);

  console.log(participant);
}

function nextQuestion() {
  document.querySelector('#pname').classList = 'hideElement';

  if (i > 4) {
    document.querySelector('#heading').textContent = 'Palautetta suorituksesta';
    document.querySelector('#text').textContent = 'Hyvää palautetta, jos pisteet yli 3. Ihan ok suoritus, jos pisteet 3. Olisi voinut mennä paremmin, jos pisteet alle 3 tms.';

    document.querySelector('#claims').classList = 'hideElement';
    document.querySelector('#answers').classList = 'hideElement';
    document.querySelector('#next').classList = 'hideElement';
  } else {
    let claims = tasks[i].claims;
    let answers = tasks[i].answers;

    //QUESTION

    document.querySelector('#heading').textContent = `Kysymys: ${i + 1}`;
    document.querySelector('#text').textContent = tasks[i].task;

    // CLAIMS

    c1.innerText = claims.c1;
    c2.innerText = claims.c2;
    if (claims.c3) {
      c3.innerText = claims.c3;
      document.querySelector('#claims').append(c1, c2, c3);
    } else {
      document.querySelector('#claims').append(c1, c2);
    }

    //ANSWERS

    radio1.setAttribute('type', 'radio');
    radio2.setAttribute('type', 'radio');
    radio3.setAttribute('type', 'radio');
    radio1.setAttribute('class', 'form-check-input');
    radio2.setAttribute('class', 'form-check-input');
    radio3.setAttribute('class', 'form-check-input');
    radio1.setAttribute('id', 'flexRadioDefault1');
    radio2.setAttribute('id', 'flexRadioDefault2');
    radio3.setAttribute('id', 'flexRadioDefault3');
    radio1.setAttribute('name', 'flexRadioDefault');
    radio2.setAttribute('name', 'flexRadioDefault');
    radio3.setAttribute('name', 'flexRadioDefault');

    radioL1.setAttribute('class', 'form-check-label');
    radioL2.setAttribute('class', 'form-check-label');
    radioL3.setAttribute('class', 'form-check-label');

    radioL1.innerText = answers.a1;
    radioL2.innerText = answers.a2;
    radioL3.innerText = answers.a3;

    a1.append(radio1, radioL1);
    a2.append(radio2, radioL2);
    a3.append(radio3, radioL3);

    document.querySelector('#answers').append(a1, a2, a3);
    console.log(i);

    i++;
  }
}
