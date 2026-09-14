const tema = document.getElementById("tema");
const menu = document.getElementById("menu");
const links = document.getElementById("links");

tema.onclick = function() {
    document.body.classList.toggle("dark");
};

menu.onclick = function() {
    links.classList.toggle("aberto");
};