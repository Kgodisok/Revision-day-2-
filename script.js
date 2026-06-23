// Array to store all scores
    let scores = [];

// Get HTML elements
    const scoreInput = document.getElementById("scoreInput");


// ============================================
// TODO 1: Write the addScore() function
// ============================================
// This function should:
// 1. Get the value from scoreInput
// 2. Check if it's a valid number (0-100)
//    - If empty: show alert "Please enter a score"
//    - If < 0 or > 100: show alert "Score must be between 0-100"
//    - If valid: add it to the scores array
// 3. Clear the input field (set value to "")
// 4. Call updateResults() function
    
function addScore() {
// YOUR CODE HERE
    score = scoreInput.value 
    if (!score) {
        alert("Please enter a score")
    } else if(0 <= score <= 100){
        
    }

    }


}

    // ============================================
    // TODO 2: Write the clearAllScores() function
    // ============================================
    // This function should:
    // 1. Empty the scores array (scores = [])
    // 2. Clear the scoreInput field
    // 3. Call updateResults() function
    
    function clearAllScores() {
      // YOUR CODE HERE
    }

// ============================================
// TODO 3: Write the updateResults() function
// ============================================
// This is the MAIN function that does most of the work
// It should:
//
// PART A: Update the Score List
// - Clear the scoreList div
// - If scores array is empty: show "No scores yet..."
// - If scores has values: 
//   * LOOP through scores array (use for loop)
//   * For each score at index i, create HTML:
//     <div class="score-item">[index+1]. [score]</div>
//   * Add it to scoreList
//
// PART B: Update the Statistics
// - Update testCount to: scores.length
// - If scores is empty: set average, bestScore, lowestScore to "--"
// - If scores has values:
//   * Calculate AVERAGE:
//     - Create a variable: let sum = 0
//     - LOOP through scores and ADD each one to sum
//     - average = sum / scores.length
//   * Find BEST SCORE:
//     - Create a variable: let maxScore = scores[0]
//     - LOOP through scores
//     - If current score > maxScore, update maxScore
//   * Find LOWEST SCORE:
//     - Create a variable: let minScore = scores[0]
//     - LOOP through scores
//     - If current score < minScore, update minScore
//   * Update the HTML with these values
//
// PART C: Determine Grade
// - Round average to nearest whole number
// - Use if/else operators to assign grade:
//   * average >= 90: Grade A ⭐⭐⭐⭐⭐ (5 stars)
//   * average >= 80: Grade B ⭐⭐⭐⭐ (4 stars)
//   * average >= 70: Grade C ⭐⭐⭐ (3 stars)
//   * average >= 60: Grade D ⭐⭐ (2 stars)
//   * average < 60: Grade F ⭐ (1 star)
// - Update gradeDisplay with the letter grade
// - Update starDisplay with the stars
    
function updateResults() {
// YOUR CODE HERE
}

// Add event listeners
    addBtn.addEventListener("click", addScore);
    clearBtn.addEventListener("click", clearAllScores);

// Allow pressing Enter to add score
    scoreInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addScore();
      }
    });

// Initial update
    updateResults();