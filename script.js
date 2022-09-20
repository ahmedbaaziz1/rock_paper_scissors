const optionButtons = document.querySelectorAll("[data-option]");
const finalColumn = document.querySelector("[data-final-column]");
const yourCounter = document.querySelector("[data-your-score]");
const computerCounter = document.querySelector("[data-computer-score]");
const resetButton = document.getElementsByClassName("reset");
const OPTIONS = [
  {
    name: "Rock",
    emoji: "🧱",
    power: "Scissors",
  },
  {
    name: "Paper",
    emoji: "📃",
    power: "Rock",
  },
  {
    name: "Scissors",
    emoji: "✂️",
    power: "Paper",
  },
];
optionButtons.forEach((optionButton) => {
  optionButton.addEventListener("click", (e) => {
    const optionName = optionButton.dataset.option;
    const choise = OPTIONS.find((choise) => choise.name === optionName);
    makeOption(choise);
  });
});

function makeOption(option) {
  const computerOption = randomOption();
  const youWinner = winnerRound(option, computerOption);
  const computerWinner = winnerRound(computerOption, option);
  roundResult(computerOption, computerWinner);
  roundResult(option, youWinner);
  if (youWinner) score(yourCounter);
  if (computerWinner) score(computerCounter);
}

function score(score) {
  score.innerText = parseInt(score.innerText) + 1;
}

function roundResult(option, winner) {
  const div = document.createElement("div");
  div.innerText = option.emoji;
  div.classList.add("results-section");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}

function winnerRound(yourChoise, computerChoise) {
  return yourChoise.power === computerChoise.name;
}

function randomOption() {
  const randomIndex = Math.floor(Math.random() * OPTIONS.length);
  return OPTIONS[randomIndex];
}

function reload() {
  reload = location.reload();
}
resetButton.addEventListener("click", reload, false);
