// Numerogeneraattori, jota käytetään tehtävien numeroiden hakuun:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

//korjaa tämä nimi vielä
/*let participantName = "";
if (taskCounter == 0) {
    participantName = document.getElementById("formGroupExampleInput").value;
} */

//Tyhjentää vastauskentän kun sivu päivitetään
document.getElementById("answerValue").value = "";

//Myöhemmin käytettävä laskuri
let taskCounter = 0;

//Tehdään muuttujat, joihin voidaan tallentaa laskujen arvo myöhemmin.
let taskOneAnswer = "";
let taskTwoAnswer = "";
let taskThreeAnswer = "";
let taskFourAnswer = "";
let taskFiveAnswer = "";

//Tehdään muuttujat, johon tallennetaan saiko käyttäjä vastauksen oikein.
let correctOne = 0;
let correctTwo = 0;
let correctThree = 0;
let correctFour = 0;
let correctFive = 0;

//Tehdään tehtäville kysymykset, joita käytetään tämän javascript-tiedoston sisällä.
function taskOneQuestion() {
    //Tehdään neljä erillistä numeroa joita käytetään
    let oneNum = getRndInteger(1,10);
    let twoNum = getRndInteger(1,10);
    let threeNum = getRndInteger(1,10);
    let fourNum = getRndInteger(1,10);

    /* Lasketaan vastaus ja tallennetaan arvo js-tiedoston alkuun tehtyyn muuttujaan. 
    Muuttujien arvot funktion sisällä ei muutu, joten niitä voi käyttää useamman kerran */
    taskOneAnswer = oneNum + twoNum - threeNum + fourNum;

    //Tehdään lasku ja palautetaan se funktiota kysyvälle. 
    let oneQuestion = "<br>" + oneNum + " + " + twoNum + " - " + threeNum + " + " + fourNum;
    return oneQuestion;
}

function taskTwoQuestion() {
    let oneNum = getRndInteger(1,10);
    let twoNum = getRndInteger(1,10);
    let threeNum = getRndInteger(1,10);

    taskTwoAnswer = Math.round(oneNum * twoNum / threeNum);
    let twoQuestion = "<br>" + oneNum + " x " + twoNum + " : " + threeNum + ". Pyöristä vastaus kokonaisluvuksi.";
    return twoQuestion;
}

function taskThreeQuestion() {
    let oneNum = getRndInteger(1,10);
    let twoNum = getRndInteger(1,10);
    let threeNum = getRndInteger(1,10);
    let fourNum = getRndInteger(1,10);

    //Tehdään funktio, joka selvittää laskun tuloksen.
    function taskThreeAnswr() {
        let answer = "";
        if ((oneNum / twoNum) > (threeNum / fourNum)) {
            answer = oneNum + "/" + twoNum; 
        } else if ((oneNum / twoNum) < (threeNum / fourNum)) {
            answer = threeNum + "/" + fourNum;
        } else {
            answer = "equal";
        }
        return answer;
    }
    taskThreeAnswer = taskThreeAnswr();

    let threeQuestion = "<br> Kumpi murtoluvuista on suurempi, " + oneNum + "/" + twoNum + " vai " + threeNum + "/" + fourNum + "?";
    return threeQuestion;
}

function taskFourQuestion() {
    let oneNum = getRndInteger(1,10);
    let twoNum = getRndInteger(1,10);

    taskFourAnswer = oneNum * twoNum / 2 + " cm^2";
    let fourQuestion = "<br> Mikä on kolmion pinta-ala, kun sen korkeus on " + oneNum + " cm, ja kanta on " + twoNum + " cm? Pyöristä vastaus. Laskun kaava: a * b / 2";
    return fourQuestion;
}

function taskFiveQuestion() {
    let oneNum = getRndInteger(1,6);
    let twoNum = getRndInteger(1,6);

    taskFiveAnswer = Math.round(Math.sqrt(Math.pow(oneNum,2) + Math.pow(twoNum,2))) + " cm";
    let fiveQuestion = "<br> Suorakulmaisen kolmion kateetit ovat " + oneNum + " cm ja " + twoNum + 
                       " cm. " + "Laske hypotenuusa ja pyöristä vastaus kokonaisluvuksi. Pythagoraan lause: a^2 + b^2 = c^2";
    return fiveQuestion;
}

//Tehdään tulosviesteille muuttujat.
let answer = "<br> <u>Vastaus:</u> ";
let correct = ". Vastauksesi oli oikein!"
let incorrect = ". Vastauksesi oli väärin."

//Funktiot jotka palautetaan kun henkilö lähettää vastauksen.
function oneAnswer() {
    let answerOne = "";
    if (document.getElementById("answerValue").value == taskOneAnswer) {
        answerOne = correct;
        correctOne = 1;
    } else {
        answerOne = incorrect;
    }
    let questionAnswer = answer + taskOneAnswer + answerOne;
    return questionAnswer;
}

function twoAnswer() {
    let answerTwo = "";
    if (document.getElementById("answerValue").value == taskTwoAnswer) {
        answerTwo = correct;
        correctTwo = 1;
    } else {
        answerTwo = incorrect;
    }
    let questionAnswer = answer + taskTwoAnswer + answerTwo;
    return questionAnswer;
}

function threeAnswer() {
    let answerThree = "";
    if (document.getElementById("answerValue").value == taskThreeAnswer) {
        answerThree = correct;
        correctThree = 1;
    } else {
        answerThree = incorrect;
    }
    let questionAnswer = answer + taskThreeAnswer + answerThree;
    return questionAnswer;
}

function fourAnswer() {
    let answerFour = "";
    if (document.getElementById("answerValue").value == taskFourAnswer) {
        answerFour = correct;
        correctFour = 1;
    } else {
        answerFour = incorrect;
    }
    let questionAnswer = answer + taskFourAnswer + answerFour;
    return questionAnswer;
}

function fiveAnswer() {
    let answerFive = "";
    if (document.getElementById("answerValue").value == taskFiveAnswer) {
        answerFive = correct;
        correctFive = 1;
    } else {
        answerFive = incorrect;
    }
    let questionAnswer = answer + taskFiveAnswer + answerFive;
    return questionAnswer;
}

/*  Tehdään array yllä olevista funktioista, jotta kysymyksen palauttaman arvon saa helposti käyttöön. 
    Vastausten array laitetaan myöhempään*/
let questions = [taskOneQuestion(), taskTwoQuestion(), taskThreeQuestion(), taskFourQuestion(), taskFiveQuestion()];



//Tämä funktio luo kaikki laskut, ja sitä käytetään html-sivulla. 
function tasks() {
    /*  Html-tiedoston "container" luokka on laitettu piilottamaan tehtävät, laitetaan ne näkyviin.
        Samalla piilotetaan "Aloita Tehtävä"-painike & muutetaan tekstiä paragraphin sisällä. */
    document.getElementById("container").className = "container";
    document.getElementById("startTask").className = "d-none";
    document.getElementById("taskExplaination").innerHTML = "Paina nuolta oikeassa alakulmassa " + 
    "jotta saat seuraavan tehtävän näkyviin. Kun kaikki tehtävät on tehty, näet kokonaispistemääräsi.";

    //laitetaan myös ensimmäinen tehtävä esille
    document.getElementById("taskNumber").innerHTML = "Tehtävä " + 1 + ":";
    document.getElementById("question").innerHTML = questions[0];
}

//Seuraavan laskun laittaminen sivulle:
function nextTask() {
    taskCounter++;
    document.getElementById("answer").innerHTML = "";
    document.getElementById("taskNumber").innerHTML = "";
    document.getElementById("question").innerHTML = "";
    document.getElementById("answerValue").value = "";

    if (taskCounter < 5) {
        document.getElementById("taskNumber").innerHTML = "Tehtävä " + (1 + taskCounter) + ":";
        document.getElementById("question").innerHTML = questions[taskCounter];
    } else if (taskCounter == 5) {
        let correctCounter = correctOne + correctTwo + correctThree + correctFour + correctFive;
        document.getElementById("button").className = "d-none";
        document.getElementById("next").className = "d-none";
        document.getElementById("taskExplaination").innerHTML = "Palaute:";
        document.getElementById("final").innerHTML = /* participantName */"<br>" + correctCounter + "/5 tehtävää oikein.";
        if (correctCounter < 3) {
            document.getElementById("final").innerHTML += " Välttävä tulos."
        } else if (correctCounter == 3) {
            document.getElementById("final").innerHTML += " Tyydyttävä tulos."
        } else if (correctCounter == 4) {
            document.getElementById("final").innerHTML += " Hyvä tulos."
        } else {
            document.getElementById("final").innerHTML += " Täydellinen tulos."
        }
    }

    //Lisään vastauskenttään vastauksen loppuosan automaattisesti
    if (taskCounter == 3) {
        document.getElementById("answerValue").value = " cm^2"
    } else if (taskCounter == 4) {
        document.getElementById("answerValue").value = " cm"
    }
}

//Tarkistaa vastauksen kun käyttäjä painaa "lähetä"-painiketta
function returnAnswer() {
    //Laitoin vastausten arrayn tänne, jotta vastausfunktiot tarkistavat syötetyn arvon kun käyttäjä lähettää vastauksen.
    let answers = [oneAnswer(), twoAnswer(), threeAnswer(), fourAnswer(), fiveAnswer()];
    document.getElementById("answer").innerHTML = answers[taskCounter];
}