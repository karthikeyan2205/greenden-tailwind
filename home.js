var sidenavbar = document.getElementById("sidenav");
var exit = document.getElementById("exit");
var nav = document.getElementById("navbar");

exit.addEventListener("click", function () {
  sidenavbar.style.right = "-50%";
});

nav.addEventListener("click", function () {
  sidenavbar.style.right = "0";
});
