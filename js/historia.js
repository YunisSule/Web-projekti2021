let questionIndex = 0;
const questions = [
    "Mikä esihistorian kausi edelsi rautakautta?",
    "Ketkä saivat äänestää antiikin Ateenan kansankokouksissa?",
    "Mikä kaupungeista katsotaan kuuluvan Suomen keskiaikaisiin kaupunkeihin?",
    "Ketä pidetään suomen kirjakielen isänä?",
    "Kenet lapsistaan Kustaa Vaasa nimesi Suomen herttuakunnan herttuaksi?"];
const options = [
        ["Pronssikausi", "Kivikausi", "Keskiaika", "Neoliittinen eli keraaminen kausi"],
        ["Miehet", "Naiset", "Orjat", "Metoikit eli Ateenaan muualta muuttaneet"],
        ["Turku", "Helsinki", "Oulu", "Rovaniemi"],
        ["Mikael Agricola", "Martti Luther", "J.V. Snellman", "Aleksis Kivi"],
        ["Juhana", "Eerik", "Katariina", "Kaarle"]];
const answers = [
        "Rautakautta edelsi pronssikausi (n. 1700–500 eaa.).",
        "Äänioikeus oli vain vapailla yli 20-vuotiailla miespuolisilla Ateenan kansalaisilla.",
        "Suomen keskiaikaiset kaupungit on perustettu 1200–1400-luvuilla; muut myöhemmin.",
        "Mikael Agricola (1510–1557) kirjoitti ja käänsi ensimmäiset suomenkieliset kirjat.",
        "Juhana, myöhemmin Juhana III, toimi Suomen herttuana 1556–1563."];

document.querySelector("#next").addEventListener('click', startQuiz);

function startQuiz() {
    document.querySelector("#next").style.display = "none";
    nextQuestion();
}

function nextQuestion() {
    let visa = document.querySelector("#visa");
    document.querySelector("h3").textContent = "Kysymys " + Number(questionIndex + 1) + ": " + questions[questionIndex];
    visa.textContent = "";
    for(let i = 0; i < 4; i++) {
        let element = document.createElement("div");
        element.setAttribute("id", "vaihtoehto");
        element.textContent = options[questionIndex][i];
        visa.appendChild(element);
    }
}