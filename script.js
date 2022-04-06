//Navbar
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;

});


//typed
var typed = new Typed('.typed', {
    strings: ['j’ai un background très intéressant aussi bien en dev qu\'en gestion de projet et une expérience avec JavaScript et PHP. J’ai de l’expérience dans la gestion de conditions de travail difficiles et je peux donc commencer à produire des résultats dès le premier mois de travail.'],
    typeSpeed: 20,
 
  });
    
