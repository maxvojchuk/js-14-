const delayedPromise = (promice, timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(promice);
    }, timeout);
  });
};
const promises = [
  delayedPromise("Проміс 1", 1000),
  delayedPromise("Проміс 2", 2000),
  delayedPromise("Проміс 3", 1500),
  delayedPromise("Проміс 4", 500),
  delayedPromise("Проміс 5", 2500),
];

Promise.all(promises)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
