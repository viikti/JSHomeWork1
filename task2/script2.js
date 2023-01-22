// Функция принимает массив букв разных регистров. Результатом функции должен быть новый массив где буквы которые были в нижнем регистре станут в верхнем, а в верхнем станут в нижнем

const userList = (letters) => {
  if (!Array.isArray(letters));
  return letters.map((letter) =>
    letter === letter.toUpperCase()
      ? letter.toLowerCase()
      : letter.toUpperCase()
  );
};
console.log(userList([`A`, `b`, `D`]));
