// ..ЗАДАЧА № 1!!!!!!!!!!!!!!!!!!!!!!!!!!
// Лизе нужно написать функцию sayHello(name), которая возвращает приветствие для пользователя.Тем не менее, она влюблена в пользователя с именем "Mark", и хотела бы поприветствовать его немного иначе.
// Помогите ей)
// Пример вызовов:
// sayHello("Oleg"); // Hello, Oleg!
// sayHello("Viktor"); // Hello, Viktor!
// sayHello("Mark"); // Hi, Mark!


const sayHello = function (name) {
    if (name === `Oleg`) return `Hello, Oleg!`;
    if (name === `Viktor`) return `Hello, Viktor!`;
    if (name === `Mark`) return `Hi, Mark!`;
};

console.log(sayHello(`Oleg`));
console.log(sayHello(`Viktor`));
console.log(sayHello(`Mark`));

// ИЛИ ТАКОЙ ВАРИАНТ РЕШЕНИЯ ЗАДАЧА № 1!!!!!!!!!!

// function sayHello(text, name) {
//     return (`${text} , ${name}`)
// };

// let nameLove = 'Mark';
// let text = `Hi`;

// console.log(sayHello(`Hello`, `Oleg!`));
// console.log(sayHello(`Hello`, `Viktor`));
// console.log(sayHello(text, nameLove));
