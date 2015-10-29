var menuIcon = document.querySelector("#menu-icon");
var menuList = document.querySelector("#menu-list");
menuList.classList.add("is-hidden");


menuIcon.addEventListener('click', function(e) {
    e.preventDefault();
    menuList.classList.toggle('is-hidden');
});



