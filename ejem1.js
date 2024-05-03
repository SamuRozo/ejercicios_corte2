const denominations = [50000,20000,10000,5000, 2000, 1000];

//La función permite ingresar una cantidad de dinero para rtirar
function getWithdrawalAmount() {
  const userInput = prompt("¿Cuánto dinero deseas retirar  ?");
  return parseFloat(userInput);
}

//Función que retorna  la cantidad de dinero restane luego de realizar el cociente  entre el monto a retirar y la denominación
function calculateBilletsNeeded(amount) {
  return denominations.map(denomination => {
    const billetsNeeded = Math.floor(amount / denomination);
    amount -= billetsNeeded * denomination;
    return billetsNeeded;
  });
}

//Función que permite retornar la cantidad de dinro a retirar
function isValidWithdrawalAmount(amount) {
  return amount > 0 && amount % 1 === 0;
}

//La función permite mostrar si la cantidad de dinero solicitada es válida y, además,
//la cantidad de dine requerida para realizar el retiro de la cantidad solicitada
function ATMTransaction() {
  const withdrawalAmount = getWithdrawalAmount();

  if (!isValidWithdrawalAmount(withdrawalAmount)) {
    alert("El monto solicitado no es válido.");
    return;
  }

  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount);

  alert("Para retirar $" + withdrawalAmount + ", necesitas:");
  denominations.forEach((denomination, index) => {
    if (billetsNeeded[index] > 0) {
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination);
    }
  });
}


ATMTransaction();