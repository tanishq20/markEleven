const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const clickBtn = document.querySelector("#click-btn");
const output = document.querySelector("#output");

clickBtn.addEventListener("click", () => {
  hideMessage();
  const dob = dateOfBirth.value;
  const numberCheck = luckyNumber.value;
  if (dob && numberCheck) {
    const sum = sumOfDate(dob);
    checkBirthdayLucky(sum, numberCheck);
  } else {
    showMessage("Please enter both the fields😑", "red");
  }
});

function sumOfDate(dob) {
  const birthDate = dob.replaceAll("-", "");
  var sum = 0;
  for (let i = 0; i < birthDate.length; i++) {
    sum = sum + Number(birthDate[i]);
  }
  return sum;
}

function checkBirthdayLucky(sum, numberCheck) {
  if (sum % numberCheck === 0) {
    showMessage("Yaay!! Your birthday is lucky🎉", "green");
  } else {
    showMessage(`${numberCheck} not made for you 😉`, "orange");
  }
}

function hideMessage() {
  output.style.display = "none";
}

function showMessage(msg, color) {
  output.style.display = "block";
  output.style.background = color;
  output.innerText = msg;
}
