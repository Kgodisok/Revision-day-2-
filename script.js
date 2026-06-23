// Array to store all scores
let scores = [];

// Get HTML elements
const scoreInput = document.getElementById("scoreInput");
const scoreList = document.getElementById("scoreList");
const testCount = document.getElementById("testCount");
const averageEl = document.getElementById("average");
const bestScoreEl = document.getElementById("bestScore");
const lowestScoreEl = document.getElementById("lowestScore");
const gradeDisplay = document.getElementById("gradeDisplay");
const starDisplay = document.getElementById("starDisplay");

const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");



// FUNCTION 1: Add Score

function addScore() {
  const value = scoreInput.value.trim();

  // Empty check
  if (value === "") {
    alert("Please enter a score");
    return;
  }

  const score = Number(value);

  // Valid number check
  if (isNaN(score)) {
    alert("Please enter a valid number");
    return;
  }

  // Range check
  if (score < 0 || score > 100) {
    alert("Score must be between 0-100");
    return;
  }

  // Add to array
  scores.push(score);

  // Clear input
  scoreInput.value = "";

  // Update UI
  updateResults();
}



// FUNCTION 2: Clear All Scores

function clearAllScores() {
  scores = [];
  scoreInput.value = "";
  updateResults();
}



// FUNCTION 3: Update Results

function updateResults() {

  // -------------------------
  // PART A: Score List
  // -------------------------
  scoreList.innerHTML = "";

  if (scores.length === 0) {
    scoreList.innerHTML = `<div class="empty-message">No scores yet. Add your first score! 👆</div>`;
  } else {
    scores.forEach((score, index) => {
      const div = document.createElement("div");
      div.className = "score-item";
      div.textContent = `${index + 1}. ${score}`;
      scoreList.appendChild(div);
    });
  }

  // PART B: Statistics

  testCount.textContent = scores.length;

  if (scores.length === 0) {
    averageEl.textContent = "--";
    bestScoreEl.textContent = "--";
    lowestScoreEl.textContent = "--";
    gradeDisplay.textContent = "--";
    starDisplay.textContent = "";
    return;
  }

  // Average
  const sum = scores.reduce((total, num) => total + num, 0);
  const avg = Math.round(sum / scores.length);
  averageEl.textContent = avg;

  // Best score
  const maxScore = Math.max(...scores);
  bestScoreEl.textContent = maxScore;

  // Lowest score
  const minScore = Math.min(...scores);
  lowestScoreEl.textContent = minScore;


  // PART C: Grade System

  let grade = "";
  let stars = "";

  if (avg >= 90) {
    grade = "A";
    stars = "⭐⭐⭐⭐⭐";
  } else if (avg >= 80) {
    grade = "B";
    stars = "⭐⭐⭐⭐";
  } else if (avg >= 70) {
    grade = "C";
    stars = "⭐⭐⭐";
  } else if (avg >= 60) {
    grade = "D";
    stars = "⭐⭐";
  } else {
    grade = "F";
    stars = "⭐";
  }

  gradeDisplay.textContent = grade;
  starDisplay.textContent = stars;
}


// Event listeners
addBtn.addEventListener("click", addScore);
clearBtn.addEventListener("click", clearAllScores);

// Enter key support
scoreInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addScore();
  }
});

// Initial render
updateResults();