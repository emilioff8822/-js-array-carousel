
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
5al lick next decrementa il contatore e a quell indice rimuovi hide

6 bisogna nascondere il tasto prev di default e mostrarlo solo al click di next

7 quando il contatore e uguale della lunghezza array delle img -1 aggiungi hide a next

8 al click di prev tolgo hide al next
9 al click di prev se il contatore e 0 aggiungo hide a prev

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

// 6
btnPrev.classList.add('hide');

const items = document.getElementsByClassName('item');
items[contaImg].classList.remove('hide');


btnNext.addEventListener('click', function ()){
//3

  items[contaImg].classList.add('hide');
//4

contaImg++;

items[contaImg].classList.remove('hide');

//6
btnPrev.classList.remove('hide');

//7 

if (contaImg === images.length - 1){
  btnNext.classList.add('hide');
}



}

btnPrev.addEventListener('click', function ()){
  //3
  
    items[contaImg].classList.add('hide');
  //4
  
  contaImg--;
  
  items[contaImg].classList.remove('hide');
  
  
  //8
  btnNext.classList.remove('hide');

  //9
  if(contaImg ===0){
    btnPrev.classList.add('hide')
  }
  
  }