// find the smallest number in the array


const shuffleArray  = (array) =>{
  for (let i = 0; i < 100; i++) {

      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let myArr = [
  945, 346, 782, 195, 543, 875, 321, 674, 289, 457,
  623, 817, 134, 569, 902, 438, 701, 256, 390, 948,
  574, 812, 639, 385, 129, 467, 905, 312, 786, 541,
  978, 243, 675, 819, 564, 207, 931, 486, 729, 365,
  812, 549, 273, 918, 654, 390, 146, 572, 809, 345,
  921, 738, 264, 509, 876, 123, 467, 982, 635, 401,
  874, 218, 953, 607, 241, 569, 825, 473, 194, 836,
  512, 359, 798, 205, 641, 927, 384, 719, 856, 203,
  549, 813, 267, 594, 142, 586, 921, 357, 780, 249,
  693, 482, 917, 34, 724, 139, 576, 823, 467, 905
];


let givenArr =  shuffleArray(myArr);



let minValue = givenArr[0];         
const n  = givenArr.length;
let loop = 0;
let operations = 0;
let conNotSatisfy = 0;

for (let i = 1; i < n+1; i++) {
loop++;                                // it is to check that how many times loop runs
if ( minValue > givenArr[i]) {
  minValue = givenArr[i];
  operations++;
} else {
  conNotSatisfy++;

}
}
console.log(`array length : ${n}`)
console.log(`RESULT (min value) : ${minValue}`);
console.log(`loop runs : ${loop} times`);
console.log(`operations done : ${operations} times`);
console.log(`operations not done : ${conNotSatisfy} times`);
