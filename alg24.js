//Problema 24
var hanoi = function ( n , from , to , aux ) {
    if ( n === 1 ) {
        console.log( 'Mover disco de' + desde + 'a' + hasta ) ;
        } else {
         hanoi ( n - 1 , desde , aux , hasta ) ;
         console.log ( 'Mover disco de' + desde + 'a' + hasta ) ;
         hanoi ( n - 1 , aux , a , desde ) ;
     }
     } ;
    
     hanoi ( 5 , 'A' , 'C' , 'B' ) ;