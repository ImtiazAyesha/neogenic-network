// Navbar Responsiveness
const navBtn= document.querySelector(".nav-icons");
const headerElement = document.querySelector(".header");
navBtn.addEventListener('click', ()=>{
  headerElement.classList.toggle("active");
})


// Scroll to top btn
const heroSection= document.querySelector(".section-hero");
const scrolltop= document.querySelector(".section-footer");
const scrollElement = document.createElement("div");
scrollElement.classList.add("scroll-top-style");
scrollElement.innerHTML=`<ion-icon name="arrow-up-outline" class="top-style"></ion-icon>`
scrolltop.after(scrollElement);

const scrollUp =() =>{
  heroSection.scrollIntoView({ behavior:"smooth" });
};
scrollElement.addEventListener("click",scrollUp);


// Restricting copying context
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

document.addEventListener('copy', function(event) {
  event.preventDefault();
});

