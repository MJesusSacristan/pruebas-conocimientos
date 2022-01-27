"use strict";

function passwordGuess() {
  //1- Generar una contraseña (número entero aleatorio del 0 al 100)
  let randomNumber = Math.round(Math.random() * 100);
  console.log("Contraseña: ", randomNumber);

  //El usuario tendrá 5 oportunidades de acertar
  for (let i = 0; i < 5; i++) {
    //2- Pedir al usuario que introduzca un número dentro de ese rango (prompt).
    let userNumber = prompt("Introduce un número entre el 0 y el 100");

    //3- Si el número introducido es igual a la contraseña, aparecerá en pantalla un mensaje
    //indicando que ha ganado (alert) y terminará la función; si no, volverá al paso 2.
    if (randomNumber === parseInt(userNumber)) {
      alert("¡Felicidades! El número introducido coincide con la contraseña.");
      return 1;
    }
    //EXTRA: Haz que después de cada intento fallido, el juego indique con un alert si el
    //numero buscado es mayor o menor al introducido.
    else if (randomNumber > parseInt(userNumber)) {
      alert("¡Cuidado! El número buscado es mayor que el introducido.");
    } else {
      alert("¡Cuidado! El número buscado es menor que el introducido.");
    }
  }

  //Si no consigue acertar, aparecerá un mensaje indicando que ha perdido (alert).
  alert("Game Over: No has acertado la contraseña. Vuelve a intentarlo.");
  return -1;
}

passwordGuess();
