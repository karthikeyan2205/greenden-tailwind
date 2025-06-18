var sidenavbar = document.getElementById("sidenav");
var exit = document.getElementById("exit");
var nav = document.getElementById("navbar");
var search = document.getElementById("search");
var container = document.getElementById("container");
var divList = container.querySelectorAll("div");

exit.addEventListener("click", function () {
  sidenavbar.style.right = "-50%";
});

nav.addEventListener("click", function () {
  sidenavbar.style.right = "0";
});

search.addEventListener("keyup", function (event) {
  var enteredvalue = event.target.value.toUpperCase();
  for (count = 0; count < divList.length; count++) {
    var productname = divList[count].querySelector("h1").textContent;

    if (productname.toUpperCase().indexOf(enteredvalue) == -1) {
      divList[count].style.display = "none";
    } else {
      divList[count].style.display = "block";
    }
  }
});
