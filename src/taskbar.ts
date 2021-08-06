let opened : boolean = false;
let startMenu : HTMLElement | null;

function onClick() : void {
    startMenu = document.getElementById("start_menu");

    if (startMenu == null) {
        alert("Debug Error! missing start menu");
        return;
    }

    if (opened) {
        startMenu.style.display = "none";
    } else {
        startMenu.style.display = "block";
    }

    opened = !opened;
}

function escapeClick() : void {
    startMenu = document.getElementById("start_menu");
    if (startMenu == null) {
        alert("Debug Error! missing start menu");
        return;
    }
    startMenu.style.display = "none";
    opened = false;
}