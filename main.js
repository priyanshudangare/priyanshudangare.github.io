var theme = 1;
var menu = 0;

function toggleTheme() {
	var r = document.querySelector(':root');
	if (theme == 0) {
		theme = 1;
		r.style.setProperty('--bg-color', '#1f1f1f');
		r.style.setProperty('--fg-color', 'white');
		r.style.setProperty('--fg-color2', '#606060');
		document.getElementById("mobilemenuimg").src = "menudark.svg";
	} else {
		theme = 0;
		r.style.setProperty('--bg-color', 'white');
		r.style.setProperty('--fg-color', 'black');
		r.style.setProperty('--fg-color2', '#404040');
		document.getElementById("mobilemenuimg").src = "menulight.svg";
	}
}

toggleTheme();

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