const infoForm = document.querySelector("form.updatepassword");
const main = document.querySelector("main")
infoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = (infoForm.name).value.trim();
    const age = (infoForm.age).value.trim();
    const email = (infoForm.email).value.trim();
    const localObj = JSON.parse(localStorage.getItem("personInfo"));
    if (localObj === null) {
        alert("You havenot signed up yet"); 
       } else{
        if (localObj.name === name &&
             localObj.email === email &&
             localObj.age === parseFloat(age)) {
                const newForm = document.createElement("form");

                newForm.innerHTML = `
                <h2 class="form-heading">Password Reset</h2>
                <div class="formgroup">
                <label for="#password">Enter new Password</label>
                <input type="password" minlength="8" id="password" name="password" placeholder="password">
            </div>
            <div class="formgroup">
            <button class="submit" type="submit">Reset Password</button>
        </div>
                `;
                infoForm.remove();
                main.appendChild(newForm)
                handleForm(newForm);
        }
       }
})
function handleForm(form){
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const newPassword = form.password.value.trim();
        const object =  JSON.parse(localStorage.getItem("personInfo"));
        object.password = newPassword;
        localStorage.setItem("personInfo",JSON.stringify(object));
        alert("password has changed");

    })
}