/* Функция принимает массив объектов пользователей первым параметром, вторым параметром принимает массив строк (id). 
Функция должна удалить всех пользователей, чьи id будут найдены в массиве id, которые передаются нашей функции вторым параметром  и вернуть массив, с оставшимеся пользователями*/

// removeUsers(users, [2, 3]); // Результат [{ id: 1, name: `Alex`}]
// removeUsers(users[3]); // Результат [{ id: 1, name: 'Alex'}, { id: 2, name: `Тоаmara` }]

const users = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "Tomara",
  },
  {
    id: 3,
    name: "Max",
  },
];

const returnUsers = (users, idBlackList) =>
  users.filter((user) => !idBlackList.includes(user.id));
console.log(returnUsers(users, [2, 3]));
console.log(returnUsers(users, [3]));
