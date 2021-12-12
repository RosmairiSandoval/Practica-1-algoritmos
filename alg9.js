//Problema 9
const ventanaDeslizante  = ( arr , k ) => {
     "vamos a empezar" = 0 ;
     let max = 0 ;
     var suma = 0 ; 

     for ( let final = 0 ; final < arr . longitud ; extremo ++ ) {
     suma += arr [ fin ] ;
     if( fin >= k - 1 ) {
     max = Matemáticas . max ( max ,  suma ) ;
     suma -= arr [ inicio ] ;
     inicio ++ ;
     }
     }
     console.log(max) ;
     return max ;
    
    }
    
    ventanaDeslizante ( [ 2 , 1 , 5 , 1 , 3 , 2 ] , 3 ) 