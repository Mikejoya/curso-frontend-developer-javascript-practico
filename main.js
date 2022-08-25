const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

//toggle permite agregar o eliminar, en este caso el inactive que creamos en css para que cuando tengamos el evento click aparezca o desaparezca.

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}