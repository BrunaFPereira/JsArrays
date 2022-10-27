const alunos = ["João", "Juliana", "Caio", "Ana"]
const mediaAluno = [10, 7, 9, 6]

let listaNotaAluno = [alunos, mediaAluno]

//console.log(`${listaNotaAluno[0][0]}, sua média é ${listaNotaAluno[1][0]}`)

const exibeNotaAluno = (nomeDoAluno) => {
    if (listaNotaAluno[0].includes(nomeDoAluno)) {
        let indice = listaNotaAluno[0].indexOf(nomeDoAluno)
        return listaNotaAluno[0][indice] + ", sua média é " + listaNotaAluno[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNotaAluno("Caio"))