const figcaptionMon = document.getElementById("figcaption-mon");

async function obtenerData(){
  const response = await fetch("data.json");
  const json = await response.text();
  const value = JSON.parse(json);
  /* let valor = value[0];
  console.log(valor.day); */
  return value;
}

/* const array = obtenerData(); */

function asignarValores(array) {
  console.log(array);
  /* figcaptionMon.innerText = value; */
}

asignarValores(obtenerData());