window.addEventListener('DOMContentLoaded', function () {
  // Маска
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);
  new JustValidate('.contact__form-for-call', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 50
      },
      tel: {
        required: true,
        function(name, value) {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
      mail: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
        required: 'Недопустимый формат'
      }
    },
    submitHandler: function (form) {
      let formData = new FormData(form);
      let xhr = new XMLHttpRequest();
      
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("Отправлено")
          }
        }
      }
      xhr.open("POST", "../php/mail.php", true);
      xhr.send(formData);
      document.querySelector(".contact__back-block").style.display = 'block';
      $("html,body").css("overflow","hidden");
      form.reset();
    }
  });
});