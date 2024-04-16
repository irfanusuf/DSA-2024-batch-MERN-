function shuffleArray(array) {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

let myArr = [
  945, 346, 782, 195, 543, 875, 321, 674, 289, 457, 623, 817, 134, 569, 902,
  438, 701, 256, 390, 948, 574, 812, 639, 385, 129, 467, 905, 312, 786, 541,
  978, 243, 675, 819, 564, 207, 931, 486, 729, 365, 812, 549, 273, 918, 654,
  390, 146, 572, 809, 345, 921, 738, 264, 509, 876, 123, 467, 982, 635, 401,
  874, 218, 953, 607, 241, 569, 825, 473, 194, 836, 512, 359, 798, 205, 641,
  927, 384, 719, 856, 203, 549, 813, 267, 594, 142, 586, 921, 357, 780, 249,
  693, 482, 917, 365, 724, 139, 576, 823, 467, 905,
];

let givenArr = shuffleArray(myArr);
// const givenArr = [5, 4, 3, 2, 1];
// const givenArr = [1,2,3,4,5];

let n = givenArr.length;
let loop = 0;
let operations = 0;
let conNotSatisfy = 0;

for (let i = 0; i < n - 1; i++) {
  for (let j = i+1; j < n; j++) {
    loop++;
    if (givenArr[j] < givenArr[i]) {
      let index = j; // temp
      let temp = givenArr[i]; // temp

      // swap
      givenArr[i] = givenArr[index];
      givenArr[index] = temp;
      operations++;
    } else {
      conNotSatisfy++;
    }
  }
}


console.log(givenArr);
console.log(n);
console.log(`loop runs : ${loop} times`);
console.log(`operations done : ${operations} times`);
console.log(`operations not done : ${conNotSatisfy} times`);
