const randomDelay = (promise) => {
  const time = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(promise);
    }, time);
  });
};
const promises = [
  randomDelay("Проміс 1"),
  randomDelay("Проміс 2"),
  randomDelay("Проміс 3"),
  randomDelay("Проміс 4"),
  randomDelay("Проміс 5"),
];
Promise.race(promises)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
