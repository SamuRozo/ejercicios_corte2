
const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);



const boleta = 7500;
let balance1 = 0;
let balance2 = 0;


//La función muestra la cantidad de asientos disponibles u ocupados
function verDisponibilidad() {
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}

//La función solicita una sala o número de asiento para el usuario, mostrando si el asiento se encuentra ocupado o no
//o si la sala seleccionada es inválida
function reservarAsiento() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;

  if (sala === "1" && !sala1[asiento]) {
    sala1[asiento] = true;
    balance1 += boleta;
    alert(`Asiento ${asiento + 1} de la sala 1 reservado.`);
  } else if (sala === "2" && !sala2[asiento]) {
    sala2[asiento] = true;
    balance2 += boleta
    alert(`Asiento ${asiento + 1} de la sala 2 reservado.`);
  } else {
    alert("El asiento ya está reservado o la sala no es válida.");
  }
}

//La función muestra la cantidad de asientos disponibles en cada sala, o si todos los asientos en una sala están reservados
function verPelicula() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento) : sala2.filter(asiento => !asiento);

  if (asientosLibres.length > 0) {
    alert(`Hay ${asientosLibres.length} asientos libres en la sala ${sala}.`);
    alert("Disfrutad de la película!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`);
  }
}


while (true) {
  console.log("hola")
  const opcion = prompt("Ingresa tu opción:Bienvenido a la sala de cine"+ " \nSelecciona una opción:" +"1. Ver disponibilidad de asientos"+ 
  " 2. Reservar asiento"+ " 3. Ver ocupación sala" + " 4. Salir" + " 5. Ver el balance de las salas");

  switch (opcion) {
    case "1":
      verDisponibilidad();
      break;
    case "2":
      reservarAsiento();
      break;
    case "3":
      verPelicula();
      break;
    case "4":
      alert("¡Hasta luego!");
        break;
    case "5":
      salasbalance();
      break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}

//La función muestra el balance de cada sala y el balance general de ambas salas
function salasbalance(){
  const totalsala1 = balance1;
  const totalsala2 = balance2;
  const total_engeneral = totalsala1 + totalsala2;

  alert(`El Balance de la sala 1 es: $${totalsala1}`);
  alert(`El Balance de la sala 2 es: $${totalsala2}`);
  alert(`El Balance general de ambas salas es: $${total_engeneral}`);
}