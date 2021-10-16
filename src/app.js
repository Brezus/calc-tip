window.addEventListener("DOMContentLoaded", (event) => {
  let tipsGrid = document.getElementById("tip-grid");
  let billErrorMsg = document.querySelector(".error-msg");
  let billInput = document.getElementById("bill-input");
  let billInputInt;


  function checkInput() {
    //check if value entered is not a number
    if (isNaN(billInput.value)) {
      //add error message
      billErrorMsg.style.visibility = "visible";
    } else {
      //remove error message since it is a number
      billInputInt = Number(billInput.value);
      console.log(billInputInt);
      billErrorMsg.style.visibility = "hidden";

    }
  }
  tipsGrid.addEventListener("click", (e) => {
    checkInput();
    if (
      e.target.className === "tip-box" ||
      e.target.className === "tip-box preset-box"
    ) {
      //   console.log(e.target.innerHTML)
      // the inner html of e.target has a value of string
      // convert it to a number
      let formattedTarget = e.target.innerHTML.slice(0, -1);
    } else if (e.target.className === "tip-box custom-box") {
      console.log("custom value");
    }
  });
});
