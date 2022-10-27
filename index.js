// const arrayVazia = [];

// console.log(arrayVazia)
// console.log(arrayVazia.length)

// const arrayVazia = [];
// console.log(arrayVazia[0])

// const arrayVazia = [,,,];
// console.log(arrayVazia.length)
// console.log(arrayVazia[0])
// console.log(arrayVazia[1])
// console.log(arrayVazia[2])

// const arrayVazia = [,,,];
// console.log(arrayVazia.length)
// arrayVazia.push(50)
// console.log(arrayVazia)
// console.log(arrayVazia.length)

// const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
// const arrayConcat = arrayOriginal.concat("André", "Fernanda")

// console.log(arrayConcat)
// console.log(arrayOriginal)

// const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
// const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

// console.log(arrayConcat)
// console.log(arrayOriginal)

// const arrayOriginal = [50, 60, 70]
// const arrayConcat = arrayOriginal.concat([80, [90, 100]])

// console.log(arrayConcat)
// console.log(arrayOriginal)

// const notas1 = [10 , 6.5, 8 ,7.5]
// const notas2 = [9  , 6  , 6]
// const notas3 = [8.5, 9.5]

// const notasGerais = [notas1,notas2,notas3]

// let media = 0

// for (let i = 0; i < notasGerais.length; i++) {
//     for (let j = 0; j < notasGerais[i].length; j++) {
//       media += notasGerais[i][j]/notasGerais[i].length;
//     }
//   }

// media = media/notasGerais.length
// console.log(media)

// const arrayNums = [1, 2, 3, 4]

// function multiplicaPorDez(num) {
//   return num*10
// }
//const arraySomada = arrayNums.map(multiplicaPorDez)

// const arraySomada = arrayNums.map(num => num*10)
// console.log(arraySomada)


const numeros = [43, 50, 65, 12]

//const soma = numeros.reduce((acum, atual) => atual + acum, 0)

// const soma = numeros.reduce(function (acum, atual) {
//     return atual + acum
//    }, 0)

function operacaoNumerica(acum, atual) {
    return atual + acum
}   
const soma = numeros.reduce(operacaoNumerica, 0)   

console.log(soma) 