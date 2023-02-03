let sub = {
theName: "",
theEmail: "",
theNumber: "",
}
let indexNextBtn = document.getElementById("index-next")
let nameInput = document.getElementById("name");
let nameErrMsg = document.getElementById("name-error")
let emailInput = document.getElementById("email");
let emailErrMsg = document.getElementById("email-error")
let phoneInput = document.getElementById("phone");
let phoneErrMsg = document.getElementById("phone-error")
indexNextBtn.addEventListener("click",function(e){
    nameErrMsg.style.display = "none"
    nameInput.style.borderColor = "var(--cool-gray)"
    emailErrMsg.style.display = "none"
    emailInput.style.borderColor = "var(--cool-gray)"
    phoneErrMsg.style.display = "none"
    phoneInput.style.borderColor = "var(--cool-gray)"
    if(nameInput.value === "" || emailInput.value === "" || phoneInput.value === ""){
        if(nameInput.value === ""){
            nameErrMsg.style.display = "block"
            nameInput.style.borderColor = "var(--strawberry-red)"
        }
        if(emailInput.value === ""){
            emailErrMsg.style.display = "block"
            emailInput.style.borderColor = "var(--strawberry-red)"
        }
        if(phoneInput.value === ""){
            phoneErrMsg.style.display = "block"
            phoneInput.style.borderColor = "var(--strawberry-red)"
        }
        e.preventDefault();
    }
    sub.theName = nameInput.value
    sub.theEmail = emailInput.value
    sub.thePhone = phoneInput.value
    window.localStorage.setItem("name",sub.theName)
    window.localStorage.setItem("email",sub.theEmail)
    window.localStorage.setItem("phone",sub.thePhone)
})
