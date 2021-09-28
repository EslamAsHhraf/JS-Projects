let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let arr = mix
  .map(function (ele) {
    return isNaN(ele) ? ele : "";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });
console.log(arr);
// Elzero
