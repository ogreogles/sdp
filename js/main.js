var tel = document.querySelector('input[type="tel"]');

var telMask = new Inputmask("+7 (999) 999-99-99");
telMask.mask(tel);

// JustValidate

const validator = new JustValidate(".feedback__form", {
  focusInvalidField: true,
  lockForm: true,
  errorFieldCssClass: "is-invalid",
  colorWrong: "#D11616",
});
validator.addField(".form-name", [
  {
    rule: "required",
    errorMessage: "Это обязательное поле",
  },
  {
    validator: (value) => {
      return !/[^A-zА-яЁё \s]/.test(value);
    },
    errorMessage: "Введите только буквы",
  },
  {
    rule: "minLength",
    value: 2,
    errorMessage: "Имя слишком короткое",
  },
  {
    rule: "maxLength",
    value: 30,
    errorMessage: "Имя слишком длинное",
  },
]);
validator.addField(".form-tel", [
  {
    rule: "required",
    errorMessage: "Это обязательное поле",
  },
  {
    validator: () => {
      const phone = tel.inputmask.unmaskedvalue();
      return phone.length === 10;
    },
    errorMessage: "Номер слишком короткий",
  },
]);
validator
  .addField(".form-mail", [
    {
      rule: "required",
      errorMessage: "Это обязательное поле",
    },
    {
      rule: "email",
      errorMessage: "Почта введена некорректно",
    },
  ])
  .onSuccess((event) => {
    console.log("Validation passes and form submitted", event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Отправлено");
        }
      }
    };

    xhr.open("POST", "mail.php", true);
    xhr.send(formData);

    event.target.reset();
    alert("Спасибо за заявку! Мы обязательно Вам перезвоним.");
  });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZWxcIl0nKTtcblxudmFyIHRlbE1hc2sgPSBuZXcgSW5wdXRtYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIpO1xudGVsTWFzay5tYXNrKHRlbCk7XG5cbi8vIEp1c3RWYWxpZGF0ZVxuXG5jb25zdCB2YWxpZGF0b3IgPSBuZXcgSnVzdFZhbGlkYXRlKFwiLmZlZWRiYWNrX19mb3JtXCIsIHtcbiAgZm9jdXNJbnZhbGlkRmllbGQ6IHRydWUsXG4gIGxvY2tGb3JtOiB0cnVlLFxuICBlcnJvckZpZWxkQ3NzQ2xhc3M6IFwiaXMtaW52YWxpZFwiLFxuICBjb2xvcldyb25nOiBcIiNEMTE2MTZcIixcbn0pO1xudmFsaWRhdG9yLmFkZEZpZWxkKFwiLmZvcm0tbmFtZVwiLCBbXG4gIHtcbiAgICBydWxlOiBcInJlcXVpcmVkXCIsXG4gICAgZXJyb3JNZXNzYWdlOiBcItCt0YLQviDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+0LUg0L/QvtC70LVcIixcbiAgfSxcbiAge1xuICAgIHZhbGlkYXRvcjogKHZhbHVlKSA9PiB7XG4gICAgICByZXR1cm4gIS9bXkEtetCQLdGP0IHRkSBcXHNdLy50ZXN0KHZhbHVlKTtcbiAgICB9LFxuICAgIGVycm9yTWVzc2FnZTogXCLQktCy0LXQtNC40YLQtSDRgtC+0LvRjNC60L4g0LHRg9C60LLRi1wiLFxuICB9LFxuICB7XG4gICAgcnVsZTogXCJtaW5MZW5ndGhcIixcbiAgICB2YWx1ZTogMixcbiAgICBlcnJvck1lc3NhZ2U6IFwi0JjQvNGPINGB0LvQuNGI0LrQvtC8INC60L7RgNC+0YLQutC+0LVcIixcbiAgfSxcbiAge1xuICAgIHJ1bGU6IFwibWF4TGVuZ3RoXCIsXG4gICAgdmFsdWU6IDMwLFxuICAgIGVycm9yTWVzc2FnZTogXCLQmNC80Y8g0YHQu9C40YjQutC+0Lwg0LTQu9C40L3QvdC+0LVcIixcbiAgfSxcbl0pO1xudmFsaWRhdG9yLmFkZEZpZWxkKFwiLmZvcm0tdGVsXCIsIFtcbiAge1xuICAgIHJ1bGU6IFwicmVxdWlyZWRcIixcbiAgICBlcnJvck1lc3NhZ2U6IFwi0K3RgtC+INC+0LHRj9C30LDRgtC10LvRjNC90L7QtSDQv9C+0LvQtVwiLFxuICB9LFxuICB7XG4gICAgdmFsaWRhdG9yOiAoKSA9PiB7XG4gICAgICBjb25zdCBwaG9uZSA9IHRlbC5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpO1xuICAgICAgcmV0dXJuIHBob25lLmxlbmd0aCA9PT0gMTA7XG4gICAgfSxcbiAgICBlcnJvck1lc3NhZ2U6IFwi0J3QvtC80LXRgCDRgdC70LjRiNC60L7QvCDQutC+0YDQvtGC0LrQuNC5XCIsXG4gIH0sXG5dKTtcbnZhbGlkYXRvclxuICAuYWRkRmllbGQoXCIuZm9ybS1tYWlsXCIsIFtcbiAgICB7XG4gICAgICBydWxlOiBcInJlcXVpcmVkXCIsXG4gICAgICBlcnJvck1lc3NhZ2U6IFwi0K3RgtC+INC+0LHRj9C30LDRgtC10LvRjNC90L7QtSDQv9C+0LvQtVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcnVsZTogXCJlbWFpbFwiLFxuICAgICAgZXJyb3JNZXNzYWdlOiBcItCf0L7Rh9GC0LAg0LLQstC10LTQtdC90LAg0L3QtdC60L7RgNGA0LXQutGC0L3QvlwiLFxuICAgIH0sXG4gIF0pXG4gIC5vblN1Y2Nlc3MoKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJWYWxpZGF0aW9uIHBhc3NlcyBhbmQgZm9ybSBzdWJtaXR0ZWRcIiwgZXZlbnQpO1xuXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG5cbiAgICBjb25zb2xlLmxvZyguLi5mb3JtRGF0YSk7XG5cbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcItCe0YLQv9GA0LDQstC70LXQvdC+XCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcIm1haWwucGhwXCIsIHRydWUpO1xuICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcblxuICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuICAgIGFsZXJ0KFwi0KHQv9Cw0YHQuNCx0L4g0LfQsCDQt9Cw0Y/QstC60YMhINCc0Ysg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQktCw0Lwg0L/QtdGA0LXQt9Cy0L7QvdC40LwuXCIpO1xuICB9KTtcbiJdfQ==
