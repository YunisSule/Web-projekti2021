//position on kohta visassa, correct on montako oikeaa vastausta, quiz, quiz_status ja muut liittyy kysymyksiin.
let position = 0;
let correct = 0;
let quiz, quiz_status, question, choice, choices, choiceA, choiceB, choiceC, choiceD;

//moniulotteinen lista kysymyksistä
let questions = [
    {
        question: "Kuinka monta maanosaa on?",
            a: "5",
            b: "7",
            c: "10",
            d: "4",
        answer: "B",
        explanation: "7, koska maanosia on maailmassa seitsemän, jotka ovat Eurooppa, Aasia, Etelä- ja Pohjois-Amerikka, Etelämanner, Afrikka, Australia."
    },

    {
        question: "Minkä maan pääkaupunki Madrid on?",
            a: "Ruotsin", 
            b: "Saksan",
            c: "Espanjan",
            d: "Ranskan",
        answer: "C",
        explanation: "Espanjan, sillä Saksan pääkaupunki on Berliini, Ruotsin pääkaupunki on Tukholma ja Ranskan pääkaupunki on Pariisi."
    },

    { 
      question: "Kuinka monessa päivässä maa kierää auringon?",
            a: "200:ssa",
            b: "90:ssä",
            c: "150:ssa",
            d: "365:ssä",
        answer: "D",
        explanation: "365, koska kun puhutaan vuodesta on kyse siitä kuinka monessa päivässä maa kiertää auringon ja vuodessa on 365 päivää."
    },

    {
        question: "Mikä maa on pinta-alaltaan maailman pienin valtio?",
            a: "Vatikaani",
            b: "Islanti",
            c: "Monaco",
            d: "Portugali",
        answer: "A",
        explanation: "Vatikaani, koska se on pinta-alaltaan vain huimat 44 hehtaaria (eli noin 440000 m2)."
    },

    {
        question: "Mikä maa on pinta-alaltaan maailman suurin valtio?",
            a: "Yhdysvallat",
            b: "Kanada",
            c: "Kiina",
            d: "Venäjä",
        answer: "D",
        explanation: "Venäjä, sillä se on pinta-alaltaan huimat 17 075 400 neliökilometriä."
    }
];
//olio väärä väärille kysymyksille ja väärien kysymyksien tulostamiseen methodi toString
class Wrong{
    constructor(right, questionNumber){
        this.right = right;
        this.questionNumber = questionNumber;
    }

    toString(){
        return "Kysymykseen: " + questions[this.questionNumber].question + " Oikea vastaus on " + this.right + "<br>";
    }
}
//lista väärille vastauksille syöttötieto on aikaisemmin tehtyä olioluokkaa
let wrongAnswers = [];

function get(x) {
    return document.getElementById(x);
}
//luo kysymykset selaimeen
function myQuiz(){
    quiz = get("quiz");
    quiz.innerHTML = "";
    //jos kohta visassa on suurempi kuin kysymyksien listan pituus (=> visa on suoritettu/kysymykset on käyty läpi) 
    //tulostaa sivulle tulokset visasta, eikä yritä enään tulostaa kysymyksiä listasta
    //kohdista mitä ei ole listassa
    if(position >= questions.length){
        quiz.innerHTML = "<h2>Sait " +correct+" / "+questions.length+" kysymystä oikein</h2>";
        get("testHeader").innerHTML = "Visa suoritettu!<br>";
        //looppaa aikaisemmin tehdyn listan vääristä vastauksista läpi sekä tulostaa väärien vastauksien oikeat vastaukset
        for(let i = 0; i<wrongAnswers.length; i++){
            get("testHeader").innerHTML += wrongAnswers[i].toString() + "<br>";
        }
        //asettaa arvot takaisin alkuun jotta visan voi suorittaa uudestaan
        position = 0;
        correct = 0;
        return false;
    }
    //asettaa tekstin alkuun että mones kysymys on menossa
    get("testHeader").innerHTML = "Kysymys " + (position+1)+ "/" + questions.length + " kysymyksestä";
    //asettaa muuttujat kysymykselle sekä sen vaihtoehdoille esim. choiceA == vastausvaihtoehto a, choiceB == vastausvaihtoehto b... etc.
    question = questions[position].question;
    choiceA = questions[position].a;
    choiceB = questions[position].b;
    choiceC = questions[position].c;
    choiceD = questions[position].d
    //asettaa diviin "quiz" kysymsen sekä sen vaihtoehdot rivien vaihtojen kanssa
    quiz.innerHTML = "<h3>" +question+"</h3>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+choiceA+"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+choiceB+"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+choiceC+"</label><br>";
    quiz.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+choiceD+"</label><br><br>";
    quiz.innerHTML += "<button onclick='checkAnswer()'>Tallenna kysymys</button>";
}
//tarkistaa onko vastaus oikein vai väärin
function checkAnswer(){
    choices = document.getElementsByName("choices");
    //looppaa vaihtoehtojen läpi sekä tarkistaa vastaako valittu vaihtoehto oikeaa vastausta
    for(let i=0;i<choices.length;i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    /*jos valittu vaihtoehto on oikein lisää oikeiden vastausten määrää yhdellä
    muuten luo uuden "väärä" -olion johon tallennetaan mikä kysymys se oli missä oli väärä vastaus, sekä lisää sen listaan
    lopuksi lisää position muuttujaa yhdellä jotta vaihtuu kysymys*/
    if(choice == questions[position].answer){
        correct++;
    }else{
        let wrongAnswer = new Wrong(questions[position].explanation, position);
        wrongAnswers.push(wrongAnswer);
    }

    position++;
    myQuiz();
}
