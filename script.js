// Function to check quiz answer
function checkAnswer() {
    const answer = document.getElementById('quiz-answer').value.trim().toLowerCase();
    if (answer === 'dhruvika') { // Case-insensitive check
      window.location.href = 'page4.html'; // Redirect to the next page
    } else {
      document.getElementById('quiz-error').classList.remove('hidden'); // Show error message
    }
  }
  
  // Play audio continuously across pages
  window.onload = function () {
    const audio = document.getElementById('background-music');
    if (audio && !localStorage.getItem('musicStarted')) {
      audio.play();
      localStorage.setItem('musicStarted', true);
    }
  };