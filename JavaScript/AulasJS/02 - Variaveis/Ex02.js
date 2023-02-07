//Operadores Bitwise: Utiliza os códigos binários

let n1 = 10
let n2 = 11

// Operador & (E): onde tiver 1 e 0 retorna 0 e 1 com 1 retorna 1. A mesma lógica do operador lógico &&
// ex.: 10 = 00001010, 11 = 00001011 -> 00001010 = 10
//let res = n1 & n2

//Operador | (Ou): onde tiver 1 e 0 vai retornar 1 e 1 com 1 retorna 1. A mesma lógica do operador lógico ||
//ex.: 10 = 00001010, 11 = 00001011 -> 00001011 = 11 
//let res = n1 | n2


//Operador ^ (Exclusivo) : onde tiver 0 e 1 retorna 1 e 1 com 1 retorna 0.
// ex: 13 = 00001101, 14 = 00001110 -> 00000011 = 3
//let res = n1 ^ n2


// Bitwise deslocando para <<(esquerda) ou >>(direita): Move a quantidade de bits escolhido de acordo com a direção.
//ex1.: 10 = 00001010 << 1 -> 00010100 = 20 ou << 2 -> 00101000 = 40
//ex2.: 10 = 00001010 >> 1 -> 00000101 = 5 ou >> 2 -> 00000010 = 2
let res = n1 >> 2

console.log(res)