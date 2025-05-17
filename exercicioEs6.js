function arrayObjects(aluno, nota) {
    this.aluno = aluno;
    this.nota = nota;
    this.aprovado = function() {
        if (this.nota >= 6) {
            return console.log(`${this.aluno} está aprovado com a nota ${this.nota}`);
        }
    };
}

const alunos = [
    new arrayObjects('João', 7),
    new arrayObjects('Maria', 5),
    new arrayObjects('Pedro', 8),
    new arrayObjects('Ana', 4),
]

const alunosAprovados = alunos.filter(aluno => aluno.aprovado());
console.log(alunosAprovados);