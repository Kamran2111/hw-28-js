// ЗАДАНИЕ: 1
// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }
// delay(2000)
//   .then(() => {
//     console.log("Прошло 2 секунды");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// --------------------------------------------------------------------------
// ЗАДАНИЕ: 2
// function firstTask() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Шаг-1");
//     }, 2000);
//   });
// }
// function secondTask() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Шаг-2");
//     }, 3500);
//   });
// }
// firstTask()
//   .then((result) => {
//     console.log(result);
//     return secondTask();
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((eror) => console.log(eror));

// -------------------------------------------------------------------------------
// ЗАДАНИЕ: 3
// function firstFunc() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Первая функия");
//     }, 1500);
//   });
// }

// function secondFunc() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Вторая функия");
//     }, 2000);
//   });
// }

// function thirdFunc() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Третий функия");
//     }, 2500);
//   });
// }
// Promise.all([firstFunc(), secondFunc(), thirdFunc()])
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// -------------------------------------------------------------------------------
// ЗАДАНИЕ: 4
function fastTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Первая функия");
    }, 2500);
  });
}
function slowTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Вторая функия");
    }, 1000);
  });
}
Promise.race([fastTask(), slowTask()])
  .then((result) => console.log(result))
  .catch((eror) => console.log(eror));
