var suma = 0;

// suma = suma + 1;
// suma = suma + 2;
// suma = suma + 4;
// suma = suma + 3;

// console.log(suma)

//FOR
for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
}
console.log('Variable suma: ', suma);

// WHILE
while (suma < 3) {
    suma = suma + 1;
    console.log(suma);
}; 

// DO WHILE
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"