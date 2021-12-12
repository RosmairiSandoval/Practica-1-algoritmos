// Problema # 3: 

// 65 pulgadas
// 1 yarda es 36 pulgadas
// 1 pastel tiene 12 pulgadas
// 1 yarda 2 pies 5 pulgadas


// sesenta y cinco
// 65 -36 = 29 (1)
// 29. 2 * 12 = 29-24 = 5 (2)
// 5 pulgadas


const entrada  = 12 ;

const yardas  = 36 ;
const PIES = 12 ;

// División Modulo Math.floor 

const yardas = Matemáticas . piso ( entrada / YARDS ) ;

// 1.8 -> 1 
const resto_yardas = input % YARDS ;

const pies = Matemáticas . piso ( resto_yardas / PIES ) ;
const resto_pies = resto_yardas % PIES ;


consola . log ( `Yardas $ { yardas } Pies $ { pies }` )