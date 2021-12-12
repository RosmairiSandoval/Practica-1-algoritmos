//Problema 11
var poblacion = 0 ;
 poblacion = parseInt ( prompt ( "Digite el numero de la poblacion actual" ) ) ;
 var natalidad = 0 ;
 natalidad = parseInt ( prompt ( "Digite el número de la tasa de natalidad" ) ) ;
 var mortalidad = 0 ;
 mortalidad = parseInt ( prompt ( "Digite el numero de la tasa de mortalidad" ) ) ;
 
 natalidad = natalidad / 100 ;
 mortalidad = mortalidad / 100 ;
 mortalidad = mortalidad * 10 ;
 natalidad = natalidad * 10 ;
 poblacion = poblacion - mortalidad ;
 poblacion = poblacion + natalidad ;
 
 documento . write ( "Poblacion Dentro de 10 años =" + poblacion ) ;