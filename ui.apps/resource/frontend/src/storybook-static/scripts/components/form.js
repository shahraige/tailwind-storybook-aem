// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
        $('.form-container .form-control').each(function (index, inputField) {
          inputFieldValidation(inputField);
        });
        // for parent class

        var inputfields = document.getElementsByClassName("form-control");
        Array.prototype.filter.call(inputfields, function (inputField) {
          inputFieldValidation(inputField);
        });
      }, false);
      var inputfields = $('.form-container .form-control');
      Array.prototype.filter.call(inputfields, function (inputFieldItem) {
        $(inputFieldItem).on('keyup change', function () {
          inputFieldValidation(inputFieldItem);
        });
      });
    });

    // check and set the consent status
    // check and loop each all elements
      $(document).find('input[type="checkbox"]').each(function () {
        if (($(this).attr('data-prefilled') == 'true') || ($(this).attr('data-prefilled') == true)) {
          $(this).attr("checked", true);
        } else {
          $(this).attr("checked", false);
        }
      });
    
  }, false);
})();


var inputFieldValidation = function (inputField) {
  var inputFieldWithoutJQuery = inputField;
  inputField = $(inputField);
  if(inputField.parent('.error-bg') == true){
    if (!inputFieldWithoutJQuery.checkValidity()) {
      if (inputField.parent('.error-bg')[0].classList.contains("valid")) {
        inputField.parent('.error-bg')[0].classList.remove('valid');
      }
      if (!inputField.parent('.error-bg')[0].classList.contains("invalid")) {
        inputField.parent('.error-bg')[0].classList.add("invalid");
      }
    } else if (inputFieldWithoutJQuery.checkValidity()) {
      if (inputField.parent('.error-bg')[0].classList.contains("invalid")) {
        inputField.parent('.error-bg')[0].classList.remove('invalid');
      }

      if (!inputField.parent('.error-bg')[0].classList.contains("valid")) {
        inputField.parent('.error-bg')[0].classList.add('valid');
      }
    }
  }
}



function checkValue(element) {
    // check if the input has any value (if we've typed into it)
    if ($(element).val())
      $(element).addClass('has-value');
    else
      $(element).removeClass('has-value');
}
  
$(document).ready(function () {
  // Run on page load
  $('.form-control').each(function () {
    checkValue(this);
  });
  // Run on input exit
  $('.form-control').blur(function () {
    checkValue(this);
  });

  // check box check/uncheck
  $(document).find('input[type="checkbox"]').on('change', function () {
    $(this).attr('checked', $(this).is(':checked'));
  });
});

$(document).on('click', '.privacy-icon', function () {
  $(this).toggleClass('eye-close').toggleClass('eye-open'); // toggle our classes for the eye icon
  var type = $(this).parents('.input-field').find('input').attr('type');
  
  if (type === "password") {
    $(this).parents('.input-field').find('input[type="password"]').attr('type', 'text');
  }
  else if (type === "text") {
    // $('.password').attr('type', 'password');
    $(this).parents('.input-field').find('input[type="text"]').attr('type', 'password');
  }
});

