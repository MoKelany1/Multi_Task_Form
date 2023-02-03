let addonsNextBtn = document.getElementById("addons-next")
let addons = 0;
let serviceAddon = parseInt(document.getElementById("service-addon").innerHTML)
let storageAddon = parseInt(document.getElementById("storage-addon").innerHTML)
let profileAddon = parseInt(document.getElementById("profile-addon").innerHTML)
let serviceCheck = document.getElementById("online-service")
let storageCheck = document.getElementById("larger-storage")
let profileCheck = document.getElementById("custom-profile")
addonsNextBtn.addEventListener("click",function(e){
    window.localStorage.setItem("service",0)
    window.localStorage.setItem("storage",0)
    window.localStorage.setItem("profile",0)
    if(serviceCheck.checked === true){
        window.localStorage.setItem("service",serviceAddon)
    }
    if(storageCheck.checked === true){
        window.localStorage.setItem("storage",storageAddon)
    }
    if(profileCheck.checked === true){
        window.localStorage.setItem("profile",profileAddon)
    }
})