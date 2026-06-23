// Array to store all scores
    let scores = [];

// Get HTML elements
    const scoreInput = document.getElementById("scoreInput");
    
function addScore() {
// YOUR CODE HERE
const value = scoreInput.value;
const score = parseFloat(value);

if (value === "") {
    alert("Please enter a score");
} else if (score < 0 || score > 100) {
    alert("Score must be between 0-100");
} else {
    scores.push(score);
    scoreInput.value = "";
    updateResults();
}

    
function clearAllScores() {
    scores = [];
    scoreInput.value = "";
    updateResults();
    }


    
function updateResults() {
// YOUR CODE HERE
const scoreList = document.getElementById("scoreList");
scoreList.innerHTML = "";
}
// PART A: Update the Score List
if (scores.length === 0) {
    scoreList.innerHTML = "<div>No scores yet...</div>";
    document.getElementById("testCount").textContent = "0";
    document.getElementById("average").textContent = "--";
    document.getElementById("bestScore").textContent = "--";
    document.getElementById("lowestScore").textContent = "--";
    document.getElementById("gradeDisplay").textContent = "--";
    document.getElementById("starDisplay").textContent = "";
} else {
for (let i = 0; i < scores.length; i++) {
    const scoreItem = document.createElement("div");
    scoreItem.className = "score-item";
    scoreItem.textContent = `${i + 1}. ${scores[i]}`;
    scoreList.appendChild(scoreItem);
    }
}
// PART B: Update the Statistics
document.getElementById("testCount").textContent = scores.length;
let sum = 0;
let maxScore = scores[0];
let minScore = scores[0];
for (let i = 0; i < scores.length; i++) {
    sum += scores[i];

}
if (scores[i] > maxScore) {
    maxScore = scores[i];
}
if (scores[i] < minScore) {
    minScore = scores[i];
}
const average = sum / scores.length;

//Find best score
let bestScore = Math.max(...scores);
//Find lowest score
let lowestScore = Math.min(...scores);



// Add event listeners
    document.getElementById("addBtn").addEventListener("click", addScore);
    document.getElementById("clearBtn").addEventListener("click", clearAllScores);

// Allow pressing Enter to add score
    document.getElementById("scoreInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addScore();
    }
    })};

// Initial update
    updateResults();