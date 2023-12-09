/* Variables para los dias */
let day_monday = document.getElementById('monday');
let day_tuesday = document.getElementById('tuesday');
let day_wednesday = document.getElementById('wednesday');
let day_thursday = document.getElementById('thursday');
let day_friday = document.getElementById('friday');
let day_saturday = document.getElementById('saturday');
let day_sunday = document.getElementById('sunday');
/* Variables para los montos */
let amount_monday = document.getElementById('bar-mon');
let amount_tuesday = document.getElementById('bar-tue');
let amount_wednesday = document.getElementById('bar-wed');
let amount_thursday = document.getElementById('bar-thu');
let amount_friday = document.getElementById('bar-fri');
let amount_saturday = document.getElementById('bar-sat');
let amount_sunday = document.getElementById('bar-sun');
/* URL para el acceso a los datos */
const url = 'data.json'

fetch(url)  /* Llamando a los datos */
  .then(Response => Response.json())  /* Parseando la respuesta a JSON */
  .then(function AssigningValues(Response){
    /* Asignando valores a los dias */
    day_monday.innerText = Response[0].day;    
    day_tuesday.innerText = Response[1].day;
    day_wednesday.innerText = Response[2].day;
    day_thursday.innerText = Response[3].day;
    day_friday.innerText = Response[4].day;
    day_saturday.innerText = Response[5].day;
    day_sunday.innerText = Response[6].day;
    /* Guardando los valores de los montos */
    amount_monday = Response[0].amount;    
    amount_tuesday = Response[1].amount;
    amount_wednesday = Response[2].amount;
    amount_thursday = Response[3].amount;
    amount_friday = Response[4].amount;
    amount_saturday = Response[5].amount;
    amount_sunday = Response[6].amount;
  })
  .catch(err => {
    console.log(err);   /* Imprimiendo errores de la llamada- */
  });
  