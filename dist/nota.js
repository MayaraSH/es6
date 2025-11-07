"use strict";

var alunos = [{
  nome: 'Ana',
  nota: 8
}, {
  nome: 'Bruno',
  nota: 5
}, {
  nome: 'Carla',
  nota: 9
}, {
  nome: 'Diego',
  nota: 4
}, {
  nome: 'Eduarda',
  nota: 7
}, {
  nome: 'Felipe',
  nota: 6
}, {
  nome: 'Gabriela',
  nota: 10
}, {
  nome: 'Henrique',
  nota: 3
}, {
  nome: 'Isabela',
  nota: 8
}, {
  nome: 'João',
  nota: 5
}];
var alunosAprovados = function alunosAprovados(lista) {
  return lista.filter(function (_ref) {
    var nota = _ref.nota;
    return nota >= 6;
  });
};
var aprovados = alunosAprovados(alunos);
console.log('Alunos aprovados:');
aprovados.forEach(function (_ref2) {
  var nome = _ref2.nome,
    nota = _ref2.nota;
  return console.log("\xB7 ".concat(nome, " - Nota: ").concat(nota));
});