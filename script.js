/*
 * Author: Saikiran Reddy Gokula
 * Project: Web Dice Roller
 * Credits: This JavaScript file was built using guidance from ChatGPT (OpenAI) 
 *          along with concepts and code patterns from class provided templates. 
 *          I refined and customized it for the final implementation.
 * AI Usage: ChatGPT suggested logic for dice rolling, button focus and 
 *           page load behavior. These were merged with class materials 
 *           and modified to meet requirements.
 */

// Function to simulate rolling two dice
function rollDice() {
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;

  // Update fields
  document.getElementById("die1").value = die1;
  document.getElementById("die2").value = die2;
  document.getElementById("total").value = total;

  // Keep the roll button focused so Enter works
  document.getElementById("rollBtn").focus();
}
