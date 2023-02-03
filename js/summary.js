let price = 0;
let planType = document.getElementById("plan-type")
let planPrice = document.getElementById("plan-price")
let serviceAddonPrice = document.getElementById("service-span")
let storageAddonPrice = document.getElementById("storage-span")
let profileAddonPrice = document.getElementById("profile-span")
let totalPrice = document.getElementById("total-price")
let selectionType = document.getElementById("selection")
if(window.localStorage.getItem("plan-type") === "Monthly") {
    planType.innerHTML = `${window.localStorage.getItem("plan-name")} (${window.localStorage.getItem("plan-type")})`
    planPrice.innerHTML = `$${window.localStorage.getItem("plan-price")}/mo`
    serviceAddonPrice.innerHTML = `$${window.localStorage.getItem("service")}/mo`
    storageAddonPrice.innerHTML = `$${window.localStorage.getItem("storage")}/mo`
    profileAddonPrice.innerHTML = `$${window.localStorage.getItem("profile")}/mo`
    selectionType.innerHTML = `(per month)`
    price = 0;
    price = parseInt(window.localStorage.getItem("plan-price")) + parseInt(window.localStorage.getItem("service")) + parseInt(window.localStorage.getItem("storage")) + parseInt(window.localStorage.getItem("profile"));
    totalPrice.innerHTML = ``
    totalPrice.innerHTML = `$${price}/mo`
}else if(window.localStorage.getItem("plan-type") === "Yearly"){
    planType.innerHTML = `${window.localStorage.getItem("plan-name")} (${window.localStorage.getItem("plan-type")})`
    planPrice.innerHTML = `$${window.localStorage.getItem("plan-price")}/yr`
    serviceAddonPrice.innerHTML = `$${window.localStorage.getItem("service") * 10}/yr`
    storageAddonPrice.innerHTML = `$${window.localStorage.getItem("storage") * 10}/yr`
    profileAddonPrice.innerHTML = `$${window.localStorage.getItem("profile") * 10}/yr`
    selectionType.innerHTML = `(per year)`
    price = 0;
    price = parseInt(window.localStorage.getItem("plan-price")) + parseInt(window.localStorage.getItem("service")) * 10 + parseInt(window.localStorage.getItem("storage")) * 10 + parseInt(window.localStorage.getItem("profile")) * 10;
    totalPrice.innerHTML = ``
    totalPrice.innerHTML = `$${price}/yr`
}

let thankPage = document.getElementById("thank-page")
let confirmBtn = document.getElementById("summary-confirm")
confirmBtn.addEventListener("click",function(){
    thankPage.style.zIndex = "300"
})

