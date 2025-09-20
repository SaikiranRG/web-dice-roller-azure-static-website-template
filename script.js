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
