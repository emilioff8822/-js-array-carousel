
const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
]


let contaImg = 0;
/* 
1 attraverso un ciclo stampo tutte le img in itemwrapper con la classe item
2 al primo item tolgo la classe hide
*/
  


//1

const itemsWrapper =document.querySelector('.items-wrapper')

for (let i = 0; i < images.length; i++){
 
  const image = images[i];
  console.log(image)
  
  itemsWrapper.innerHTML =+ `
  <img class="item" src="${image}">

  `

}

//2 prendo gli item 
// getElementsByClassName crea un array che contiene

const items = document.getElementsByClassName('item');
items[2].classList.remove('item');
