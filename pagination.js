const randomNum = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomNum(0, 255)},${randomNum(0, 255)},${randomNum(0, 255)})`;
const colorfullLog = function () {
  let woah = "woah,Hello";
  //   woah.Style.Color = `${randomColor()}`;
  console.log(woah);
};
colorfullLog();
