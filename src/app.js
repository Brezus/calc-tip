window.addEventListener("DOMContentLoaded", (event) => {
  let tipsGrid = document.getElementById("tip-grid");
  let billErrorMsg = document.getElementById("first-error");
  let billInput = document.getElementById("bill-input");
  let personErrorMsg = document.getElementById('second-error')
  let personInput = document.getElementById('person-input')
  let customInput = document.getElementById('custom-input')
//   let customBox = document.querySelector('custom-box')
//   console.log(customBox)


  let billInputInt;

  function checkInput(input, msg) {
    //check if value entered is not a number
    if (isNaN(input.value)) {
      //add error message
      msg.style.visibility = "visible";
    } else {
      //remove error message since it is a number
      inputInt = Number(input.value);
      msg.style.visibility = "hidden";
    }
  }

  tipsGrid.addEventListener("click", (e) => {
    checkInput(billInput, billErrorMsg);
    // checkInput(personInput, personErrorMsg) for the second input that has to be a number
    if (
      e.target.className === "tip-box" ||
      e.target.className === "tip-box preset-box"
    ) {
      let formattedTarget = e.target.innerHTML.slice(0, -1);
      // the button selected looses its last element (%) with this slice function
      let formattedTargetPercent = formattedTarget / 100;
      // divide the number value of button selected which is a str by 100 to calculate the percent value and turn to int
      let percentOfVal = formattedTargetPercent * billInput.value;
      // multiply the percent value by the value given by the user to find the percent of that give value
      let percentOfValFormatted = Number(percentOfVal.toFixed(2))
      //here we use toFixed function to remove excessive zeroes after the decimal point
    } else if (e.target.className === "tip-box custom-box") {
        if (e.target.style.display === 'block') {
            e.target.style.display = 'none'
            customInput.classList.remove('hidden')
        } else {
            e.target.style.display = 'block'
            customInput.classList.add('hidden')
        }
    }
  });
});
