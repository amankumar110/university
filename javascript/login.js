const form = document.querySelector("form.login");
let isLoggedIn = false;

window.addEventListener("DOMContentLoaded",()=>{
    const loggedInStatus = JSON.parse(sessionStorage.getItem("isLoggedIn"));
  if (loggedInStatus) {
    location.assign("../html/admin.html");
  } else {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.email.value.trim();
      const password = form.password.value.trim();
      console.log(password);
      if (email !== "" && password !== '') {
        const localObj = JSON.parse(localStorage.getItem("personInfo"));
        if (localObj === null) {
          alert("you have not signed up yet");
          const moveToSignupPage = confirm("Would You Like To SignUp ?");
          if (moveToSignupPage) {
            location.assign("../html/signup.html");
          }
        } else {
          if (email === localObj.email && password === localObj.password) {
            location.assign("../html/admin.html");
            isLoggedIn = true;
            sessionStorage.setItem("isLoggedIn",JSON.stringify(isLoggedIn));
          } else {
            alert("Incorrect Information");
          }
        }
      } else {
        alert("Form Is Unfilled Kindle Fill It");
      }
    });
  }
})

