import JustValidate from "just-validate";

export default function validateForms() {
  const getDiscountForm = document.querySelector("#form-get-discount");

  if (getDiscountForm) {
    const validator = new JustValidate(getDiscountForm);

    validator
      .addField("#get-discount-name", [
        {
          rule: "required",
          errorMessage: "поле не заполнено",
        },
      ])
      .addField("#get-discount-tel", [
        {
          rule: "required",
          errorMessage: "поле не заполнено",
        },
        {
          rule: "customRegexp",
          value: /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/,
          errorMessage: "неверный номер",
        },
      ]);
  }

  const reviewsForm = document.querySelector("#reviews-form");

  if (reviewsForm) {
    const validator = new JustValidate(reviewsForm);

    validator
      .addField("#reviews-name", [
        {
          rule: "required",
          errorMessage: "поле не заполнено",
        },
      ])
      .addField("#reviews-message", [
        {
          rule: "required",
          errorMessage: "поле не заполнено",
        },
        {
          rule: "minLength",
          value: 10,
          errorMessage: "Поле должно содержать минимум 10 символов",
        },
      ]);
  }

  const recordForm = document.querySelector("#form-record");

  if (recordForm) {
    const validator = new JustValidate(recordForm);

    validator
      .addField("#record-name", [
        {
          rule: "required",
          errorMessage: "поле не заполнено",
        },
      ])
      .addField("#record-tel", [
        {
          rule: "required",
          errorMessage: "поле не заполнено",
        },
        {
          rule: "customRegexp",
          value: /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/,
          errorMessage: "неверный номер",
        },
      ]);
  }

  const connectionForm = document.querySelector("#connection-form");

  if (connectionForm) {
    const validator = new JustValidate(connectionForm);

    validator
      .addField("#connection-name", [
        {
          rule: "required",
          errorMessage: "поле не заполнено",
        },
      ])
      .addField("#connection-tel", [
        {
          rule: "required",
          errorMessage: "поле не заполнено",
        },
        {
          rule: "customRegexp",
          value: /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/,
          errorMessage: "неверный номер",
        },
      ])
      .addField("#connection-email", [
        {
          rule: "required",
          errorMessage: "поле не заполнено",
        },
        {
          rule: "email",
          errorMessage: "неверный email",
        },
      ])
      .addField("#connection-message", [
        {
          rule: "required",
          errorMessage: "поле не заполнено",
        },
        {
          rule: "minLength",
          value: 10,
          errorMessage: "Поле должно содержать минимум 10 символов",
        },
      ]);
  }
}
