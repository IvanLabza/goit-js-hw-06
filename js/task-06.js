 const validationInput = document.querySelector("#validation-input");

  validationInput.addEventListener("blur", () => {
    const inputLength = validationInput.value.length;
    const dataLength = parseInt(validationInput.getAttribute("data-length"));

    if (inputLength === dataLength) {
      validationInput.classList.add("valid");
      validationInput.classList.remove("invalid");
    } else {
      validationInput.classList.add("invalid");
      validationInput.classList.remove("valid");
    }
  });