window.addEventListener("DOMContentLoaded",()=>{
    const loginStatus = JSON.parse(sessionStorage.getItem("isLoggedIn"));
    if(!loginStatus){
    location.assign("../html/notice-and-login.html")
   }
})

