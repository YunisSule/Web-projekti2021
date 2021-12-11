// luodaan muuttujat visaa varten
let positive = 0;
let testing, test_status, question, choice, choices, choices2, chA, chB, chC, chD;
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
      answer: "B"
    },
  {
      question: "Mikä on mies englanniksi?",
      a: "Women",
      b: "Men",
      c: "Man",
      d:"Wimen",
      answer: "C"
    },
  {
      question: "Mikä on freezer?",
      a: "Jääkaappi",
      b: "Laatikko",
      c: "Kaappi",
      d: "Pakastin",
      answer: "D"
    },
  {
      question: "Mitä tarkoittaa sana 'become'?",
      a: "Tulla jonnekkin",
      b: "Mennä jonnekkin",
      c: "Tulla joksikin",
      d: "Palata",
      answer: "C"
    },
    {
      question: "Mikä on parrot?",
      a: "Papukaija",
      b: "Käki",
      c: "Tikka",
      d:"Pulu",
      answer: "A"
    }
  ];

  let correctAnswers = "Kysymys 1: Oikea vastaus oli B eli hirvi." + "<p>" + "Kysymys 2: Oikea vastaus oli C eli Man." + "<p>" + "Kysymys 3: Oikea vastaus oli D eli pakastin." +"<p>" + "Kysymys 4: Oikea vastaus oli C eli tulla joksikin. " +"<p>"+ " Kysymys 5: Oikea vastaus oli A eli papukaija."
  
  function get(x) {
    return document.getElementById(x);
    }
    rightQuiz.classList.add("hiding");
    divForName.classList.add("hiding");
    // piilotetaan etusivulta nappi, joka vaihtaa seuraavaa visaa.
    next2.classList.add("hiding");
    // funktio, jossa tehdään kysymykset ja tekstit sivulle.
    function allQuestion() {
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
            // tehdään if, jossa annetaan vastaus perustuen käyttäjän saamiin oikeisiin vastauksiin.
            if(correct == questions.length) {
              document.getElementById("feedback").innerHTML =  "Hienoa! Sait kaikki kysymykset oikein!";
            }
            else {
              document.getElementById("rightQuestions").innerHTML = correctAnswers
            }
            // piilotetaan lopusta nappi
            next2.classList.add("hiding");
            divForName.classList.remove("hiding");
            rightQuiz.classList.add("hiding");
            
            // Jos osallistujalla on tietyn verran vastauksia oikein, saa hän palautteen.
           
            if(correct == 1 || correct == 2) {
              document.getElementById("feedback").innerHTML = "Testi olisi voinut mennä paremminkin. Alhaalla näet oikeat vastaukset kysymyksiin."
            }
            if(correct == 3 || correct == 4) {
              document.getElementById("feedback").innerHTML = "Sait pisteitä ihan hyvin! Voit olla ylpeä itsestäsi! Alta näet oikeat vastaukset."
            }

            
            return false;
        }
        
        document.getElementById("test_status").innerHTML = "Kysymys "+[positive+1]+" / "+questions.length;
        // näyttää vastausvaihtoehdot sivulla
        question = questions[positive].question;

        chA = questions[positive].a;
        chB = questions[positive].b;
        chC = questions[positive].c;
        chD = questions[positive].d;

        // laitetaan sivulle kysymys näkyviin
        document.getElementById("testing").innerHTML = "<h3>"+question+"</h3>";
        
        // tehdään visaan valintavaihtoehdot ja laitetaan ne näkyville.
        document.getElementById("testing").innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
        document.getElementById("testing").innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
        document.getElementById("testing").innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
        document.getElementById("testing").innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br>";
        rightQuiz.classList.remove("hiding");
    }

    
    // funktio, jossa tarkastetaan onko vastaus oikein
    
    function checkAnswer(){
        choices = document.getElementsByName("choices");
        for(let i=0; i < choices.length; i++){
            if(choices[i].checked) {
              choice = choices[i].value;
              
            }
        }
        // jos vastaus on oikein, lisätään correctin määrää.
        if(choice == questions[positive].answer){
          correct++;
          
        }
        choice = "";
        positive++;
        document.getElementById("feedback").innerHTML = "";
        // allQuestion funktio alkaa uudelleen ja näyttää seuraavan kysymyksen
        allQuestion();
      }      

      function rightAnswer() {
        // tehdään uusi samanlainen for looppi, jossa käydään oikea vastaus läpi.
        choices2 = document.getElementsByName("choices");
        for(let i=0; i < choices2.length; i++){
            if(choices2[i].checked) {
              choice = choices2[i].value;
              
            }
        }
        // vastauksen perusteella, käyttäjä saa viestin onko vastaus oikein vai väärin.
        if(choice == questions[positive].answer){
          document.getElementById("feedback").innerHTML = "vastaus oli oikein!"
         
        }
        else {
          document.getElementById("feedback").innerHTML = "vastaus oli väärin"
      
        }
        
      }