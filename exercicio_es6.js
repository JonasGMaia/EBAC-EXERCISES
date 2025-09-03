class Alunos {
    nome = '';
    nota = '';
    constructor(nomeAluno, notaAluno){
        this.nome = nomeAluno;
        this.nota = notaAluno;
    }
}

const notasTurma = [];

function notas(nomeAluno, notaAluno){
    const aluno =  new Alunos(nomeAluno, notaAluno)
    notasTurma.push(aluno)
}


notas('josé', 8);
notas('aline', 9);
notas('Mia',7);
notas('karen', 10);
notas('josias', 4);
notas('Amanda',3)

const aprovados =  notasTurma.filter(function(aluno){
    return aluno.nota >= 6
})

console.log(notasTurma)
console.log(aprovados)

