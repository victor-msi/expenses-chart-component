const days = document.getElementsByClassName('day');        /* Array para los dias */
const cards = document.getElementsByClassName('card-bar');  /* Array para los cards */
const amounts = document.getElementsByClassName('amount');  /* Array para los montos */
const url = 'data.json'                                     /* URL para obtener los datos */

/* Parseando los array de elmentos HTML, en arrays normales para poder utilizar operaciones de arreglos */
const arrDays = Array.from(days);    
const arrCards = Array.from(cards);   
const arrAmounts = Array.from(amounts); 

fetch(url)
.then(Response => Response.json())                        /* Parseando la respuesta a JSON */
.then(Response => {
  arrDays.forEach((element, index) => {   
    element.innerText = Response[index].day;            /* Asignando el nombre de los dias obtenidos de la URL (Json) */
  });
  arrCards.forEach((monto, index) => {
    if (!isNaN(Response[index].amount) && Response[index].amount >= 0) {
      monto.style.height = Response[index].amount*2.3 + 'px';    /* Asignando el tamaño de los cards */
    }
  });
  return Response
})
.then(Response => {
  arrCards.forEach((card, index) =>{
    card.addEventListener('mouseover', (event)=>{   
      card.style.opacity = '.6'
      let id = event.target.getAttribute('id');     /* Obteniendo el id del elemento HTML que esta activando el evento hover */
      let amount
      if (Response[index].day == id)                /* Condicon que iguala el dia de la Respuesta con el id del elemento que activo el evento */
        amount = Response[index].amount
      arrAmounts[index].innerText = '$'+amount;         /* Asignando el amount al div correcto */
      arrAmounts[index].style.display = 'block'     /* Mostrando el div */
    })
    card.addEventListener('mouseout', ()=>{
      card.style.opacity = '1';                     
      arrAmounts[index].style.display = 'none'      /* Ocultando el div */
    })
  });
})
.catch(err => {
  console.log(err);   
});