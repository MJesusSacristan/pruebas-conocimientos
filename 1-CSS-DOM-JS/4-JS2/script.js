"use strict";

/*
   Crear una función que recibe un array de objetos (equipos y puntos conseguidos).
   Entrada:
      [
        {
          equipo: "Toros Negros",
          puntos: [1, 3, 4, 2, 10, 8],
        },
        {
          equipo: "Amanecer Dorado",
          puntos: [8, 5, 2, 4, 7, 5, 3],
        },
      ];
      
   Y devuelve un nuevo array con un nuevo objeto por cada elemento del array original.
   Ese nuevo objeto tendrá el nombre y el total de puntos del equipo correspondiente.
   Salida:
      [
        {
          equipo: "Toros Negros",
          puntosTotales: 28,
        },
        {
          equipo: "Amanecer Dorado",
          puntosTotales: 34,
        },
      ];
*/

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];

//Las etiquetas dentro de cada objeto son "equipo" y "puntos"
//Los valores asociados a esas etiquetas son una cadena de caracteres y un array de números
//Como pide devolver un nuevo array, se puede hacer una copia del array original y manipularlo
//o crear un array vacío y hacer "push".
//Para pasar de un array de números a la suma de todos ellos, habrá que aplicar un "reduce"
//La etiqueta de la puntuación pasa a ser "puntosTotales"

function calcularPuntuacionTotal(arr) {
  let newArray = [];
  let newObject;

  //Por cada elemento del array original
  for (let i = 0; i < arr.length; i++) {
    //Creo un nuevo objeto
    newObject = {
      //Conservando la etiqueta y el valor de "equipo"
      equipo: arr[i].equipo,
      //Creando la etiqueta "puntosTotales" y calculando la suma de los elementos
      //del array de puntos mediante "reduce"
      puntosTotales: arr[i].puntos.reduce((acc, puntuacion) => {
        return acc + puntuacion;
      }),
    };
    //Incorporo el nuevo objeto en el nuevo array
    newArray.push(newObject);
  }
  //Devuelvo el nuevo array
  return newArray;
}

console.log("Array resultante: ", calcularPuntuacionTotal(puntuaciones));
