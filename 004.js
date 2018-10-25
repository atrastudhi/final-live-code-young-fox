/**
  TIC TAC TOE PRIME

  Diberikan sebuah function tictactoePrime dengan parameter number of array 2 dimension.
  Function ini akan menghasilkan number of array 2 dimension yang telah di convert jika
  terdapat angka prima secara berurutan sebanyak 3 kali mendatar ataupun menurun.

  Contoh:
  ---------
  input:
    [
      [2, 5, 7],
      [5, 8, 19],
      [1, 3, 23]
    ]

  output:
    [
      [X, X, X],
      [5, 8, X],
      [1, 3, X]
    ]

    NOTE:
    - Angka 1 bukanlah sebuah angka prima
    - Angka prima yang telah diconvert tetap dihitung untuk baris/kolom selanjutnya

**/

function tictactoePrime(array) {
  let primeArray = array.map(insideArr => insideArr.slice(0))

  for (var y = 0; y < primeArray.length; y++) {
    // let prevArr = primeArray[y-1]
    let currentArr = primeArray[y]
    let nextArr = primeArray[y+1]
    let doubleNextArr = primeArray[y+2]
    for (var x = 0; x < currentArr.length; x++) {
      let checkSelf = checkPrime(currentArr[x])
      let nextRow = nextArr && checkPrime(nextArr[x])
      let doubleNextRow = doubleNextArr && checkPrime(doubleNextArr[x])
      let nextColumn = currentArr[x+1] && checkPrime(currentArr[x+1]);
      let doubleNextColumn = currentArr[x+2] && checkPrime(currentArr[x+2]);

      if (checkSelf && nextRow && doubleNextRow) {
        currentArr[x] = 'X'
        nextArr[x] = 'X'
        doubleNextArr[x] = 'X'
      } else if (checkSelf && nextColumn && doubleNextColumn) {
        currentArr[x] = 'X'
        currentArr[x+1] = 'X'
        currentArr[x+2] = 'X'
      }
    }
  }

  function checkPrime (num) {
      if (num === undefined || num === 'X') {
        return true
      } else {
        let prime = num === 1 ? false : true
        for (var i = 2; i < num; i++) {
          if (num % i === 0) {
            prime = false
          }
        }
        return prime
      }
  }
  return primeArray
}

console.log(tictactoePrime([
  [2, 5, 7],
  [5, 8, 19],
  [1, 3, 23]]));
/*
[
  ['X', 'X', 'X'],
  [5, 8, 'X'],
  [1, 3, 'X']
]
*/

console.log(tictactoePrime([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [13, 11, 19, 15, 16],
  [18, 17, 14, 20, 21],
  [22, 23, 24, 25, 12]]));

/*
[
  [1, 'X', 3, 4, 5],
  [6, 'X', 8, 9, 10],
  ['X', 'X', 'X', 15, 16],
  [18, 'X', 14, 20, 21],
  [22, 'X', 24, 25, 12]
]
*/
