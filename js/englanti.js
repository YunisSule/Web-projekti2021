/* Jenni Annala
Used this page as example https://www.codemahal.com/video/javascript-quiz-tutorial/ */
let positive = 0;
let testing, test_status, question, choice, choices, correctOne, choice_A, choice_B, choice_C, choice_D;
let correct = 0;

document.querySelector("#next").addEventListener("click", addName)
let quest_name = document.getElementById("form");
let divForName = document.querySelector("#person_name");

// Function where we add participants name in div element at the end of quiz.
function addName() {
    let header_2 = document.createElement("h2");
    header_2.textContent = quest_name.value;
    divForName.append(header_2);
}
// Questions and answers.
let questions = [
    {
        question: "Mikä on hirvi Englanniksi?",
        a: "Dog",
        b: "Moose",
        c: "Reindeer",
        d: "Bear",
        answer: "B",
        correctOne: "Vastaukseksi oli väärin! oikea vastaus on moose koska dog on koira, reindeer on poro ja bear on karhu."
      },
    {
        question: "Mikä on mies Englanniksi?",
        a: "Women",
        b: "Men",
        c: "Man",
        d: "Woman",
        answer: "C",
        correctOne: "Vastauksesi oli väärin! oikea vastaus on man koska women on naiset, woman on nainen ja men on miehet."
      },
    {
        question: "Mikä on suomeksi Freezer?",
        a: "Jääkaappi",
        b: "Laatikko",
        c: "Kaappi",
        d: "Pakastin",
        answer: "D",
        correctOne: "Vastaukseksi oli väärin! oikea vastaus on pakastin koska jääkaappi on fridge, laatikko on box ja kaappi on cabinet."
     },
    {
        question: "Mitä tarkoittaa sana Awesome?",
        a: "Siistiä",
        b: "Hienoa",
        c: "Mahtavaa",
        d: "Kiva",
        answer: "C",
        correctOne: "Vastaukseksi oli väärin! Oikea vastaus on mahtavaa koska siistiä on cool, hienoa on great ja kiva on nice. "
      },
    {
        question: "Mikä on Parrot?",
        a: "Papukaija",
        b: "Joutsen",
        c: "Ankka",
        d: "Pulu",
        answer: "A",
        correctOne: "Vastauksesi oli väärin! Oikea vastaus on papukaija koska joutsen on swan, pulu on pidgeon ja ankka on duck."
      }
    ];

function get(x) {
    return document.getElementById(x);
}

divForName.classList.add("hiding");
forwardButton.classList.add("hiding");

/* Prints right answers amount, questions and correct answers.
Gives feedback for participant.
Creates radio buttons for choices. */
function allQuestions() {
    form.classList.add("hiding");
    form2.classList.add("hiding");
    next.classList.add("hiding");
    forwardButton.classList.remove("hiding");

    testing = get("testing");
    if (positive >= questions.length) {
        document.getElementById("testing").innerHTML = "<h2>Sait " + correct + " / " + questions.length + " oikein</h2>";
        document.getElementById("test_status").innerHTML = "";
       
        if (correct == questions.length) {
            document.getElementById("feedback").innerHTML = "Hienoa! Sait kaikki kysymykset oikein!";
        } else if (correct == 0 || correct == 1 || correct == 2) {
            document.getElementById("feedback").innerHTML = "Voi ei! Testi olisi voinut mennä paremminkin! entä jos kokeilisit uudelleen?"
        } else {
            document.getElementById("feedback").innerHTML = "Sait pisteitä ihan hyvin!"
        }
        forwardButton.classList.add("hiding");
        divForName.classList.remove("hiding");

        return false;
    }

    document.getElementById("test_status").innerHTML = "Kysymys " + [positive + 1] + " / " + questions.length;
    forwardButton.classList.add("hiding");

    question = questions[positive].question;
    choice_A = questions[positive].a;
    choice_B = questions[positive].b;
    choice_C = questions[positive].c;
    choice_D = questions[positive].d;

    document.getElementById("testing").innerHTML = "<h4>" + question + "</h4>";
    document.getElementById("testing").innerHTML += "<label> <input type='radio' id='radioButton1' name='choices' value='A'> " + choice_A + "</label><br>";
    document.getElementById("testing").innerHTML += "<label> <input type='radio' id='radioButton2' name='choices' value='B'> " + choice_B + "</label><br>";
    document.getElementById("testing").innerHTML += "<label> <input type='radio' id='radioButton3' name='choices' value='C'> " + choice_C + "</label><br>";
    document.getElementById("testing").innerHTML += "<label> <input type='radio' id='radioButton4' name='choices' value='D'> " + choice_D + "</label><br>";
    document.getElementById("testing").innerHTML += "<button onclick='showRightAnswer()' id='checkingButton'>Tarkista</button>"

}

// Checks if participants answer is correct.
function correctQuestion() {
    question_choices = document.getElementsByName("choices");
    for (let i = 0; i < question_choices.length; i++) {
        if (question_choices[i].checked) {
            choice = question_choices[i].value;


        }
    }
}
// Checks answers and adds correct answers amount.
function checkAnswer() {
    correctQuestion();
    
    if (choice == questions[positive].answer) {
        correct++;

    }
    choice = "";
    positive++;
    document.getElementById("rightQuestions").innerHTML = "";
    allQuestions()

}
//function that gives feedback for participant and hides radio buttons and check answer -button.
function showRightAnswer() {
    forwardButton.classList.remove("hiding");
    correctQuestion();

    if (choice == questions[positive].answer) {
        document.getElementById("rightQuestions").innerHTML = "Vastaus oikein!"
    } else {
        document.getElementById("rightQuestions").innerHTML = questions[positive].correctOne;
    }

    checkingButton.classList.add("hiding");
    radioButton1.classList.add("hiding");
    radioButton2.classList.add("hiding");
    radioButton3.classList.add("hiding");
    radioButton4.classList.add("hiding");
}
     