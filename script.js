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

const API_BASE_URL = "https://server-dice-roller-node-js1-gubhdvgmadhca7a5.centralus-01.azurewebsites.net";
// Function to simulate rolling two dice
async function rollDice() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/dice/roll`);
    const data = await response.json();

    // Update fields
    document.getElementById("die1").value = data.die1;
    document.getElementById("die2").value = data.die2;
    document.getElementById("total").value = data.total;

  } catch (error) {
    alert("Error fetching dice roll: " + error.message);
  }
}
