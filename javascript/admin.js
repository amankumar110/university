window.addEventListener("DOMContentLoaded",()=>{
    const loginStatus = JSON.parse(sessionStorage.getItem("isLoggedIn"));
    if(!loginStatus){
    location.assign("../html/notice-and-login.html")
   } else {
    const img = document.querySelector(".profile-pic");
    const localObj = JSON.parse(localStorage.getItem("personInfo"));
    if(Object.keys(localObj).includes("image")){
        img.src = localObj.image;
    }
   }
})

