let participants = [];

document.querySelector('#next').addEventListener('click', addName);
document.querySelector('#next').addEventListener('click', nextQuestion);

function addName() {
  let name = document.querySelector('#name').value;

  let participant = { name: name, points: 0 };

  participants.push(participant);

  console.log(participant);
}

function nextQuestion() {
  console.log('seuraava');
}
