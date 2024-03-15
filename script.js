const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const results = document.getElementById('results-div');

const telephoneCheck = (str) => {
  const validInput = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/gi;
  if(validInput.test(str) === true){
    results.textContent = `Valid US number: ${str}`;
  } else {
    results.textContent = `Invalid US number: ${str}`;
  }
};

checkBtn.addEventListener("click", () => {
  if(userInput.value === ""){
    alert("Please provide a phone number");
  } else{telephoneCheck(userInput.value);}
  });
 

clearBtn.addEventListener("click", () => {
  results.textContent = "";
});
