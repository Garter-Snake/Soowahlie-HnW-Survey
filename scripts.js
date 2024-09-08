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
        validateQ6();
        return;
    }
    else
    document.getElementById('SurveyForm').addEventListener('submit', function(event) {
        event.preventDefault();
      });

    document.getElementById("pc").setCustomValidity ('Please select one of the options that apply to you.');
    return;

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
            return;
        }
    else
    document.getElementById('SurveyForm').addEventListener('submit', function(event) {
        event.preventDefault();
      });

    document.getElementById("nf").setCustomValidity ('Please select one of the options that apply to you.');
    return;

}

function validateform()
{
    validateQ3();
}