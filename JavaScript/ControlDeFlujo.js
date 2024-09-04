function viajar(destino){
    if(destino === 'Brasil'){
        console.log('gire a la izquierda');
    } else if(destino === 'Argentina'){
        console.log('gire a la derecha')
    } else {
        console.log('Nos perdimos')
    }
}
viajar('Brasil');
viajar('Argentina');
viajar('Paraguay');

function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    console.log( false );
  }
  
  puedeManejar(17);

