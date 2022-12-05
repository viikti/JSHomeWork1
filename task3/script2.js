/*  Задание №2	Функция принимает массив слов, возвращает новый массив слов, у которых первая буква большая, остальные маленькие. Чем-то очень похоже на функцию которую мы писали для одного слова.
Пример: fn([‘hello’, ‘wOrLd’]) // [‘Hello’, ‘World’];*/

const arrWord = (letters) =>
  letters.map(
    (letter) => letter[0].toUpperCase() + letter.slice(1).toUpperCase()
  );
console.log(arrWord(["hello", "wOrLd"]));
