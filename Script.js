// Initialize scores by checking session storage.
// If nothing is saved yet, it defaults to 0. It will reset when the tab closes.
let userScore = parseInt(sessionStorage.getItem("userScore")) || 0;
let compScore = parseInt(sessionStorage.getItem("compScore")) || 0;

// Update the visual scoreboard as soon as the page loads
document.getElementById("user-score").innerText = userScore;
document.getElementById("comp-score").innerText = compScore;

// Main Game Function
function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  // Generate computer choice randomly (0, 1, or 2)
  const compChoice = choices[Math.floor(Math.random() * 3)];

  const resultMessage = document.getElementById("result-message");
  const emojis = { rock: "✊", paper: "✋", scissors: "✌️" };

  // Logic to determine the winner
  if (userChoice === compChoice) {
    resultMessage.innerHTML = `<span class="draw">It's a Tie!</span> You both chose ${emojis[userChoice]}`;
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    // User Wins
    userScore++;
    document.getElementById("user-score").innerText = userScore;
    sessionStorage.setItem("userScore", userScore); // Save to session storage

    resultMessage.innerHTML = `<span class="winner">You Win!</span> ${emojis[userChoice]} beats ${emojis[compChoice]}`;
  } else {
    // Computer Wins
    compScore++;
    document.getElementById("comp-score").innerText = compScore;
    sessionStorage.setItem("compScore", compScore); // Save to session storage

    resultMessage.innerHTML = `<span class="loser">You Lose!</span> ${emojis[compChoice]} beats ${emojis[userChoice]}`;
  }
}
