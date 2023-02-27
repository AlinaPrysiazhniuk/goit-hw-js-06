const refs = {
  formEl: document.querySelector(".login-form"),
  emailEl: document.querySelector(".user-email"),
  passwordEl: document.querySelector(".user-password"),
};

refs.formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  if (refs.emailEl.value === "" || refs.passwordEl.value === "") {
    alert("Всі поля мають бути заповнені!");
  }

  if (refs.emailEl.value !== "" && refs.passwordEl.value) {
    const userData = {
      email: refs.emailEl.value,
      password: refs.passwordEl.value,
    };

    console.log(userData);
    refs.formEl.reset();
  }
});

// const loginFormEl = document.querySelector(".login-form");
// loginFormEl.addEventListener("submit", handleFormSubmit);

// function handleFormSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   console.log(event.currentTarget);

//   if (email.value === "" || password.value === "") {
//     return alert("Всі поля повинні бути заповнені");
//   }

//   const formData = {
//     email: email.value,
//     password: password.value,
//   };

//   console.log(formData);
//   event.currentTarget.reset();
// }
