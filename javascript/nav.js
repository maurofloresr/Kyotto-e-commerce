// BUTTON TOGGLE
const toggleButton = document.querySelector('.navbar__toggle')
const divLinks = document.querySelector('.navbar__links')

toggleButton.addEventListener('click', () =>{
if (divLinks.classList !== 'navbar__links--hidden') {
  divLinks.classList.toggle('navbar__links--hidden')
}
} )


// STICKY NAVBAR
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > navbar.offsetHeight) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});



