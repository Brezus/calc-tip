window.addEventListener("DOMContentLoaded", (event) => {
  let tipsGrid = document.getElementById("tip-grid");
  let billErrorMsg = document.getElementById("first-error");
  let billInput = document.getElementById("bill-input");
  let billInputVal = billInput.value;
  let personErrorMsg = document.getElementById("second-error");
  let personInput = document.getElementById("person-input");
  let personInputVal = personInput.value;
  let customInput = document.getElementById("custom-input");
  let customBox = document.querySelector(".custom-box");
  let customErrorMsg = document.querySelector(".custom-input-error-msg");
  let billInputInt;
  let tipAmount;
  let Total;
  let formattedTarget;
  let formattedTargetPercent;
  let percentOfVal;
  let percentOfValFormatted;
  let myArray = [];
  let reset = document.getElementById('reset');
  let firstVal = document.querySelector(".tip-amt");
  let lastVal = document.querySelector(".total-amt");

  reset.addEventListener('click', () => {
    personInput.value = "";
    billInput.value = "";
    customInput.value = "";
    firstVal.innerHTML = '$0.00'
    lastVal.innerHTML = '$0.00'
  })

  customInput.addEventListener("input", function () {
    checkInput(customInput, customErrorMsg);
    let customValue = customInput.value;
  });

  personInput.addEventListener("input", function () {
    checkInput(personInput, personErrorMsg);
     function calcTip(baseBill, percentTip, headCount) {
    if (headCount == 0) {
      let tipAmount = baseBill * percentTip;
      console.log(baseBill + " when headcount is false");
      let tipAndBill = +tipAmount + +baseBill;
      console.log(tipAndBill + " when headcount is false");
      console.log(headCount);
      displayCost(tipAmount, tipAndBill);
      myArray = [tipAndBill, tipAmount]
      return myArray;
    } else {
      let tipAmount = baseBill * percentTip;
      console.log(baseBill);
      let tipDivided = +tipAmount / +headCount;
      console.log(tipDivided + " when headcount is true");
      let tipAndBill = +baseBill + +tipAmount;
      console.log(tipAndBill + " when headcount is true");
      console.log(headCount);
      displayCost(tipDivided, tipAndBill);
      myArray = [tipAndBill, tipAmount]
      return myArray;
    }
  }
    calcTip(billInputVal, formattedTargetPercent, personInputVal);
    displayCost(myArray[1], myArray[0])
  });

  window.onload = function () {
    // this function clears all data in all input fields
    // https://stackoverflow.com/questions/38799096/clear-input-fields-on-page-refresh-microsoft-edge
    personInput.value = "";
    billInput.value = "";
    customInput.value = "";
  };

 

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

  function displayCost(tipValue, totalValue) {
    firstVal = document.querySelector(".tip-amt");
    lastVal = document.querySelector(".total-amt");
    firstVal.innerHTML = tipValue;
    lastVal.innerHTML = totalValue;
  }
  tipsGrid.addEventListener("click", (e) => {
    checkInput(billInput, billErrorMsg);
    // checkInput(personInput, personErrorMsg) for the second input that has to be a number
    if (
      e.target.className === "tip-box" ||
      e.target.className === "tip-box preset-box"
    ) {
      formattedTarget = e.target.innerHTML.slice(0, -1);
      //   console.log(formattedTarget)
      // the button selected looses its last element (%) with this slice function
      formattedTargetPercent = formattedTarget / 100;
      //   console.log(formattedTargetPercent)
      // divide the number value of button selected which is a str by 100 to calculate the percent value and turn to int
      percentOfVal = formattedTargetPercent * billInput.value;
      //   console.log(percentOfVal)
      // multiply the percent value by the value given by the user to find the percent of that give value
      percentOfValFormatted = Number(percentOfVal.toFixed(2));
      //   console.log(percentOfValFormatted + 'percent of value formatted')
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
        e.target.style.display = "none";
        customInput.classList.remove("hidden");
        customInput.focus();

        // use this focus function to activate (focus) the customInput as soon as the custom button is clicked
        customSelected = false;
        // let customPercent = customInput.value
        // let customPercentFormatted = customPercent.slice(0, -1)
        // console.log(customPercentFormatted)
      } else {
        // if the boolean is false
        // we make the custom box button visible again
        // we then make the input box hidden and set the boolean to false
        customBox.style.display = "block";
        customInput.classList.add("hidden");
        customSelected = true;
      }
    }
  });
});
