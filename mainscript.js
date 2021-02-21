function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var root = document.querySelector(':root');

function toggleTheme() {
	var theme = getCookie('theme');
	if (theme == "light") {
		setCookie('theme','dark','99');
		root.style.setProperty('--bg-color', '#242424');
		root.style.setProperty('--bg-color2', '#2e2e2e');
		root.style.setProperty('--fg-color', '#ebebeb');
	} else {
		setCookie('theme','light','99');
		root.style.setProperty('--bg-color', '#ffffff');
		root.style.setProperty('--bg-color2', '#ebebeb');
		root.style.setProperty('--fg-color', '#1c1c1c');
	}
}

var theme1 = getCookie('theme');
if (theme1 == "dark") {
	root.style.setProperty('--bg-color', '#242424');
	root.style.setProperty('--bg-color2', '#2e2e2e');
	root.style.setProperty('--fg-color', '#ebebeb');
} else {
	root.style.setProperty('--bg-color', '#ffffff');
	root.style.setProperty('--bg-color2', '#ebebeb');
	root.style.setProperty('--fg-color', '#1c1c1c');
}