// Задача 1:

// Функция принимает 2 аргумента 1 – массив имён, 2 – массив букв;
// Если имя пользователя из первого массива начинается с буквы, которая есть во втором аргументе – этот пользователь не должен попасть в массив результата.

// Пример:
// const userList = ["Alex", "alex", "Max", "Vika", "Petr", "Alexandra"];

// fn(userList, ['a', 'p']) // [ "Max", "Vika"]

const userList = (users, letterName) => {
  if (!Array.isArray(users) || !Array.isArray(letterName));

  const letterLowercase = letterName.map((letter) => letter.toLowerCase());

  return users.filter((username) => {
    const firstLetter = username[0].toLowerCase();
    return !letterLowercase.includes(firstLetter);
  });
};
console.log(userList([`surk`, `vila`, `vika`, `lapa`], [`k`, `v`]));
