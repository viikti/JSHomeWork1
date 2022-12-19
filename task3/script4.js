// Функция принимает строку и проверяет её на палиндром. В случае если строка является палиндромом возвращает true иначе false

// isPalindrome('Привет') --> false
//isPalindrome('шалаш') --> true

const isPalindrome = (someWord) =>
  someWord.toLowerCase() ===
  someWord.split("").reverse().join("").toLowerCase();
console.log(isPalindrome("ПривеТ"));
console.log(isPalindrome("шалаШ"));
