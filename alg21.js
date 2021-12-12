//Problema 21

var matriz = [ 1 , 2 , 3 , 4 , 6 ] ;
var suma = 6 ;
function searchPair ( matriz , suma ) {
    var i = 0 ;
    var j = matriz . longitud - 1 ;
    while ( i < j ) {
     if ( matriz [ i ] + matriz [ j ] == suma ) {
     volver [ i , j ] ;
    } else if ( matriz [ i ] + matriz [ j ] < suma ) {
     i ++ ;
     } else {
     j --;
     }
    }
}
consola . log ( searchPair ( matriz ,  suma ) ) ;