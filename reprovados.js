const alunos = ["Ana", "Marcos", "Maria", "Mauro"]
const notas = [7, 4.5, 8, 7.5]

const reprovados = alunos.filter((alunos, indice) => notas[indice] <6)

console.log(`Os reprovados foram: ${reprovados}`)