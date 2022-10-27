const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPy = [7, 3.5, 8, 9.5]

function mediaSala(notasSala) {
    const somaNotas = notasSala.reduce((acum,atual) => acum+atual,0)
    return somaNotas/notasSala.length
}

console.log(`A média da sala de Javascript é: ${mediaSala(salaJs)}`)
console.log(`A média da sala de Java é: ${mediaSala(salaJava)}`)
console.log(`A média da sala de Python é: ${mediaSala(salaPy)}`)

const notas = [10, 6.5, 8, 7]
const media = notas.reduce((acum,atual) => acum+atual,0) / notas.length
console.log(media)