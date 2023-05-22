const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

    if (email === "" || password === "") {
      alert("Please fill in all fields");
    } else {
      const formData = {
        email,
        password,
      };

      console.log(formData);

      loginForm.reset();
    }
  });