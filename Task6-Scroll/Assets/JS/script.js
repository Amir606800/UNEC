let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(event)=>{
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
})

nextBtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft +=300;
})
backBtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft -=300;
})