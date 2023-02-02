const buttonOpen = document.querySelector(".button__open-menu");
const buttonClose = document.querySelector(".button__close-menu")
const menu = document.querySelector(".dialog-menu");

buttonOpen.addEventListener('click', () => {
    menu.showModal();
})

buttonClose.addEventListener('click', () => {
    menu.close();
})