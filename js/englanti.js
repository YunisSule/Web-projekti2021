// luodaan muuttujat visaa varten
let pos = 0;
let testing, test_status, question, choice, choices, chA, chB, chC, chD;
let correct = 0;

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
      a: "Man",
      b: "Men",
      c: "Women",
      d:"Wimen",
      answer: "A"
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
      a: "Käki",
      b: "Papukaija",
      c: "Tikka",
      d:"Pulu",
      answer: "B"
    }
  ];
    
  function get(x) {
    return document.getElementById(x);
    }
   
    // funktio, jossa tehdään kysymykset ja tekstit sivulle.
    function allQuestion() {
      form.classList.add("hiding");
      form2.classList.add("hiding");
        testing = get("testing");
        if(pos >= questions.length) {
            document.getElementById("testing").innerHTML = "<h2>Sait " + correct +" / "+questions.length+" oikein</h2>";
            document.getElementById("test_status").innerHTML = "Testi valmis!";
            next.classList.add("hiding");
            // Jos osallistujalla on tietyn verran vastauksia oikein, saa hän palautteen.
            if(correct == 5) {
              document.getElementById("test_status").innerHTML = "Hienoa! Sait kaikki kysymykset oikein!"
            }
            if(correct == 1 || correct == 2) {
              document.getElementById("test_status").innerHTML = "Testi olisi voinut mennä paremminkin. Kokeile uudelleen?"
            }
            if(correct == 3 || correct == 4) {
              document.getElementById("test_status").innerHTML = "Sait pisteitä ihan hyvin! Voit olla ylpeä itsestäsi!"
            }

            pos = 0;
            correct = 0;
            return false;
        }
        document.getElementById("test_status").innerHTML = "Kysymys "+[pos+1]+" / "+questions.length;

        question = questions[pos].question;
        chA = questions[pos].a;
        chB = questions[pos].b;
        chC = questions[pos].c;
        chD = questions[pos].d;

        document.getElementById("testing").innerHTML = "<h3>"+question+"</h3>";
        // tehdään visaan valintavaihtoehdot
        testing.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
        testing.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
        testing.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
        testing.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br>";
        testing.innerHTML += "<button onclick='checkanswer()'"
        
    }
    // funktio, jossa tarkastetaan onko vastaus oikein

    function checkAnswer(){
        choices = document.getElementsByName("choices");
        for(let i=0; i < choices.length; i++){
            if(choices[i].checked) {
              choice = choices[i].value;
            }
        }
        if(choice == questions[pos].answer) {
            correct++;
        }
        pos++;

        allQuestion();
    }
    
  