var menu = 0;

function toggleMenu() {
	var nav = document.getElementById("nav");
	if (menu == 0) {
		menu = 1;
		nav.style.display = "block";

	} else {
		menu = 0;
		nav.style.display = "none";
	}
}