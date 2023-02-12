//Operador Spread [...];

// let n1 = [10,20,30]
// let n2 = [11,22,33,45,56]
// let n3 = [...n2,...n1]
// console.log(n3)


//Utilizando com Objetos;
// const players = {stamina: 100, life: 10}
// const player1 = {name:'Warrior',...players,magic:'Fire', veloc:12}
// const player2 = {name:'Archer',...players, magic:'Nature', veloc:9}
// console.log(player2)
// console.log(player1)

//Utilizando em Funções;
// const soma=(v1,v2,v3)=>{
//     return v1+v2+v3
// } 
// let valores = [1,5,6,4]
// console.log(soma(...valores))



//Utilizando com HTML:
const objs1= document.getElementsByTagName('div');

//Aqui vamos poder manipular o html como array, adicionando e retirando valores
const objs2= [...document.getElementsByTagName('div')];

objs2.forEach(element=>{
    element.innerHTML += ' o melhor'
});

console.log(objs1);
console.log(objs2);
