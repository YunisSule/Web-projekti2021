//Kentät tyhjennetään kun sivu päivitetään:
document.getElementById("taskOne").value = "";
document.getElementById("taskTwo").value = "";
document.getElementById("taskThree").value = "";
document.getElementById("taskFour").value = "";
document.getElementById("taskFive").value = "";

// Numerogeneraattori, jota käytetään tehtävien numeroiden hakuun:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

//Tehdään muuttujat, joihin voidaan tallentaa laskujen arvo myöhemmin.
let taskOneAnswer = "";
let taskTwoAnswer = "";
let taskThreeAnswer = "";
let taskFourAnswer = "";
let taskFiveAnswer = "";

//Tehdään tehtäville kysymykset, joita käytetään tämän javascript-tiedoston sisällä.
function taskOneQuestion() {
    //Tehdään neljä erillistä numeroa joita käytetään
    let oneNum = getRndInteger(1,10);
    let twoNum = getRndInteger(1,10);
    let threeNum = getRndInteger(1,10);
    let fourNum = getRndInteger(1,10);

    //Lasketaan vastaus ja tallennetaan arvo js-tiedoston alkuun tehtyyn muuttujaan.
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

    taskFourAnswer = oneNum * twoNum / 2 + " cm<sup>2</sup>";
    let fourQuestion = "<br> Mikä on kolmion pinta-ala, kun sen korkeus on " + oneNum + " cm, ja kanta on " + twoNum + " cm?";
    return fourQuestion;
}

function taskFiveQuestion() {
    let oneNum = getRndInteger(1,10);
    let twoNum = getRndInteger(1,10);

    taskFiveAnswer = Math.round(Math.sqrt(Math.pow(oneNum,2) + Math.pow(twoNum,2))) + " cm";
    let fiveQuestion = "<br> Suorakulmaisen kolmion kateetit ovat " + oneNum + " cm ja " + twoNum + 
                       " cm. Laske hypotenuusa ja pyöristä vastaus kokonaisluvuksi.";
    return fiveQuestion;
}

//Tämä funktio luo kaikki laskut, ja sitä käytetään html-sivulla. 
function tasks() {
    /*  Html-tiedoston "container" luokka on laitettu piilottamaan tehtävät, laitetaan ne näkyviin.
        Samalla piilotetaan "Aloita Tehtävä"-painike & muutetaan tekstiä paragraphin sisällä. */
    document.getElementById("container").className = "container";
    document.getElementById("startTask").className = "d-none";
    document.getElementById("taskExplaination").innerHTML = "Kun olet tehnyt yhden tehtävän, paina 'Valmis'-painiketta, " + 
    "jotta näet saamasi pisteet. Kun kaikki tehtävät on tehty, näet kokonaispistemääräsi.";

    //Laskujen laittaminen sivulle:
    document.getElementById("taskOneQuestion").innerHTML = taskOneQuestion();
    document.getElementById("taskTwoQuestion").innerHTML = taskTwoQuestion();
    document.getElementById("taskThreeQuestion").innerHTML = taskThreeQuestion();
    document.getElementById("taskFourQuestion").innerHTML = taskFourQuestion();
    document.getElementById("taskFiveQuestion").innerHTML = taskFiveQuestion();
}

//Tehdään tulosviesteille muuttujat.
let answer = "<br> <u>Vastaus:</u> ";
let correct = ". Vastauksesi oli oikein!"
let incorrect = ". Vastauksesi oli väärin."

//Funktiot jotka palautetaan kun henkilö lähettää vastauksen.
function oneAnswer() {
    let answerOne = "";
    if (document.getElementById("taskOne").value == taskOneAnswer) {
        answerOne = correct;
    } else {
        answerOne = incorrect;
    }
    document.getElementById("taskOneResult").innerHTML = answer + taskOneAnswer + answerOne;
}

function twoAnswer() {
    let answerTwo = "";
    if (document.getElementById("taskTwo").value == taskTwoAnswer) {
        answerTwo = correct;
    } else {
        answerTwo = incorrect;
    }
    document.getElementById("taskTwoResult").innerHTML = answer + taskTwoAnswer + answerTwo;
}

function threeAnswer() {
    let answerThree = "";
    if (document.getElementById("taskThree").value == taskThreeAnswer) {
        answerThree = correct;
    } else {
        answerThree = incorrect;
    }
    document.getElementById("taskThreeResult").innerHTML = answer + taskThreeAnswer + answerThree;
}

function fourAnswer() {
    let answerFour = "";
    if (document.getElementById("taskFour").value == taskFourAnswer) {
        answerFour = correct;
    } else {
        answerFour = incorrect;
    }
    document.getElementById("taskFourResult").innerHTML = answer + taskFourAnswer + answerFour;
}

function fiveAnswer() {
    let answerFive = "";
    if (document.getElementById("taskFive").value == taskFiveAnswer) {
        answerFive = correct;
    } else {
        answerFive = incorrect;
    }
    document.getElementById("taskFiveResult").innerHTML = answer + taskFiveAnswer + answerFive;
}