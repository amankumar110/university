const form = document.querySelector("form");
const password = form.password;
const showBtn = form.querySelector(".password-show");

showBtn.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const localObj = JSON.parse(localStorage.getItem("personInfo"));
  if (localObj !== null) {
    alert("you are already Signed In");
  } else {
    const final = confirm("Are You Sure You Want To Sign Up?");
    if (final) {
      let personObj = {};
      const name = form.name.value.trim();
      const age = form.age.value.trim();
      const email = form.email.value.trim();
      const passVal = password.value.trim();
      // Name input validation
      if (name === "") {
        alert("Enter Your Name");
      } else {
        personObj.name = name;
      }

      // Age input validation
      if (age === "") {
        alert("Enter Your Age");
      } else if (parseInt(age) < 16) {
        alert("Enter Valid Age");
      } else if (parseInt(age) > 55) {
        alert("Enter Valid Age");
      } else {
        personObj.age = parseInt(age);
      }

      // Email input validation
      if (email === "") {
        alert("Enter Your Email Address");
      } else {
        personObj.email = email;
      }
      // Password input validation
      if (passVal === "") {
        alert("Create a new Password");
      } else {
        personObj.password = passVal;
      }
      if (Object.keys(personObj) !== []) {
        localStorage.setItem("personInfo", JSON.stringify(personObj));
        alert("you have signed up");
        history.go(-1)
      }
    }
  }
});
