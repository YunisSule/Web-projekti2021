// luodaan muuttujat visaa varten
let positive = 0;
let testing, test_status, question, choice, choices, correctOne, choice_A, choice_B, choice_C, choice_D;
let correct = 0;

// lisätään next napille uusi kuuntelija, joka lisää henkilön nimen sivulle h2 elementtiin.
document.querySelector("#next").addEventListener("click", addName)
let quest_name = document.getElementById("form");
let divForName = document.querySelector("#person_name");

function addName() {
  let header_2 = document.createElement("h2");
   header_2.textContent = quest_name.value;
   // lisätään uusi elementti divin sisälle
   divForName.append(header_2);
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
      correctOne: "Vastaukseksi oli väärin! oikea vastaus on moose koska dog on koira, reindeer on poro ja bear on karhu."
    },
  {
      question: "Mikä on mies englanniksi?",
      a: "Women",
      b: "Men",
      c: "Man",
      d:"Woman",
      answer: "C",
      correctOne: "Vastauksesi oli väärin! oikea vastaus on man koska women on naiset, woman on nainen ja men on miehet."
    },
  {
      question: "Mikä on freezer?",
      a: "Jääkaappi",
      b: "Laatikko",
      c: "Kaappi",
      d: "Pakastin",
      answer: "D",
      correctOne: "Vastaukseksi oli väärin! oikea vastaus on pakastin koska jääkaappi on fridge, laatikko on box ja kaappi on cabinet."
    },
  {
      question: "Mitä tarkoittaa sana 'Awesome'?",
      a: "Siistiä",
      b: "Hienoa",
      c: "Mahtavaa",
      d: "Kiva",
      answer: "C",
      correctOne: "Vastaukseksi oli väärin! Oikea vastaus on mahtavaa koska siistiä on cool, hienoa on great ja kiva on nice. "
    },
    {
      question: "Mikä on parrot?",
      a: "Papukaija",
      b: "Joutsen",
      c: "Ankka",
      d:"Pulu",
      answer: "A",
      correctOne: "Vastauksesi oli väärin! Oikea vastaus on papukaija koska joutsen on swan, pulu on pidgeon ja ankka on duck."
    }
  ];

  function get(x) {
    return document.getElementById(x);
    }

    // piilotetaan sivuilta nappi sekä henkilön nimi
    divForName.classList.add("hiding");
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
        // tehdään if lauseke, jossa tulostetaan sivulle visan lopputulos
        if(positive >= questions.length) {
            document.getElementById("testing").innerHTML =  "<h2>Sait " + correct +" / "+questions.length+" oikein</h2>";
            document.getElementById("test_status").innerHTML = "";
            // tehdään if lauseke, jossa annetaan vastaus perustuen käyttäjän saamiin oikeisiin vastauksiin.
            if(correct == questions.length) {
              document.getElementById("feedback").innerHTML = "Hienoa! Sait kaikki kysymykset oikein!";
            }
            else if(correct == 0 || correct == 1 || correct == 2) {
              document.getElementById("feedback").innerHTML = "Voi ei! Testi olisi voinut mennä paremminkin! entä jos kokeilisit uudelleen?"
            }
            else {
              document.getElementById("feedback").innerHTML = "Sait pisteitä ihan hyvin!"
            }

            // piilotetaan lopusta nappi sekä laitetaan visaa tekevän henkilön nimi näkyviin.
            next2.classList.add("hiding");
            divForName.classList.remove("hiding");

            return false;
        }
        
        document.getElementById("test_status").innerHTML = "Kysymys "+[positive+1]+" / "+questions.length;
        next2.classList.add("hiding");
        
        // näytetään vastausvaihtoehdot sivulla ja tulostetaan kysymys näkyviin sivulle.
        question = questions[positive].question;
        choice_A = questions[positive].a;
        choice_B = questions[positive].b;
        choice_C = questions[positive].c;
        choice_D = questions[positive].d;

        document.getElementById("testing").innerHTML = "<h4>"+question+"</h4>";
        
        // tehdään visaan valintavaihtoehdot ja laitetaan ne näkyville.
        document.getElementById("testing").innerHTML += "<label> <input type='radio' id='radioButton1' name='choices' value='A'> "+choice_A+"</label><br>";
        document.getElementById("testing").innerHTML += "<label> <input type='radio' id='radioButton2' name='choices' value='B'> "+choice_B+"</label><br>";
        document.getElementById("testing").innerHTML += "<label> <input type='radio' id='radioButton3' name='choices' value='C'> "+choice_C+"</label><br>";
        document.getElementById("testing").innerHTML += "<label> <input type='radio' id='radioButton4' name='choices' value='D'> "+choice_D+"</label><br>";
        document.getElementById("testing").innerHTML += "<button onclick='showRightAnswer()' id='next3'>Tarkista</button>"
    }
    
    // Tarkistetaan onko käyttäjän vastaus oikein.
    function correctQuestion() {
      
    question_choices = document.getElementsByName("choices");
    for(let i=0; i < question_choices.length; i++){
        if(question_choices[i].checked) {
          choice = question_choices[i].value;
          
          
        }
    }
    }
    function checkAnswer() {
      correctQuestion();
        // jos vastaus on oikein, lisätään correctin määrää.
        if(choice == questions[positive].answer){
          correct++;
          
        }
        choice = "";
        positive++;
        document.getElementById("rightQuestions").innerHTML = "";
        // allQuestion funktio alkaa uudelleen ja näyttää seuraavan kysymyksen
        allQuestions()
       
      }      
     
      function showRightAnswer() {
        //vastauksen perusteella, käyttäjä saa viestin onko vastaus oikein vai väärin.
        next2.classList.remove("hiding");
        correctQuestion();

        if(choice == questions[positive].answer){
          document.getElementById("rightQuestions").innerHTML = "Vastaus oikein!"
        }
        else {
          document.getElementById("rightQuestions").innerHTML = questions[positive].correctOne;
        }

        // piilotetaan tarkista nappi sekä radio buttonit tarkista nappia painaessa, jotta käyttäjä ei voi vaihtaa vastausta.
        next3.classList.add("hiding");
        radioButton1.classList.add("hiding");
        radioButton2.classList.add("hiding");
        radioButton3.classList.add("hiding");
        radioButton4.classList.add("hiding");
       
      }
     