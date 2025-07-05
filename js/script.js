document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,          // Number of slides visible at once
    centeredSlides: true,      // Center the active slide
    spaceBetween: 10,          // Space between slides
    loop: true,                // Loop through slides
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      slideChangeTransitionEnd: function () {
        document.querySelectorAll('.swiper-slide').forEach(slide => {
          slide.style.transform = 'scale(1)'; // Reset scaling
          slide.style.zIndex = '1'; // Reset z-index
        });
        const activeSlide = document.querySelector('.swiper-slide-active');
        if (activeSlide) {
          activeSlide.style.transform = 'scale(1.2)';
          activeSlide.style.zIndex = '10';
        }
      },
    },
    breakpoints: {
      // Responsive settings for different screen sizes
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 5,
      }
    }
  });
});

window.addEventListener("scroll",()=>{
  let header = document.querySelector("header");
  if(window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})
let hrtIcon = document.querySelectorAll("#heartIcon");

hrtIcon.forEach((heartIcon)=>{
  heartIcon.addEventListener("click",()=>{
    console.log("clicked")
    if(heartIcon.style.color == "white") {
      heartIcon.style.color = "red"
    } else {
      heartIcon.style.color = "white"
    }
  })
})

let menuBar = document.querySelector("#menu-bar")
let ul = document.querySelector("#header-right ul");
let closing = document.querySelector("#close")
let li = document.querySelectorAll("#header-right ul li a");

menuBar.addEventListener("click",()=>{
  if(ul.style.display === "none") {
      ul.style.display = "flex";
  }else {
      ul.style.display = "none"
  }
}
);

li.forEach((a)=>{
  a.addEventListener("click",()=>{
    ul.style.display = "none";
  })
})

closing.addEventListener("click",()=>{
  ul.style.display = "none";
})

var tl = gsap.timeline();

tl.from("#main-left", {
  duration: 1.4,
  marginTop: "-70px",
  opacity:0,
})
tl.from("#main-right", {
  duration: 1.5,
  scale: 0,
  opacity: 0,
})
gsap.from("#favorites", {
  duration: .5,
  marginTop: "-70px",
  opacity:0,
  scrollTrigger:{
    scroller: "body",
    trigger: "#favorites",
    start: "top 50%",
    scrub: true,
    end: "bottom 50%"
  }
})
gsap.from(".swiper-slide", {
  duration: .5,
  x: -700,
  scrollTrigger:{
    scroller: "body",
    trigger: ".swiper-slide",
    scrub: 2,
    start: "top 50%",
    end: "bottom 70%",
  }})
gsap.from("#care-left", {
  duration: .5,
  x: -100,
  opacity:0,
  scrollTrigger:{
    scroller: "body",
    trigger: "#care-left",
    scrub: 2,
    start: "top 50%",
    end: "bottom 70%",
  }})
gsap.from("#care-right", {
  duration: .9,
  x: 50,
  opacity:0,
  scrollTrigger:{
    scroller: "body",
    trigger: "#care-right",
    scrub: 2,
    start: "top 50%",
    end: "bottom 70%",
  }})
gsap.from("#nature-strap-left, #nature-strap-right", {
  duration: .9,
  y: -20,
  opacity:0,
  scrollTrigger:{
    scroller: "body",
    trigger: "#nature-strap-left, #nature-strap-right",
    scrub: 2,
    start: "top 50%",
    end: "bottom 70%",
  }})
gsap.from(".product-box", {
  duration: 1.4,
  y: -40,
  opacity:0,
  scrollTrigger:{
    scroller: "body",
    trigger: ".product-box",
    scrub: 2,
    start: "top 50%",
    end: "bottom 70%",
  }})
gsap.from("#footer-left", {
  duration: 1.4,
  y: 40,
  opacity:0,
  scrollTrigger:{
    scroller: "body",
    trigger: "#footer-left",
    scrub: 2,
    start: "top 60%",
    end: "top 90%",
  }})
gsap.from("#footer-center", {
  duration: 1.4,
  y: 40,
  opacity:0,
  scrollTrigger:{
    scroller: "body",
    trigger: "#footer-center",
    scrub: 2,
    start: "top 60%",
    end: "top 90%",
  }})
gsap.from("#footer-right img", {
  duration: 2,
  x: -40,
  opacity:0,
  scrollTrigger:{
    scroller: "body",
    trigger: "#footer-right img",
    scrub: 2,
    start: "top 60%",
    end: "top 90%",
  }})