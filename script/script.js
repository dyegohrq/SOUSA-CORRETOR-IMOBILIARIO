let header = document.getElementById('header');
let nav = document.getElementById('nav');
let layerBlur = document.getElementById('layer-blur');
let burger = document.getElementById('burger');
let hamburguer = document.getElementById('hamburguer')

burger.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('active');
    hamburguer.classList.toggle('open')
})