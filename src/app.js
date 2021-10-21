window.addEventListener("DOMContentLoaded", (event) => {
  let billInput = document.getElementById("bill-input");
  let personErrorMsg = document.getElementById("second-error");
  let personInput = document.getElementById("person-input");
  let customInput = document.getElementById("custom-input");
  let reset = document.getElementById("reset");
  let results = document.querySelectorAll('.amt')
  let tips = document.querySelectorAll('.tip-box')
  let tip = .15;
  let total;
  let bill = 0;
  let headCount = 1;

  function validateFloat(s) {
      let rgx = /^[0-9]*\.?[0-9]*$/;
      return s.match(rgx)
  }

  function validateInt(s) {
      let rgx = /^\d+$/;
      return s.match(rgx)
  }


  window.onload = function () {
    personInput.value = "";
    billInput.value = "";
    customInput.value = "";
  };

  reset.addEventListener("click", () => {
    personInput.value = "";
    billInput.value = "";
    customInput.value = "";
    firstVal.innerHTML = "$0.00";
    lastVal.innerHTML = "$0.00";
  });

  billInput.addEventListener("input", function () {
    if (!validateFloat(billInput.value)) {
        billInput.value = billInput.value.substring(0, billInput.value.length - 1)
    }
    bill = Number(billInput.value)
    calculateTip()
    // console.log(bill)
  });
  
  customInput.addEventListener("input", function () {
    if (!validateFloat(customInput.value)) {
        customInput.value = customInput.value.substring(0, customInput.value.length - 1)
    }
    tip = customInput.value/ 100
    tips.forEach(btn => {
        btn.classList.remove('btn-active')
    })
    calculateTip()
  });

  personInput.addEventListener("input", function () {
    if (!validateInt(personInput.value)) {
        personInput.value = personInput.value.substring(0, personInput.value.length - 1)
    }
    headCount = parseFloat(personInput.value)
    if (personInput.value <= 0) {
        personErrorMsg.classList.remove('hidden')
        setTimeout(function() {
        personErrorMsg.classList.add('hidden')
        }, 3000)
    } 
    calculateTip()
    // console.log(headCount)
  });

  tips.forEach(btn => {
      btn.addEventListener('click', findTip)
  })

  function findTip(event) {
      tips.forEach(btn => {
          btn.classList.remove('btn-active')
          if (event.target.innerHTML == btn.innerHTML) {
              btn.classList.add('btn-active');
              // parseFloat gets rid of the percent sign at the end of the inner html of the button clicked
              tip = parseFloat(btn.innerHTML)/100
              console.log(tip)
          }
      })
      calculateTip()
      customInput.value = '';
  }

  function calculateTip() {
      if (headCount >= 1) {
          let tipAmount = bill * tip / headCount;
          let total = (bill * tip) / headCount;
          results[0].innerHTML = '$' + tipAmount.toFixed(2)
          results[1].innerHTML = '$' + total.toFixed(2)
      } else {
        
      }
  }

});
