let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicadores = document.querySelector('.indicadores');
let dots = indicadores.querySelectorAll('ul li');
let numeros = document.querySelector('.numeros');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

const updateNumeros = () => {
    numeros.textContent = (active + 1).toString().padStart(2, '0');
};

prevButton.onclick = () => {
    let itemVelho = container.querySelector('.list .item.active');
    itemVelho.classList.remove('active');

    active = active - 1 < firstPosition ? lastPosition : active - 1;
    items[active].classList.add('active');

    let dotsVelho = indicadores.querySelector('ul li.ativo');
    dotsVelho.classList.remove('ativo');
    dots[active].classList.add('ativo');

    updateNumeros();
};

nextButton.onclick = () => {
    let itemVelho = container.querySelector('.list .item.active');
    itemVelho.classList.remove('active');

    active = active + 1 > lastPosition ? 0 : active + 1;
    items[active].classList.add('active');

    let dotsVelho = indicadores.querySelector('ul li.ativo');
    dotsVelho.classList.remove('ativo');
    dots[active].classList.add('ativo');

    updateNumeros();
};
