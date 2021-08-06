"use strict";
var opened = false;
var startMenu;
function onClick() {
    startMenu = document.getElementById("start_menu");
    if (startMenu == null) {
        alert("Debug Error! missing start menu");
        return;
    }
    if (opened) {
        startMenu.style.display = "none";
    }
    else {
        startMenu.style.display = "block";
    }
    opened = !opened;
}
function escapeClick() {
    startMenu = document.getElementById("start_menu");
    if (startMenu == null) {
        alert("Debug Error! missing start menu");
        return;
    }
    startMenu.style.display = "none";
    opened = false;
}
