//Parte A - Aquecimento Arrow Function

//Transforme as funções declarativas abaixo em Arrow Functions
const upperName = (name) => name.toUpperCase();

const myFunction = (p1, p2) => p1 * p2;

const toCelsius = (fahrenheit) => (5 / 9) * (fahrenheit - 32);

//Destructuring - Desestruturação
//Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
function handleMouseMove({clientX, clientY}) {
  console.log(clientX, clientY);
}

//A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
const obj = {first: 'Jane', last: 'Doe'};

const {first} = obj;

//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
company = {
  name: 'ACME Corp',
  address: 'Nowhere st',
  products: {
    shirts: {
      colors: ['red', 'green', 'blue'],
    },
    socks: {
      colors: ['cyan', 'magenta', 'yellow'],
    },
  },
};
const {
  name,
  products: {
    shirts: {colors},
  },
} = company;

//Rest & Spread
//Utilizando um operador clone o objeto c​lothes
const clothes = {
  pants: {colors: ['black', 'blue']},
  shirts: {colors: ['white', 'red']},
  socks: {colors: ['beige', 'gray']},
};

const spreadClothes = {...clothes};

//Novamente utilizando um operador, clone o objeto c​ lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks

const otherClothes = {
  ...clothes,
  shoes: {colors: ['yellow', 'purple']},
};

//Arrays e seus métodos
//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
var numbers = [4, 9, 16, 25];

const square = numbers.map(Math.sqrt);

//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers = [65, 44, 12, 4];

const multipliedNumbers = numbers.map((num) => num * 10);

//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
var ages = [32, 33, 16, 40];

const filteredAges = ages.filter((age) => age >= 18);

//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog',
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog',
  },

  {
    name: 'Red',
    age: 1,
    type: 'cat',
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog',
  },
];

const dogs = data.filter((animal) => animal.type === 'dog');

//Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​

const calcAge = dogs.reduce((sum, animal) => {
  return sum + animal.age;
}, 0);
