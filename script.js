// const question = [confirm('Do you want by book?')]; 


// const answers = []; //Контейнер
// let name = prompt("Print your name");
// answers.push(name); //Метод push додає новий елемент(-и) в кінець масиву
// let age = prompt("Who old are yot");
// answers.push(age); //Метод push додає новий елемент(-и) в кінець масиву
// console.log(answers);


// const shop = ["apple", "sumsung", "lg", "xiaomi"]; //Елементы масива
// let index = prompt("Enter element index:");

// if (index === "length") {
//    console.log(shop.length); //Если вводим lenght, получаем длину масива
// } else {
//    console.log(shop[index]); //Номер в масиве и наименование 
// };


// let shop = ["apple", "sumsung", "lg", "xiaomi"];
// let index = prompt("Enter element index, whitch one do you want to change:"); //Уточняем индекс элемента масива, который хотим изменить 
// let value = prompt("Enter new element index:"); //Вводим новое значение элемента
// shop[index] = value;
// console.log("Новий масив:", shop);


// const calculator = [
//    [0, 0, 0, 0, 0],
//    [0, 1, 2, 3, 4],
//    [0, 2, 4, 6, 8],
//    [0, 3, 6, 9, 12],
//    [0, 4, 8, 12, 16]
// ];


// const calculator = [
//    [0, 1, 2, 3, 4],
//    [1, 2, 3, 4, 5],
//    [2, 4, 6, 8, 10],
//    [3, 6, 9, 12, 15],
//    [4, 8, 12, 16, 20]
// ];
// const calculatorNoZeros = arr.map(row => row.slice(1));


// const sentence = prompt("Введіть рядок з кількох слів:");
// const word = prompt("Введіть шукане слово:");
// const wordsArr = sentence.split(" ");
// const index = wordsArr.indexOf(word);
// if (index !== -1) {
//    console.log(`Слово "${word}" є ${index + 1}-им словом у рядку.`);
// } else {
//    console.log(`Слово "${word}" не знайдено у рядку.`);
// }


// let array = Array.from({ length: 5 }, () => prompt("Введіть значення:")); //Делаем масив который заполниться при вызове промпт
// let reverseArray = [];
// while (array.length > 0) {
//    let element = array.pop();
//    reverseArray.push(element);
// } //добавляем елементы из 1 масива в обратном порядке в 2 масив
// console.log("Масив:", array);
// console.log("Масив в зворотньому порядку:", reverseArray);


// let newArray = [];
// while (reverseArray.length > 0) {
//    let element = reverseArray.shift();
//    newArray.unshift(element);
// }
// console.log("Масив в зворотньому порядку:", reverseArray);
// console.log("Масив з елементами в початковому порядку:", newArray);


// const calculator = [
//    [0, 0, 0, 0, 0],
//    [0, 1, 2, 3, 4],
//    [0, 2, 4, 6, 8],
//    [0, 3, 6, 9, 12],
//    [0, 4, 8, 12, 16]
// ];
// let copi = calculator.slice(0, 5);
// console.log(copi);


// const calculator = [
//    [0, 0, 0, 0, 0],
//    [0, 1, 2, 3, 4],
//    [0, 2, 4, 6, 8],
//    [0, 3, 6, 9, 12],
//    [0, 4, 8, 12, 16]
// ];
// var copiedArray = JSON.parse(JSON.stringify(calculator)); //Глубокая копия
// console.log(copiedArray);


// const arr = [1, 2, 3];
// const arr2 = arr;
// arr === arr2


// const calculator = [
//    [0, 0, 0, 0, 0],
//    [0, 1, 2, 3, 4],
//    [0, 2, 4, 6, 8],
//    [0, 3, 6, 9, 12],
//    [0, 4, 8, 12, 16]
// ];
// const concat = [...calculator];
// console.log(concat);


// let con = prompt('Введите строку');
// console.log(con[0]);
// console.log(con[4]);
// console.log(con[8]);


// let con = prompt('Введите строку');
// console.log(con[0]);
// console.log(con[4]);
// console.log(con[8]);


// let str = prompt('Введите различные буквы');
// let arr = [...str];
// [a, , , , b, , , , c] = arr
// console.log(a);
// console.log(b);
// console.log(c);

// const names = ["John", "Paul", "George", "Ringo"];
// for (const name of names) {
//    alert(`Hello, ${name}`);
// }


// const currencies = ["USD", "EUR", "GBP", "UAH"]
// let str = "<select>"
// for (const currency of currencies) {
//    str += "<option>" + currency + "</option>";
// }
// str += "</select>"
// document.write(str)


// const names = ["John", "Paul", "George", "Ringo"]
// let str = "<table>"
// for (const name of names) {
//    str += "<table>" + name + "</table>";
// }
// str += "</table>"
// document.write(str) //document.write отобразит ваш HTML на странице


// const names = ["John", "Paul", "George", "Ringo"]
// let str = "<table>"
// for (const name of names) {
//    str += "<td>" + name + "</td>";
// }
// str += "</table>"
// document.write(str) //document.write відобразить ваш HTML на сторінці


// const currencies = ["USD", "EUR", "GBP", "UAH"]
// let str = "<table>"
// for (let i = 0; i < 3; i++) { // цикл создает строки
//    str += "<tr>"
//    for (let j = 0; j < 4; j++) { // цикл создает ячейки в строке
//       const currency = currencies[j]
//       const letter = currency[i]
//       str += `<td>${letter}</td>` // добавляем ячейку в строку
//    }
//    str += "</tr>"
// }
// str += "</table>"
// document.write(str)


// const calculator = [
//    [0, 0, 0, 0, 0],
//    [0, 1, 2, 3, 4],
//    [0, 2, 4, 6, 8],
//    [0, 3, 6, 9, 12],
//    [0, 4, 8, 12, 16]
// ];
// document.write('<table>');
// for (let i = 0; i < calculator.length; i++) {
//    document.write('<tr>');
//    for (let j = 0; j < calculator[i].length; j++) {
//       const bgColor = i % 2 === 0 ? : 'lightgray';
//       document.write(`<td style="background-color: ${bgColor}">${calculator[i][j]}</td>`);
//    }
//    document.write('</tr>');
// }
// document.write('</table>');


// const capitalize = str => {
//    let result = ''
//    for (let i = 0; i < str.length; i++) {
//    if (i === 0 || str[i - 1] === ' ') {
//    result += str[i].toUpperCase()
//    } else {
//    result += str[i].toLowerCase()
//    }
//    }
//    return result
//    }
//    console.log(capitalize("cANBerRa")) //Canberra


// const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
// const input = prompt("Enter a string:");
// const words = input.split(" ");
// const capitalizedWords = words.map(capitalize);
// const output = capitalizedWords.join(" ");
// console.log(output);


// // визначаємо неприпустимі слова
// const forbiddenWords = ["bad", "evil", "unacceptable"];
// // функція-перевірка для filter
// const checkWord = word => !forbiddenWords.includes(word);
// // отримуємо рядок від користувача та розбиваємо його за пробілами
// const inputString = prompt("Введіть рядок:");
// const wordsArray = inputString.split(" ");
// // фільтруємо масив слів за допомогою checkWord
// const filteredArray = wordsArray.filter(checkWord);
// // збираємо масив слів назад в рядок
// const outputString = filteredArray.join(" ");
// console.log(outputString);


// const forbiddenWords = ['bad', 'evil', 'ugly'];
// const input = prompt('Enter a sentence:');
// const words = input.split(' ');
// const result = words.map(word => forbiddenWords.includes(word) ? 'BEEP' : word).join(' ');
// console.log(result);


// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<select>";
// str += currencies.reduce((a, b) => a + `<option>${b}</option>`, "");
// str += "</select>";
// document.write(str);


const line = prompt();
const bracketsStack = [];
let i = 0;
for (const character of line) {
   if (character === "(" || character === "[" || character === "{") {
      bracketsStack.push(character);
   } else if (
      (character === ")" && bracketsStack[bracketsStack.length - 1] === "(") ||
      (character === "]" && bracketsStack[bracketsStack.length - 1] === "[") ||
      (character === "}" && bracketsStack[bracketsStack.length - 1] === "{")
   ) {
      bracketsStack.pop();
   } else if (character === ")" || character === "]" || character === "}") {
      console.log(`Помилка на позиції ${i}`);
      break;
   }
   i++;
}
if (bracketsStack.length === 0) {
   console.log("Всі дужки закриті правильно!");
}