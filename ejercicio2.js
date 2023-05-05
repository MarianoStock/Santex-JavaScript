/* EJERCICIO 2
Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos*/

function coinciden(lista1, lista2) {
    return lista1.filter(elemento => lista2.includes(elemento));
  };

let lista1 = ['rojo', 'azul', 'amarillo'];
let lista2 = ['blanco', 'negro', 'rojo'];
let resultado = coinciden(lista1, lista2);
  console.log(resultado);
  
lista1 = [4, 3, true, 'manzana'];
lista2 = ['pera', 3, false, true, 3, true];
resultado = coinciden(lista1, lista2);
console.log(resultado); 

lista1= ['Mercedes Benz', 'Ford', 'Renault'];
lista2= ['Volkswagen', 'Renault', 'Fiat'];
resultado= coinciden(lista1, lista2);
console.log(resultado);


