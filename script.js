const button = document.getElementById("submit-button");
button.addEventListener("click", () => {
    let passwordOne = document.querySelector("#user-password");
    let passwordTwo = document.querySelector("#confirm-password");
    console.log(passwordOne.value);
    console.log(passwordTwo.value);
    compare(passwordOne.value, passwordTwo.value);
});

function compare(a, b) {
  if (a !== b) {
    alert("Passwords do not match");
  } 
}