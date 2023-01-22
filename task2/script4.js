// Функция принимает, массив строчных и числовых значений. Функция должна вернуть новый массив состоящий только из строк, количество символов которых чётное.

// Пример:
// fn(["Hi", 2, 3, 4, 5, "JS", 2, "C++"]); // ['Hi', 'JS']

const filterevenValues = (values) => {
  if (!Array.isArray(values));
  return values.filter((value) => {
    const isValueString = String(value);
    return isValueString && value.length % 2 === 0;
  });
};
console.log(filterevenValues(["Hi", 2, 3, 4, 5, "JS", 2, "C++", `vi`, 22]));
