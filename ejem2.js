
const rooms = [100, 101, 102, 103, 201, 202, 203, 301, 302, 303];
const roomStatus = Array(10).fill(false);
const roomReservations = {};


//La función muestra en pantalla si una habitación x se encuentra disponible o no, mostrando l nombre de la habitación
//y el nombre de la persona que ha reservado la habitación
const reserveRoom = (roomNumber, name) => {
  const index = rooms.indexOf(roomNumber);
  if (index !== -1 && roomStatus[index] === false) {
    roomStatus[index] = true;
    roomReservations[roomNumber] = name;
    alert(`La habitación ${roomNumber} ha sido reservada por ${name}.`);
  } else {
    alert(`La habitación ${roomNumber} ya está reservada.`);
  }
};


//La función permite liberar una habitación y mostrar en pantalla que esta ya fue liberada.
//Además, muestra si una habitación ya se encuntra libre.
const freeRoom = (roomNumber) => {
  const index = rooms.indexOf(roomNumber);
  if (index !== -1 && roomStatus[index] === true) {
    roomStatus[index] = false;
    delete roomReservations[roomNumber];
    alert(`La habitación ${roomNumber} ha sido liberada.`);
  } else {
    alert(`La habitación ${roomNumber} ya está libre.`);
  }
};


//La función muestra la cantidad de habitaciones disponibles o si ninguna habitación se encuentra
//disponible
const showAvailableRooms = () => {
  const availableRooms = rooms.filter((room, index) => {
    return roomStatus[index] === false;
  });

  if (availableRooms.length > 0) {
    alert(`Las habitaciones disponibles son: ${availableRooms.join(', ')}`);
  } else {
    alert('No hay habitaciones disponibles.');
  }
};

//La función muestra en pantalla la cantidad de habitaciones disponibles y la cantidad de habitaciones reservadas.
const showOccupancy = () => {
  const availableRooms = rooms.filter((room, index) => {
    return roomStatus[index] === false;
  });
  const reservedRooms = rooms.filter((room, index) => {
    return roomStatus[index] === true;
  });
  alert(`Hay ${availableRooms.length} habitaciones disponibles y ${reservedRooms.length} habitaciones reservadas.`);
};


//La función muestra una lista de opciones, siendo estas:
// 1. Reservar una habitación
// 2. Liberar una habitación
// 3. Consultar ocupación
// 4. Salir del sistema
const handleUserInput = () => {
  let userInput;
  do {
  
    userInput = prompt('Menú \n' + '1. Reservar una habitación '+ 
    ' 2. Liberar una habitación'+
    ' 3. Consultar ocupación' +
  ' 4. Salir');

    switch (userInput) {
      case '1':
        const roomNumber = parseInt(prompt('Ingrese el número de la habitación:\n[100, 101, 102, 103, 201, 202, 203, 301, 302, 303]:'));
        if (!isNaN(roomNumber) && rooms.includes(roomNumber)) {
          const name = prompt('Ingrese su nombre:');
          reserveRoom(roomNumber, name);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;
      case '2':
        const roomNumberToFree = parseInt(prompt('Ingrese el número de la habitación que desea liberar:'));
        if (!isNaN(roomNumberToFree) && rooms.includes(roomNumberToFree)) {
          freeRoom(roomNumberToFree);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;
      case '3':
        showOccupancy();
        break;
      case '4':
        alert('Saliendo...');
        break;
      default:
        alert('Opción inválida. Intente de nuevo.');
        break;
    }
  } while (userInput !== '4');
};

// Ejecutar la función para manejar la interacción con el usuario
handleUserInput();