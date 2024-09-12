function addHidden()
{
  const form = document.getElementById("HnWform");
  const popUp = document.getElementById("finishPopUp");
  form.classList.toggle("hidden");
  popUp.classList.toggle("hidden");

  if (window.innerWidth > 640) {

    document.getElementById("surveyFooter").style.position = "absolute";
    document.getElementById("surveyFooter").style.width = "100%";
    document.getElementById("surveyFooter").style.bottom = "0";
  }
}


function validateQ1()
{
  const check = document.getElementById("q1");
    if (check.value == "16-21") {
      validateQ2();
    } else if (check.value == "22-30") {
      validateQ2();
    } else if (check.value == "31-64") {
      validateQ2();
    } else if (check.value == "65 and above") {
      validateQ2();
    } else {
      alert('Please select an option for question 1.');
      return;
    }
}

function validateQ2()
{
  if (document.getElementById("q2yes").checked) {
    validateQ3();
  } else if (document.getElementById("q2no").checked) {
    validateQ3();
  } else {
    alert('Please select an option for question 2.');
    return;
  }
}

function validateQ3()
{
    document.getElementById("mg").setCustomValidity ('');

    const HOarray = [];
    const HOcontainer = document.querySelector('#q3');
    const HOcheckboxes = HOcontainer.querySelectorAll('[type=checkbox]:checked');

    for (var i = 0; i < HOcheckboxes.length; i++) {
      HOarray.push(HOcheckboxes[i].value);
    }

    if
    (HOarray.length > 0) {
        validateQ4();
        return;
    }
    else
    document.getElementById('SurveyForm').addEventListener('submit', function(event) {
      event.preventDefault();
      });

    alert('At least one box needs to be selected for question 3.')
    document.getElementById("mg").setCustomValidity ('Please select one of the options that apply to you.');
    return;
}

function validateQ4()
{
    document.getElementById("pc").setCustomValidity ('');

    const BOarray = [];
    const BOcontainer = document.querySelector('#q4');
    const BOcheckboxes = BOcontainer.querySelectorAll('[type=checkbox]:checked');

    for (var i = 0; i < BOcheckboxes.length; i++) {
      BOarray.push(BOcheckboxes[i].value);
    }

    if
    (BOarray.length > 0) {
        validateQ5();
        return;
    }
    else
    document.getElementById('SurveyForm').addEventListener('submit', function(event) {
        event.preventDefault();
      });

    alert('At least one box needs to be selected for question 4.')
    document.getElementById("pc").setCustomValidity ('Please select one of the options that apply to you.');
    return;

}

function validateQ5() {
  if (document.getElementById("veryMuch").checked) {
    validateQ6();
    console.log('1');
  } else if (document.getElementById("somewhat").checked) {
    validateQ6();
    console.log('2');
  } else if (document.getElementById("middle").checked) {
    validateQ6();
    console.log('3');
  } else if (document.getElementById("notMuch").checked) {
    validateQ6();
    console.log('4');
  } else if (document.getElementById("bigNo").checked) {
    validateQ6();
    console.log('5');
  } else {
    alert('Please select an option for question 5.');
    return;
  }
}

function validateQ6()
{
    document.getElementById("nf").setCustomValidity ('');

    const INFOarray = [];
    const INFOcontainer = document.querySelector('#q6')
    const INFOcheckboxes = INFOcontainer.querySelectorAll('[type=checkbox]:checked');

    for (var i = 0; i < INFOcheckboxes.length; i++) {
      INFOarray.push(INFOcheckboxes[i].value);
    }

    if
    (INFOarray.length > 0) {
            addHidden();
            return;
        }
    else
    document.getElementById('SurveyForm').addEventListener('submit', function(event) {
        event.preventDefault();
      });
    
    alert('At least one box needs to be selected for question 6.');
    document.getElementById("nf").setCustomValidity ('Please select one of the options that apply to you.');
    return;

}

function validateform()
{
    validateQ1();
}