//Problema 14
var grafArr = function ( arr , num , car ) {
     var max = Matemáticas . máx . aplicar ( nulo , arr ) ;
     var min = Matemáticas . min . aplicar ( nulo , arr ) ;
     var escala = 10 / ( max - min ) ;
     var str = "" ;
     for(var i = 0 ; i < num ; i ++ ) {
     str += coche ;
     for (var j = 0 ; j < escala * ( arr [ i ] - min ) ; j ++ ) {
     str += coche ;
     }
     str += "\ n" ;
     }
     return str ;
     }
    
     console.log( grafArr ( [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] , 10 , "+" ) ) ;