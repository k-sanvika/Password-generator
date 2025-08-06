let ipSlider = document.getElementById("ipSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let icon = document.getElementById("icon");

//showing input slider value
ipSlider.addEventListener("input", () => {
  sliderValue.innerText = ipSlider.value;
});

genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numbersChars = "0123456789";
let symbolsChars = "!@#$&";
function generatePassword() {
  let password = "";
  let length = parseInt(ipSlider.value);
  let allChars = "";
  allChars += lowercase.checked ? lowerChars : "";
  allChars += uppercase.checked ? upperChars : "";
  allChars += numbers.checked ? numbersChars : "";
  allChars += symbols.checked ? symbolsChars : "";

  for (let i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  return password;
}

icon.addEventListener("click", () => {
  // passBox.value
  if (passBox.value.length > 0) {
    navigator.clipboard.writeText(passBox.value);
    icon.classList.remove("fa-copy");
    icon.classList.add("fa-check");
    icon.title = "Password Copied";

    // Change back to copy icon after 1.5 seconds
    setTimeout(() => {
      icon.classList.remove("fa-check");
      icon.classList.add("fa-copy");
    }, 1500);
  }
});
