const output = document.querySelector(".output");
const input = document.querySelector(".text");
const submit = document.querySelector(".submit");
const form = document.getElementById("form");

//Event listeners
form.addEventListener("submit", displayOutput);

// Functions
function displayOutput(event) {
  const word = reverse(input.value);
  output.textContent = word;
  event.preventDefault();
}

function reverse(string) {
  const temp = string.trim().split("").reverse().join("");
  return temp;
}
