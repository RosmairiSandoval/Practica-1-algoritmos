// problema 8
var trigo = 1 ;
var total = 0 ;
function pesar ( ) {
 for ( let i = 1; i <= 64 ; i ++) {
 total += trigo ;
 trigo *= 2 ;
 }
 console.log( total ) ;
}
pesar ( 1 ) ;