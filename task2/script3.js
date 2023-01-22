// Функция принимает массив чисел. Возвращает массив строк такого вида://
// fn([3, 4, 6]); // ['Value: 3; Index: 0; Squared: 9','Value: 4; Index: 1; Squared: 16','Value: 6; Index: 2; Squared: 36']

const newArray = (numbers) => {
  if (!Array.isArray(numbers));
  return numbers.map(
    (number, index) =>
      `Value: ${number}; Index: ${index}; Squared:${number ** 2}`
  );
};
console.log(newArray([3, 4, 6]));
