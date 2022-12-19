const stringwithoutCamelCasing = (someString) => {
  return someString.replace(/[A-Z]/g, (newString) => {
    return " " + newString;
  });
};

console.log(stringwithoutCamelCasing(`camelCasing`));
console.log(stringwithoutCamelCasing(`identifier`));
console.log(stringwithoutCamelCasing(`helloMyDearFriend`));
