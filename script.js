
const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
]


const itemsWrapper =document.querySelector('.items-wrapper')
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

let contaImg = 0;
/* 
1 attraverso un ciclo stampo tutte le img in itemwrapper con la classe item
2 al primo item tolgo la classe hide
3 al click next o prev aggiunge la classe item all elemento corrente in modo da farlo comparire
4al lick next incrementa il contatore e a quell indice rimuovi hide
4al lick next decrementa il contatore e a quell indice rimuovi hide
*/
  


//1



for (let i = 0; i < images.length; i++){
 
  const image = images[i];
  console.log(image)
  
  itemsWrapper.innerHTML =+ `
  <img class="item hide" src="${image}">

  `

}

//2 prendo gli item 
// getElementsByClassName crea un array che contiene

const items = document.getElementsByClassName('item');
items[contaImg].classList.remove('hide');



btnNext.addEventListener('click', function ()){
//3

  items[contaImg].classList.add('hide');
//4

contaImg++;

items[contaImg].classList.remove('hide');




}

btnPrev.addEventListener('click', function ()){
  //3
  
    items[contaImg].classList.add('hide');
  //4
  
  contaImg--;
  
  items[contaImg].classList.remove('hide');
  
  
  
  
  }