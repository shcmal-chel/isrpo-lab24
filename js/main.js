console.log("\n=== Деструктуризация массивов ===");
const colors = ["red", "green", "blue"];

const color1 = colors[0];
const color2 = colors[1];
console.log(color1, color2);

const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);

const [primary, , tertiary] = colors;
console.log(primary, tertiary)

const [c1, c2, c3, c4 = "yellow"] = colors;
console.log(c4);

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

const product = {
    name: "Milk",
    price: 120,
    category: "Food",
    inStock: true,
};

const { name, price, category, inStock} = product;
console.log(name, price, category, inStock);

function printProduct({name, price, category, inStock}){
    console.log(`Name: ${name}`);
    console.log(`Price: ${price}`);
    console.log(`Category: ${category}`);
    console.log(`InStock: ${inStock}`);
}

printProduct(product);