
function changeCss () {
	var navElement = document.querySelector(".contain-nav");
	var navBrand = document.querySelector(".navbar-brand");
	var navLink = document.querySelectorAll(".nav-link");
	var navToggler = document.querySelector(".navbar-toggler");
	if(this.scrollY > 1) {
		navElement.style.background= '#344258';
		navToggler.style.color=" color: rgb(255 254 254 / 50%);";	
	}
	else{ 
		navElement.style.background= 'transparent';
		navToggler.style.color="rgba(255,255,255,1)";
		for (var i = 0; i < navLink.length; i++) {
			navLink[i].style.color="white ";
		}
	}
}
window.addEventListener("scroll", changeCss , false);
