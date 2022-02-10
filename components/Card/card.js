const closeIcon = document.querySelector(".close-icon-wrapper");
const resetCardBtn = document.querySelector(".reset-dismissed-card");
const cardWrapper = document.querySelector(".dismiss-card-wrapper");
const dismissCard = () =>{
    cardWrapper.style.display= "none";
    resetCardBtn.style.display = "block";
}
closeIcon.addEventListener("click",dismissCard);

const resetCard = ()=>{
    resetCardBtn.style.display = "none";
    cardWrapper.style.display = "block";
}
resetCardBtn.addEventListener("click",resetCard)