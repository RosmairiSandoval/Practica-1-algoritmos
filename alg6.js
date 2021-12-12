//problema 6
const interes = 4 ;
const capital  = 500 ;
const meses  = 2 ;
 var resultado = capital ;

 function calcularInteres ( interes , capital , Meses ) {
 for( let i = 0 ; i < meses ; ++ i ){

resultado += resultado * ( interes / 100 ) ;
}
let resultado ;

 }


console.log( calcularInteres ( interes , capital , meses ) ) ;