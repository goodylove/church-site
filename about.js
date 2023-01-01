const hambuger = document.querySelector(".hambuger");
const mobileMenu = document.querySelector(".mobl-menu");
const closeIcon = document.querySelector(".close-icon");

hambuger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});
closeIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});

function solveMeFirst(a, b) {
  let sum = a + b;
  return sum;
}
console.log(solveMeFirst(2, 3));
// const arr = [
//   [1, 3, 4, 2],
//   [4, 5, 3, 5],
//   [5, 2, 6, 4],
//   [8, 2, 9, 3],
// ];
// const diagonalProduct = (arr) => {
//   let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (i === j) {
//         console.log(i, j);
//         product *= arr[i][j];
//       }
//     }
//   }
//   return product;
// };
// console.log(diagonalProduct(arr));

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function sumDiagonal(array) {
  let sum = 0;
  let sec = 0;
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array.length; x++) {
      if (i === x) {
        sum += array[i][x];
      }
      if (i + x == array.length - 1) {
        sec += array[i][x];
      }
    }
  }
  return sum + sec;
}
console.log(sumDiagonal(arr));

// A simple Javascript program to find sum of diagonals

// const MAX = 100;

// void printDiagonalSums(mat, n);
// {
//   let principal = 0,
//     secondary = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       // Condition for principal diagonal
//       if (i == j) principal += mat[i][j];

//       // Condition for secondary diagonal
//       if (i + j == n - 1) secondary += mat[i][j];
//     }
//   }

//   document.write("Principal Diagonal:" + principal + "<br>");
//   document.write("Secondary Diagonal:" + secondary + "<br>");
// }

// // Driver code
// let a = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
// ];
// printDiagonalSums(a, 4);

// // This code is contributed by subhammahato348}
