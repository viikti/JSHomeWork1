// 4.	Приближается зима, вы должны подготовить свои лыжные каникулы. Ваша задача определить количество пар перчаток, которое вы можете составить из перчаток, которые есть в вашем ящике.

// Дан массив, описывающий цвет каждой перчатки, верните количество пар, которые вы можете составить, предполагая, что только перчатки одного цвета могут образовывать пары.

// Fn(["red", "green", "red", "blue", "blue"] // 2 (1 пара красных, одна пара голубых)
// )

// Fn(["red", "red", "red", "red", "red", "red"] // 3 (3 красных пары)

function numberOfPairs(gloves) {
  let count = 0;
  let colors = new Set();
  for (let glove of gloves) {
    if (colors.has(glove)) {
      colors.delete(glove);
      count++;
    } else {
      colors.add(glove);
    }
  }
  return count;
}

console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]));
console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]));
