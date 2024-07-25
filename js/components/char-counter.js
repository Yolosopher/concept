const CHARCOUNTER_FIELD = ".formfield_charcounter";

const charCounter = () => {
  const fields = document.querySelectorAll(CHARCOUNTER_FIELD);

  [...fields].forEach((field) => {
    const maxLength = Number(field.dataset.maxlength);
    const input = field.previousElementSibling;

    const changeHandler = (e) => {
      const value = e.target.value;

      if (value.length > maxLength) {
        e.target.value = value.slice(0, maxLength);
      }
      const valueLength = e.target.value.length;
      field.textContent = `${valueLength} / ${maxLength}`;
    };
    input?.addEventListener("input", changeHandler);
  });
};

export default charCounter;
