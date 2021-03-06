//Parte B - Hora do Jogo!
//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors

// var getShirtsColorsAmount = function (company) {
//   colors = company.products.shirts.colors;
//   return colors.length;
// };

const getShirtsColorsAmount = ({
  products: {
    shirts: {
      colors: {length},
    },
  },
}) => length;

//A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
const clothesArray = {
  pants: {colors: ['black', 'blue']},
  shirts: {colors: ['white', 'red']},
  socks: {colors: ['beige', 'gray']},
};

const {pants, ...rest} = clothesArray;

//Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const [a, ...array] = arr;

//A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
var persons = [
  {firstname: 'Malcom', lastname: 'Reynolds'},
  {firstname: 'Kaylee', lastname: 'Frye'},
  {firstname: 'Jayne', lastname: 'Cobb'},
];

const nomeCompleto = persons.map(
  (item) => `${item.firstname} ${item.lastname}`
);
