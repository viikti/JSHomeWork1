// ..ЗАДАЧА № 5!!!!!!!!!!!!!!!!!!!!!!!!!!
// Ваша цель - создать функцию deleteChars(str), которая удаляет первый и последний символы строки, которая передается в параметр, и возвращает новую строку без этих символов.
//     deleteChars("Hello"); // ell
// deleteChars("A"); // пустая строка

const hello = `Hello`;
const deleteChars = function () {
    const Hello = hello.slice(1, 4)
    console.log(Hello);
    const A = ` `
    console.log(A);

};

deleteChars();

//  ИЛИ ТАКОЙ ВАРИАНТ РЕШЕНИЯ (ЗАДАЧА № 5)!!!!!!!!!
// const deleteChars = function (string) {

//     console.log(string.slice(1, 4));

// };
// let A = ` `;
// deleteChars(`Hello`);
// deleteChars(A);