// ЗАДАЧА № 3!!!!!!!!!!!!!!!!!!!!!!!!!!
// Напишите функцию min(a, b), которая возвращает меньшее из чисел а, ь.
// Пример вызовов:
// min(2, 5)
// min(3, -1)
// min(1, 1)

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    };
};
console.log(min(2, 5))
console.log(min(3, -1))
console.log(min(1, 1))