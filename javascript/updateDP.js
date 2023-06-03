const img = document.querySelector(".form-img");
window.addEventListener("DOMContentLoaded", () => {  
  const loginStatus = JSON.parse(sessionStorage.getItem("isLoggedIn"));
  if (!loginStatus) {
    location.assign("../html/notice-and-login.html");
  } else {
    const localObj = JSON.parse(localStorage.getItem("personInfo"));
    if(Object.keys(localObj).includes("image")){
      img.src = localObj.image;
    }
    const fileInput = document.getElementById("file-input");

    function handleImageUpload() {
      const image = fileInput.files[0];

      const reader = new FileReader();

      reader.onload = function (e) {
        localObj.image = e.target.result;
        localStorage.setItem("personInfo", JSON.stringify(localObj));
        console.log(e.target.result);
        img.src = e.target.result;
      };
      reader.readAsDataURL(image);
      alert("Profile picture has changed");
      history.go(-1);
    }
    fileInput.addEventListener("change", handleImageUpload);

  }
});
