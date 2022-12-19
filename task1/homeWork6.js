// ЗАДАЧА № 6!!!!!!!!!!!!!!!!!!!!!!!!!!
// тут не смогла доделать до конца как надо
// 6. Написать функцию которая принимает в себя строчное значение состоящее из одного слова.В слове могут быть буквы разных регистров.Результатом выполнения данной функции должна быть строка, в которой первая буквы заглавная, а все последующие в нижнем регистре.
// Если в слове четное количество букв, то и последняя буква должна быть заглавной.
//     Пример:

// someFn(‘пиТеР’) // Питер
// someFn(‘javaScript’) // JavascripT


const uppercasedLetter = function (stringValue) {
    const firstLetter = stringValue[0].toUpperCase();
    const anotherLetter = stringValue.slice(1).toLowerCase();
    return firstLetter + anotherLetter;

};

console.log(uppercasedLetter(`пиТер`));