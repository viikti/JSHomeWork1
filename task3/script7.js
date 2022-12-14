// TODO: #7. Выведите массив ids для видео у которых рейтинг 5.0. В качестве входных данных используйте newReleases из предыдущего задания.

// [675465, …]

const newReleases2 = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

const createArray = (newReleases2) => {
  return newReleases2
    .filter((film) => film.rating.includes(5))
    .map((video) => video.id);
};
console.log(createArray(newReleases2));

//  РЕШЕНИЯ №2
// const result = newReleases2.reduce((acc, val) => {
//   if (val.rating.includes(5)) {
//     acc.push(val.id);
//   }
//   return acc;
// }, []);

// console.log(result);
