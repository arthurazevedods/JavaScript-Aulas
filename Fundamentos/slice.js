const alunos = [
    'arthur',
    'taynara',
    'ellen',
    'martins',
    'azevedo',
    'silva',
    'sousa',
    'souza'
]

const sala1 = alunos.slice(0,alunos.length/2); 
const sala2 = alunos.slice(alunos.length/2,alunos.length); 
console.log(sala1);
console.log(sala2);