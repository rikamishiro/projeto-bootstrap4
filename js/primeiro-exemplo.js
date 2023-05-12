// const

const minhaString1 = 'String entre aspas simples.';
const minhaString2 = "String entre aspas duplas.";
const minhaString3 = 'strings: ' + minhaString1 + '\nstrings: ' + minhaString2;
const minhaString4 = `
string1: ${minhaString1}
string2: ${minhaString2}
`;

console.log(minhaString4);

const meuNumber = 1111;
console.log(typeof meuNumber);

const meuBoolean = true;
console.log(typeof meuBoolean);

const meuArray = [ 0, true, '2'];
console.log(meuArray);

const meuNull = null;

const objLiteral = {
  chaveA: 'Primeiro valor',
  chaveB: meuNumber,
  chaveC: meuArray,
};
console.log(objLiteral);

// function

const minhaConst = ['ZERO', 'UM'];
console.log(minhaConst[0]);
funcaoNomeada();

function funcaoNomeada(){
  console.log('Olá mundo!');
}

const minhaFuncao = function(){
  console.log('Função sem nome');
}
