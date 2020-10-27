
function changeCss () {
  var bodyElement = document.querySelector("body");
  var navElement = document.querySelector("nav");
  this.scrollY > document.querySelector('header').offsetWidth ? navElement.style.display = 'none': navElement.style.opacity = 1;
}
window.addEventListener("scroll", changeCss , false);
