import {greet, add, PI} from "./utils.js";

// console.log("\n=== Деструктуризация массивов ===");
// const colors = ["red", "green", "blue"];

// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);

// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);

// const [primary, , tertiary] = colors;
// console.log(primary, tertiary)

// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);

// console.log("Декструризация объектов");

// const user = {
//     name: "Чухан",
//     age: 37,
//     city: "Мтищи",
// };

// const {name , age , city} = user;
// console.log(name, age, city);

// const { name: fullName, age: years} = user;
// console.log(fullName, years);

// const { name: personName, country = "Россия"} = user;
// console.log(personName, country);

// console.log("Деструктуризация в параметрах");

// const user = {
//     name: "Чухан",
//     age: 37,
//     city: "Мтищи",
// };

// function printUserOld(user) {
//     console.log(`Имя: ${user.name}`);
//     console.log(`Возраст: ${user.age}`);
//     console.log(`Город: ${user.city}`);
// }

// function printUser({ name, age, city}) {
//     console.log(`Имя: ${name}`);
//     console.log(`Возраст: ${age}`);
//     console.log(`Город: ${city}`);
// }

// printUserOld(user);
// console.log()
// printUser(user);

// const product = {
//     name: "Milk",
//     price: 120,
//     category: "Food",
//     inStock: true,
// };

// const { name, price, category, inStock} = product;
// console.log(name, price, category, inStock);

// function printProduct({name, price, category, inStock}){
//     console.log(`Name: ${name}`);
//     console.log(`Price: ${price}`);
//     console.log(`Category: ${category}`);
//     console.log(`InStock: ${inStock}`);
// }

// printProduct(product);

// console.log("Spread для массивов");
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const combined = [...arr1, ...arr2];
// console.log("Объединенный массив:", combined);

// const copy = [...arr1];
// console.log("Еопия массива:", copy);

// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив:", extended);

// console.log("Spread для объектов");

// const person = {
//     name: "Диван",
//     age: 14,
// };

// const address = {
//     city: "Санкт-Петербруг",
//     street: "Морской флотилии",
// };

// const fullInfo = {...person, ...address};
// console.log("Полная информация:", fullInfo);

// const personCopy = {...person};
// console.log("копия объекта:", personCopy);

// const updated = {...person, age: 16, occupation: "Developer"};
// console.log("Обновленный объект:", updated);

// console.log("Rest оператор");

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log("Сумма 1,2,3:", sum(1,2,3));
// console.log("Сумма 1,2,3,4,5:", sum(1,2,3,4,5));

// const numbers = [10,20,30,40,50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);

// console.log("Модули");
// console.log(greet("Алексей"));
// console.log("5 + 3 =", add(5,3));
// console.log("Значение PI:", PI);

// import { multiply as умножить } from "./utils.js";
// console.log("4 * 7 =", умножить(4, 7));

// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("Умножение:", Utils.multiply(3, 9));

// import * as Math from "./math.js";
// console.log(Math.square(4));
// console.log(Math.cube(5));
// console.log(Math.E);

console.log("Промисы");
const simplePromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Операция выполнена успешно!");
    } else {
        reject("Произошла ошибка!");
    }
});

simplePromise
  .then((result) => console.log("Результат:", result))
  .catch((error) => console.log("Ошибка:", error));

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Прошло ${ms} миллисекунд`);
        }, ms);
    });
}

delay(1000)
  .then((message) => console.log(message));

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: "Иван Иванов",
                    email: "ivan@gmail.com",
                });
            } else {
                reject("Неверный ID пользователя");
            }
        }, 1500);
    });
}

fetchUserData(1)
  .then((user) => console.log("Пользователь:", user))
  .catch((error) => console.log("Ошибка:", error));

function step1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Шаг 1 завершен"), 500);
    });
}

function step2(previousResult) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершен`), 500);
    });
}

function step3(previousResult) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершен`), 500);
    });
}

step1()
  .then((result1) => step2(result1))
  .then((result2) => step3(result2))
  .then((finalResult) => console.log("Финальный результат:", finalResult))
  .catch((error) => console.log("Ошибка в цепочке:", error));