// 5.	Ну и наша задача на факториал через рекурсию
// 5!

const factorial = (number) => {
  return number != 1 ? number * factorial(number - 1) : 1;
};

console.log(factorial(5)); // 120
