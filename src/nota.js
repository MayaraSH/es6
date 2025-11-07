const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carla', nota: 9 },
    { nome: 'Diego', nota: 4 },
    { nome: 'Eduarda', nota: 7 },
    { nome: 'Felipe', nota: 6 },
    { nome: 'Gabriela', nota: 10 },
    { nome: 'Henrique', nota: 3 },
    { nome: 'Isabela', nota: 8 },
    { nome: 'João', nota: 5 }
];

const alunosAprovados = (lista) => lista.filter(({ nota }) => nota >= 6);

const aprovados = alunosAprovados(alunos);

console.log('Alunos aprovados:');
aprovados.forEach(({ nome, nota }) => console.log(`· ${nome} - Nota: ${nota}`));

