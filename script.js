const corpo = document.querySelector('body');
const cabecalhoCreate = document.createElement('header');
const tituloCreate = document.createElement('h1');
corpo.appendChild(cabecalhoCreate);
document.querySelector('header').id = 'cabecalho';
const cabecalho = document.querySelector('#cabecalho');
cabecalho.appendChild(tituloCreate);
const h1Cabecalho = document.querySelector('h1');
h1Cabecalho.id = 'title';
h1Cabecalho.innerText = "Paleta de Cores";
const principal = document.createElement('main');
const palheta = document.createElement('ul');
corpo.appendChild(principal);
const mainLocal = document.querySelector('main');
const secao = document.createElement('section');
mainLocal.appendChild(secao);
const sectionLocal = document.querySelector('section');
for (let i = 0; i <= 3; i += 1) {
  const div = document.createElement('div');
  div.classList.add('color');
  sectionLocal.appendChild(div);
}
sectionLocal.firstElementChild.classList.add('black');
sectionLocal.firstElementChild.style.backgroundColor = 'black';
sectionLocal.firstChild.nextSibling.classList.add('red');
sectionLocal.firstChild.nextSibling.style.backgroundColor = 'red';
sectionLocal.lastElementChild.previousSibling.classList.add('blue');
sectionLocal.lastElementChild.previousSibling.style.backgroundColor = 'blue';
sectionLocal.lastElementChild.classList.add('green');
sectionLocal.lastElementChild.style.backgroundColor = 'green';

document.querySelector('section').id = 'color-palette';
mainLocal.appendChild(palheta);
document.querySelector('ul').id = 'pixel-board';
mainLocal.style.width = '600px';
mainLocal.style.height = '600px';

// second step //
for (let i = 1; i <= 25; i += 1) {
  const elemento = document.createElement('li');
  elemento.classList.add('pixel');
  document.querySelector('#pixel-board').appendChild(elemento);
}

function selecionaCor() {
  const localDeTrabalho = document.querySelector('#color-palette');
  localDeTrabalho.addEventListener('click', (event) => {
    if (document.querySelector('.selected')) {
      document.querySelector('.selected').classList.remove('selected');
    }
    if (event.target === document.querySelector('#color-palette')) {
      document.querySelector('#color-palette').classList.remove('selected');
    }
    else {
      event.target.classList.add('selected');
    }
  });
}

function preenchePixels() {
  const localDeTrabalho = document.querySelector('ul');
  localDeTrabalho.addEventListener('click', (event) => {
    if (event.target === localDeTrabalho) {
      localDeTrabalho.style.backgroundColor = '';
    }
    else {
      event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor; 
    }
  });
}
// botao reset //
const secaoBotoes = document.createElement('section');
secaoBotoes.id = 'secaoBotoes';
mainLocal.appendChild(secaoBotoes);
const secaoBotoesLocal = document.querySelector('#secaoBotoes');
const botaoCreate = document.createElement('button');
botaoCreate.innerText = 'Limpar';
botaoCreate.classList.add('botao');
botaoCreate.id = 'clear-board';
secaoBotoesLocal.appendChild(botaoCreate);
document.querySelector('button').addEventListener('click', () => {
  const linhas = document.querySelectorAll('li');
  for (const linha of linhas) {
  linha.style.backgroundColor = '';
  }
});
const botaoAleatorio = document.createElement('button');
botaoAleatorio.id = 'button-random-color';
botaoAleatorio.innerText = 'Cores Aleatórias';
botaoAleatorio.classList.add('botao');
secaoBotoesLocal.appendChild(botaoAleatorio);
botaoAleatorio.addEventListener('click', corAleatoria);
function corAleatoria () {
  for (let i = 0; i < 4; i += 1) {
    const elemento = document.querySelectorAll('.color');
    const randomRed = Math.round(Math.random() * 253);
    const randomGreen = Math.round(Math.random() * 253);
    const randomBlue = Math.round(Math.random() * 253);
    console.log(randomBlue,randomGreen,randomRed);
    elemento[i].style.backgroundColor = `rgb(${randomRed},${randomBlue},${randomGreen})`;
  }
}

window.onload = () => {
  selecionaCor();
  preenchePixels();
};
