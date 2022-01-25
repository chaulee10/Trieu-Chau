const navSlide = () =>{
  const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');

  navLinks.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation = '';
    } else{
      link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.3}s`;
  }
});

    burger.classList.toggle('toggle');
});
}

navSlide();

$(".clients-carousel").owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  smartSpeed: 450,
  margin: 30,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    991: {
      items: 2,
    },
    1200: {
      items: 2,
    },
    1920: {
      items: 2,
    },
  },
});