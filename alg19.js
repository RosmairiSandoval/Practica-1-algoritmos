//Problema 19

var a = 0 ;
var b = 0 ;
var c = 0 ;
var contador = 0 ;

function Pitágoras ( a , b , c ) {
    if ( a * a + b * b == c * c ) {
     contador ++ ;
     console.log ( a + "² +" + b + "² =" + c + "²" ) ;
     }
}

Pitágoras ( 3 , 4 , 5 , 2 , 1 ) ;