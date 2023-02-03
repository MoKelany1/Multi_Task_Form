let sub = {
    theType: "",
    theMoney: "",
    theName: "",
    }
let monthlyPrice = document.getElementsByClassName("span-month")
let yearlyPrice = document.getElementsByClassName("span-year")
let freeP = document.getElementsByClassName("free")
let planCheckBtn = document.getElementById("plan-type")
let monthlyP = document.getElementById("monthly-p")
let yearlyP = document.getElementById("yearly-p")
planCheckBtn.addEventListener("click",function(){
    if(planCheckBtn.checked === false){
        yearlyP.style.color = "var(--cool-gray)"
        monthlyP.style.color = "var(--marine-blue)"
        for(let i=0; i<yearlyPrice.length; i++){
            yearlyPrice[i].style.display = "none";
        }
        for(let i=0; i<monthlyPrice.length; i++){
            monthlyPrice[i].style.display = "block";
        }
        for(let i=0; i<freeP.length; i++){
            freeP[i].style.display = "none";
        }
    } else{
        monthlyP.style.color = "var(--cool-gray)"
        yearlyP.style.color = "var(--marine-blue)"
        for(let i=0; i<monthlyPrice.length; i++){
            monthlyPrice[i].style.display = "none";
        }
        for(let i=0; i<yearlyPrice.length; i++){
            yearlyPrice[i].style.display = "block";
        }
        for(let i=0; i<freeP.length; i++){
            freeP[i].style.display = "block";
        }
    }
})

window.localStorage.removeItem("plan")
window.localStorage.removeItem("type")
let errorRadio = document.getElementById("error-radio")
let arcadeRadio = document.getElementById("arcade-radio")
let advancedRadio = document.getElementById("advanced-radio")
let proRadio = document.getElementById("pro-radio")
let plansNextBtn = document.getElementById("plans-next")
plansNextBtn.addEventListener("click",function(e){
    if(arcadeRadio.checked === false && advancedRadio.checked === false && proRadio.checked === false){
        errorRadio.style.display = "block"
        e.preventDefault()
    }
    if(arcadeRadio.checked === true){
        sub.theName = "Arcade";
        if(planCheckBtn.checked === false){
            sub.theMoney = 9;
            sub.theType = "Monthly";
        } else{
            sub.theMoney = 90;
            sub.theType = "Yearly";
        }
    }else if(advancedRadio.checked === true){
        sub.theName = "Advanced";
        if(planCheckBtn.checked === false){
            sub.theMoney = 12;
            sub.theType = "Monthly";
        } else{
            sub.theMoney = 120;
            sub.theType = "Yearly";
        }
    }else if(proRadio.checked === true){
        sub.theName = "Pro";
        if(planCheckBtn.checked === false){
            sub.theMoney = 15;
            sub.theType = "Monthly";
        } else{
            sub.theMoney = 150;
            sub.theType = "Yearly";
        }
    }
    window.localStorage.setItem("plan-price",sub.theMoney)
    window.localStorage.setItem("plan-name",sub.theName)
    window.localStorage.setItem("plan-type",sub.theType)
})