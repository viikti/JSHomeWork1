
// ЗАДАЧА № 9!!!!!!!!!!!!!!!!!!!!!!!!!!

// 9.  Написать функцию, которая принимает 2 значения. 1 – строка, 2 – число.Если длинна строки, больше чем число функция должна вернуть – ‘String is too long!’ в ином случае вернуть переданную строку.
//     checkStringLength(‘HI’, 2) // Hi
// checkStringLength(‘HI’, 1) // – ‘String is too long!’.

// в этой задачи я точно знаю, что есть ошибка.Когда я вывожу результат, то получается нужный в том случае, если ту(checkStringLength(`Hi`, `1`); ) цифру один я помещаю в``, если просто ставлю 1, то результат везде  Hi

const checkStringLength = function (string, number) {
    if (string > number) {
        console.log(`String is too long`);
    }
    else {
        console.log(`Hi`);
    };
};
const String = `Hi`;
const number = 2;
checkStringLength(`Hi`, 2);
checkStringLength(`Hi`, `1`);




