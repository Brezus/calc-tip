window.addEventListener("DOMContentLoaded", (event) => {
  let tipsGrid = document.getElementById("tip-grid");
  let billErrorMsg = document.getElementById("first-error");
  let billInput = document.getElementById("bill-input");
  let personErrorMsg = document.getElementById('second-error')
  let personInput = document.getElementById('person-input')
  let customInput = document.getElementById('custom-input')
  let customBox = document.querySelector('.custom-box')
  let customErrorMsg = document.querySelector('.custom-input-error-msg')
  let billInputInt;
  console.log(customErrorMsg)

  customInput.addEventListener('input', function() {
      checkInput(customInput, customErrorMsg)
  })

window.onload = function() {
    // this function clears all data in all input fields
    // https://stackoverflow.com/questions/38799096/clear-input-fields-on-page-refresh-microsoft-edge
    personInput.value = ''
    billInput.value = ''
    customInput.value = ''
}
  


  function checkInput(input, msg) {
    //check if value entered is not a number
    if (isNaN(input.value)) {
      //add error message
      msg.style.display = "block";
    } else {
      //remove error message since it is a number
      inputInt = Number(input.value);
      msg.style.display = "none";
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
        // here we check if the custom button has been clicked
        // then make a boolean (customSelected)
        let customSelected = true;
        if (customSelected) {
            // if the boolean (customSelected) is true
            // we then make the custom button disappear
            // and remove the hidden class from our input
            // so the input takes the place of the custom button in the grid
            // and then we set the boolean to false
            e.target.style.display = 'none';
            customInput.classList.remove('hidden');
            customInput.focus()
            // use this focus function to activate (focus) the customInput as soon as the custom button is clicked
            customSelected = false;
            // let customPercent = customInput.value
            // let customPercentFormatted = customPercent.slice(0, -1)
            // console.log(customPercentFormatted)
        } else {
            // if the boolean is false
            // we make the custom box button visible again
            // we then make the input box hidden and set the boolean to false
            customBox.style.display = 'block'
            customInput.classList.add('hidden')
            customSelected = true;
        }
    } 
  });
});
