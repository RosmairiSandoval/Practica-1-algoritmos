//Problema 22
var matriz = [ 2 , 3 , 3 , 3 , 6 , 9 , 9 ] ;
function eliminarDuplicados ( array ) {
 var i = 0 ;
 var j = 1 ;
 var aux = 0 ;
 while ( j < matriz . longitud ) {
 if ( matriz [ i ] == matriz [ j ] )  {
 j ++ ;
 } else {
 i ++ ;
 matriz [ i ] = matriz [ j ] ;
 j ++ ;
 }
 }
 aux = i + 1 ;
 return aux ;
}
consola . log ( eliminarDuplicados ( matriz ) ) ;