const RECAPTCHA_API_KEY = "6LfJaBcqAAAAABLacKlJG-y9y8ch56omtsIdZPZ7";

const CONTACTFORM_TRIGGER = ".contactform_trigger";
const CONTACTFORM = ".contactform";
const CONTACTFORM_OVERLAY = ".contactform_overlay";
const CONTACTFORM_CLOSEBTN = ".contactform_closebtn";
const CONTACTFORM_SUBMITBTN = ".contactform_submit";

const FORM_ID = "contactform";

const FORMFIELD_CLASS = ".formfield";
const FORMFIELD_MESSAGE_CLASS = ".formfield_message";

const RECAPTCHA_TOKEN_TEXTAREA_ID = "g-recaptcha-response";
const FULLNAME_ID = "fullname";
const EMAIL_ID = "email";
const TEXT_ID = "text";
const AGREE_ID = "agreeterms";
const PHONE_ID = "telnumber";

let errors = {
  isCaptchaLoaded: false,
  fieldsMap: new Map(),
};

const validateCaptcha = () => {
  const recaptcha_token_textarea = document.getElementById(
    RECAPTCHA_TOKEN_TEXTAREA_ID
  );
  if (recaptcha_token_textarea?.value) {
    return {
      success: true,
    };
  }
  return {
    success: false,
    message: "Please complete the captcha",
  };
};

const addListenerToInput = (inputId, validator, isCheckbox = false) => {
  const input = document.getElementById(inputId);
  if (isCheckbox) {
    input.addEventListener("change", (e) => {
      validator(e.target.checked);
    });
  } else {
    input.addEventListener("input", (e) => {
      validator(e.target.value);
    });
  }
};
const runValidationOnInput = (inputId, validator, isCheckbox = false) => {
  const input = document.getElementById(inputId);
  if (isCheckbox) {
    validator(input.checked, true);
  } else {
    validator(input.value, true);
  }
};

const getFormFieldElements = (inputId) => {
  const input = document.getElementById(inputId);
  if (!input) {
    throw new Error("Input field not found");
  }
  const formfield = input.closest(FORMFIELD_CLASS);
  const formfield_message = formfield.querySelector(FORMFIELD_MESSAGE_CLASS);

  return {
    input,
    formfield,
    formfield_message,
  };
};

const checkIfSubmitAllowed = () => {
  const submitBtn = document.querySelector(CONTACTFORM_SUBMITBTN);
  if (!errors.isCaptchaLoaded) {
    submitBtn.disabled = true;
    return;
  }
  // console.log(errors.fieldsMap.size);
  // if (errors.fieldsMap.size === 1) {
  //   console.log(errors.fieldsMap.entries());
  // }
  if (errors.fieldsMap.size > 0) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
};
const validations = {
  fullname: (value, skipDomUpdate = false) => {
    const { formfield, formfield_message, input } =
      getFormFieldElements(FULLNAME_ID);

    if (!value) {
      const message = "Please enter a name";
      errors.fieldsMap.set(FULLNAME_ID, message);
      if (!skipDomUpdate) {
        formfield.classList.add("error");
        formfield_message.textContent = message;
      }
    } else if (value.length < 3) {
      const message = "Please enter at least 3 characters";
      errors.fieldsMap.set(FULLNAME_ID, message);
      if (!skipDomUpdate) {
        formfield.classList.add("error");
        formfield_message.textContent = message;
      }
    } else {
      errors.fieldsMap.delete(FULLNAME_ID);
      if (!skipDomUpdate) {
        formfield.classList.remove("error");
        formfield_message.textContent = "";
      }
    }
    checkIfSubmitAllowed();
  },
  email: (value, skipDomUpdate = false) => {
    const { formfield, formfield_message, input } =
      getFormFieldElements(EMAIL_ID);

    if (!value) {
      const message = "Please enter an email address";
      errors.fieldsMap.set(EMAIL_ID, message);
      if (!skipDomUpdate) {
        formfield.classList.add("error");
        formfield_message.textContent = message;
      }
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
    ) {
      const message = "Please enter a valid email address";
      errors.fieldsMap.set(EMAIL_ID, message);
      if (!skipDomUpdate) {
        formfield.classList.add("error");
        formfield_message.textContent = message;
      }
    } else {
      errors.fieldsMap.delete(EMAIL_ID);
      if (!skipDomUpdate) {
        formfield.classList.remove("error");
        formfield_message.textContent = "";
      }
    }
    checkIfSubmitAllowed();
  },
  text: (value, skipDomUpdate = false) => {
    const { formfield, formfield_message, input } =
      getFormFieldElements(TEXT_ID);

    if (!value) {
      const message = "Please enter a message";
      errors.fieldsMap.set(TEXT_ID, message);
      if (!skipDomUpdate) {
        formfield.classList.add("error");
        formfield_message.textContent = message;
      }
    } else if (value.length < 10) {
      const message = "Please enter at least 10 characters";
      errors.fieldsMap.set(TEXT_ID, message);
      if (!skipDomUpdate) {
        formfield.classList.add("error");
        formfield_message.textContent = message;
      }
    } else {
      errors.fieldsMap.delete(TEXT_ID);
      if (!skipDomUpdate) {
        formfield.classList.remove("error");
        formfield_message.textContent = "";
      }
    }
    checkIfSubmitAllowed();
  },
  phone: (value, skipDomUpdate = false) => {
    const { formfield, formfield_message, input } =
      getFormFieldElements(PHONE_ID);

    if (!value) {
      const message = "Please enter a phone number";
      errors.fieldsMap.set(PHONE_ID, message);
      if (!skipDomUpdate) {
        formfield.classList.add("error");
        formfield_message.textContent = message;
      }
    } else if (value.length < 9) {
      const message = "Please enter at least 9 characters";
      errors.fieldsMap.set(PHONE_ID, message);
      if (!skipDomUpdate) {
        formfield.classList.add("error");
        formfield_message.textContent = message;
      }
    } else {
      errors.fieldsMap.delete(PHONE_ID);
      if (!skipDomUpdate) {
        formfield.classList.remove("error");
        formfield_message.textContent = "";
      }
    }
    checkIfSubmitAllowed();
  },
  agreeterms: (checked, skipDomUpdate = false) => {
    const { formfield, formfield_message, input } =
      getFormFieldElements(AGREE_ID);

    if (!checked) {
      const message = "Please agree to the terms";
      errors.fieldsMap.set(AGREE_ID, message);
      if (!skipDomUpdate) {
        formfield.classList.add("error");
        formfield_message.textContent = message;
      }
    } else {
      errors.fieldsMap.delete(AGREE_ID);
      if (!skipDomUpdate) {
        formfield.classList.remove("error");
        formfield_message.textContent = "";
      }
    }
    checkIfSubmitAllowed();
  },
  recaptcha: (value) => {
    if (!value) {
      errors.fieldsMap.set(
        RECAPTCHA_TOKEN_TEXTAREA_ID,
        "Please complete the captcha"
      );
    } else {
      errors.fieldsMap.delete(RECAPTCHA_TOKEN_TEXTAREA_ID);
    }

    checkIfSubmitAllowed();
  },
};

const retrieveAndValidateData = () => {
  // captcha
  const captchaValidation = validateCaptcha();
  if (captchaValidation.success === false) {
    errors.push({
      field: RECAPTCHA_TOKEN_TEXTAREA_ID,
      message: captchaValidation.message,
    });
  }
  if (errors.length > 0) {
    return {
      success: false,
      errors,
    };
  }
};

// add input listeners to form fields
const loadInputListeners = () => {
  addListenerToInput(FULLNAME_ID, validations.fullname);
  addListenerToInput(EMAIL_ID, validations.email);
  addListenerToInput(TEXT_ID, validations.text);
  addListenerToInput(PHONE_ID, validations.phone);
  addListenerToInput(AGREE_ID, validations.agreeterms, true);
  addListenerToInput(RECAPTCHA_TOKEN_TEXTAREA_ID, validations.recaptcha);

  // run validations on all fields

  runValidationOnInput(FULLNAME_ID, validations.fullname);
  runValidationOnInput(EMAIL_ID, validations.email);
  runValidationOnInput(TEXT_ID, validations.text);
  runValidationOnInput(PHONE_ID, validations.phone);
  runValidationOnInput(AGREE_ID, validations.agreeterms, true);
  runValidationOnInput(RECAPTCHA_TOKEN_TEXTAREA_ID, validations.recaptcha);
};

// add recaptcha loaded listener
eventTarget?.addEventListener("recaptchaLoaded", () => {
  errors.isCaptchaLoaded = true;

  loadInputListeners();
});

eventTarget?.addEventListener("recaptchaSuccess", () => {
  runValidationOnInput(RECAPTCHA_TOKEN_TEXTAREA_ID, validations.recaptcha);
});

// add submit listener to contact form
export const loadContactFormListener = () => {
  const form = document.getElementById(FORM_ID);
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    retrieveAndValidateData();
  });
};

// load contact form popup
const loadContactForm = () => {
  const contactFormTriggerBtn = document.querySelector(CONTACTFORM_TRIGGER);
  const contactForm = document.querySelector(CONTACTFORM);
  const contactFormOverlay = document.querySelector(CONTACTFORM_OVERLAY);
  const contactFormCloseBtn = document.querySelector(CONTACTFORM_CLOSEBTN);

  contactFormTriggerBtn.addEventListener("click", () => {
    contactForm.classList.add("active");
  });
  contactFormOverlay.addEventListener("click", () => {
    contactForm.classList.remove("active");
  });
  contactFormCloseBtn.addEventListener("click", () => {
    contactForm.classList.remove("active");
  });
};

export default loadContactForm;
