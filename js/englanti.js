// luodaan muuttujat visaa varten
let positive = 0;
let testing, test_status, question, choice, choices, correctOne, chA, chB, chC, chD;
let correct = 0;

// lisätään next napille uusi kuuntelija, joka lisää henkilön nimen sivulle h2 elementtiin.
document.querySelector("#next").addEventListener("click", addName)
let pname = document.getElementById("form");
let divForName = document.querySelector("#pname");

function addName() {
  let h2 = document.createElement("h2");
   h2.textContent = pname.value;
   // lisätään uusi elementti divin sisälle
   divForName.append(h2);
}

// tehdään kysymykset ja vastaukset visaan
let questions = [
  {
      question: "Mikä on hirvi englanniksi?",
      a: "Dog",
      b: "Moose",
      c: "Reindeer",
      d: "Bear",
      answer: "B",
      correctOne: "Vastaukseksi oli väärin! oikea vastaus on B eli Moose"
    },
  {
      question: "Mikä on mies englanniksi?",
      a: "Women",
      b: "Men",
      c: "Man",
      d:"Wimen",
      answer: "C",
      correctOne: "Vastauksesi oli väärin! oikea vastaus on C eli Man"
    },
  {
      question: "Mikä on freezer?",
      a: "Jääkaappi",
      b: "Laatikko",
      c: "Kaappi",
      d: "Pakastin",
      answer: "D",
      correctOne: "Vastaukseksi oli väärin! oikea vastaus on D eli Pakastin"
    },
  {
      question: "Mitä tarkoittaa sana 'become'?",
      a: "Tulla jonnekkin",
      b: "Mennä jonnekkin",
      c: "Tulla joksikin",
      d: "Palata",
      answer: "C",
      correctOne: "Vastaukseksi oli väärin! Oikea vastaus on C eli tulla joksikin"
    },
    {
      question: "Mikä on parrot?",
      a: "Papukaija",
      b: "Käki",
      c: "Tikka",
      d:"Pulu",
      answer: "A",
      correctOne: "Vastauksesi oli väärin! Oikea vastaus on A eli papukaija"
    }
  ];

  function get(x) {
    return document.getElementById(x);
    }

    
    divForName.classList.add("hiding");
    // piilotetaan etusivulta nappi, joka vaihtaa seuraavaa visaa.
    next2.classList.add("hiding");

    // funktio, jossa tehdään kysymykset ja tekstit sivulle.
    function allQuestions() {
      
      // kun visa on alkanut, piilotetaan etusivun nimipalkki sekä aloitusnappi.
      form.classList.add("hiding");
      form2.classList.add("hiding");
      next.classList.add("hiding");

      // tuodaan visan kysymyksiä vaihtava nappi takaisin näkyville, kun visa on alkanut
      next2.classList.remove("hiding");
    
        testing = get("testing");
        if(positive >= questions.length) {
            document.getElementById("testing").innerHTML = "<h2>Sait " + correct +" / "+questions.length+" oikein</h2>";
            document.getElementById("test_status").innerHTML = "";

            // tehdään if lauseke, jossa annetaan vastaus perustuen käyttäjän saamiin oikeisiin vastauksiin.
            if(correct == questions.length) {
              document.getElementById("feedback").innerHTML =  "Hienoa! Sait kaikki kysymykset oikein!";
            }
            else if(correct == 1 || correct == 2) {
              document.getElementById("feedback").innerHTML = "Voi ei! Testi olisi voinut mennä paremminkin!"
            }
            else {
              document.getElementById("feedback").innerHTML = "Sait pisteitä ihan hyvin! Voit olla ylpeä itsestäsi!"
            }

            // piilotetaan lopusta nappi
            next2.classList.add("hiding");
            divForName.classList.remove("hiding");

            return false;
        }
        
        document.getElementById("test_status").innerHTML = "Kysymys "+[positive+1]+" / "+questions.length;
        // näyttää vastausvaihtoehdot sivulla
        next2.classList.add("hiding");

        question = questions[positive].question;

        chA = questions[positive].a;
        chB = questions[positive].b;
        chC = questions[positive].c;
        chD = questions[positive].d;

        // laitetaan sivulle kysymys näkyviin
        document.getElementById("testing").innerHTML = "<h3>"+question+"</h3>";
        
        // tehdään visaan valintavaihtoehdot ja laitetaan ne näkyville.
        document.getElementById("testing").innerHTML += "<label> <input type='radio' id='radioButton1' name='choices' value='A'> "+chA+"</label><br>";
        document.getElementById("testing").innerHTML += "<label> <input type='radio' id='radioButton2' name='choices' value='B'> "+chB+"</label><br>";
        document.getElementById("testing").innerHTML += "<label> <input type='radio' id='radioButton3' name='choices' value='C'> "+chC+"</label><br>";
        document.getElementById("testing").innerHTML += "<label> <input type='radio' id='radioButton4' name='choices' value='D'> "+chD+"</label><br>";
        document.getElementById("testing").innerHTML += "<button onclick='rightAnswer()' id='next3'>Tarkista</button>"
    }
    
    // Tarkistetaan onko käyttäjän vastaus oikein.
    function correctQuestion() {
    choices = document.getElementsByName("choices");
    for(let i=0; i < choices.length; i++){
        if(choices[i].checked) {
          choice = choices[i].value;
          
          
        }
    }
    }
    function checkAnswer(){

      correctQuestion();

        // jos vastaus on oikein, lisätään correctin määrää.
        if(choice == questions[positive].answer){
          correct++;
          
        }
        choice = "";
        positive++;
        document.getElementById("feedback").innerHTML = "";
        // allQuestion funktio alkaa uudelleen ja näyttää seuraavan kysymyksen
        allQuestions()
       
      }      
     
      function rightAnswer() {
        //vastauksen perusteella, käyttäjä saa viestin onko vastaus oikein vai väärin.
        
        next2.classList.remove("hiding");
        correctQuestion();

        if(choice == questions[positive].answer){
          document.getElementById("feedback").innerHTML = "Vastaus oikein!"
        }
        else {
          document.getElementById("feedback").innerHTML = questions[positive].correctOne;
        }
        // piilotetaan tarkista nappi sekä radio buttonit tarkista nappia painaessa, jotta käyttäjä ei voi vaihtaa vastausta.
        next3.classList.add("hiding");
        radioButton1.classList.add("hiding");
        radioButton2.classList.add("hiding");
        radioButton3.classList.add("hiding");
        radioButton4.classList.add("hiding");
       
      }
     