// Problema 10
var eqcuad = function ( a , b , c ) {
    var x = ( - b + Math . sqrt ( Math . pow ( b , 2 ) - 4 * a * c ) ) / ( 2 * a ) ;
    var y = ( - b - Math . sqrt ( Math . pow ( b , 2 ) - 4 * a * c ) ) / ( 2 * a ) ;
    return x ;
    }
    
    consola . log ( eqcuad ( 1 ,  - 5 ,  6 ) ) ;