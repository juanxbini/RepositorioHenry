// Lista de compras
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

// Ver lista de compras
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

// Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);

// METODOS 

var colores = ['amarillo', 'azul'];

// Agrega un elemento al final del arreglo. Devuelve la nueva longitud
colores.push('rojo')
console.log(colores)

// Agrega un elemento al inicio del arreglo. Devuelve la nueva longitud
colores.unshift('verde')
console.log(colores)

// Eliminar el ultimo elemento. Devuelve el ultimo elemento
colores.pop()
console.log(colores)

// Elimina el primer elemento. Devuelve el primer elemento
colores.shift()
console.log(colores)

// OTROS METODOS

// Determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false
var pintores = ["Picazzo", "Velasquez", "Van Gogh", "Dali"];
var incluyeDali = pintores.includes("Dali");
console.log(incluyeDali);

// Determina si todos los elementos de un arreglo cumplen con las condiciones. Devuelve true o false
var numeros = [1 ,6 ,8 ,9];
var cumpleCondicion = numeros.every((num) => {
    return num > 5;
} );
console.log(cumpleCondicion);

// Convierte un string en una arreglo
// Separar el string en elementos de un arreglo y cambiar la ultima letra. 
// Las comillas vacias le indican al metodo que separe la palabra por cada caracter
// Si pusieramos entre comillas 'a' va a separar la palabra cuando encuentre la letra 'a'.
var palabra = 'Henri';
var palabraSeprada = palabra.split('');

// Borramos la letra 'i'
palabraSeprada.pop();
// Agregamos al final la letra 'y'
palabraSeprada.push('y');

//Convertir en un string nuevamente
//Las comillas indican que junta todos los caracteres y no deja espacios vacios.
palabraSeprada.join('')

console.log(palabraSeprada); 

// METODOS DE RECORRIDO

// forEach
// Realiza alguna accion en cada iteracion, pero no hara ninguna cambio sobre el mismo
var numeros2 = [1,2,3,4];
numeros2.forEach(num => console.log(num))

numeros2.forEach((num) => {
    if(num === 3){
        console.log(num);
    }
});

// Map 
// Crea una copia del elemento original y podemos hacer cambios en cada iteracion sobre el.
var masUno = numeros.forEach(num => {
    return num + 1;
});
console.log(masUno);

// CICLOS

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr);




