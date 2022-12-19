// ЗАДАЧА № 7!!!!!!!!!!!!!!!!!!!!!!!!!!

// 7.  Написать функцию, которая принимает букву, если буква является большой, функция возвращает ‘Оууу май, большая буква!’. В ином случае ‘Нет уж, маленькие буквы - скучно’

// Пример:
// checkLetterCase(‘A’) // ‘Оууу май, большая буква!’
// checkLetterCase(‘s) //  ‘Нет уж, маленькие буквы - скучно’

function someFunction(letter) {
    const A = letter.toUpperCase();
    const s = letter.toLowerCase();
    if (letter === letter.toUpperCase()) {
        console.log(`Оууу май, большая буква!`);
    } else if (s) {
        console.log(`Нет уж, маленькие буквы - скучно!`);
    };
};
someFunction(`A`);
someFunction(`s`);
