const alunosA = [
    'arthur',
    'taynara',
    'ellen',
];
const notas = [
    10,
    9.5,
    8
];

const alunos_medias = [alunosA,notas];

console.log(
    `O(a) aluno da posição 1 da lista de alunos é: ${alunos_medias[0][1]}.
    A nota dessa aluna é ${alunos_medias[1][1]}`
);