/*
  Count duplicates using recursive! 🐼

  Diberikan sebuah function countDuplicateLettersRecursive yang menerima 1 parameter bertipe string.
  Function ini akan mengembalikan berapa banyak huruf yang duplikat

  RULES:
  - Wajib menggunakan metode rekursif
  - Dilarang menambahkan parameter baru
  - Dilarang membuat variable di luar function countDuplicateLettersRecursive
  - Dilarang mengubah tipe data parameter saat dipanggil kembali
  - Dilarang membuat function didalam function yang bertujuan untuk melakukan rekursif
  - Dilarang menggunakan regex

*/


function countDuplicateLettersRecursive(word) {
  // your code here
  let counter = 0
  if (word.length === 0) {
    return 0
  } else {
    for (let i = 1; i < word.length; i++) {
      if (word[0] === word[i]) {
        counter += 1
      }
    }
  }
  if (counter === 0) {
    return countDuplicateLettersRecursive(word.slice(1))
  } else if (counter === 2) {
    return countDuplicateLettersRecursive(word.slice(1))
  } else {
    return 1 + countDuplicateLettersRecursive(word.slice(1))
  }
}


console.log(countDuplicateLettersRecursive('passionate')) // 2
console.log(countDuplicateLettersRecursive('adalah')) // 1
console.log(countDuplicateLettersRecursive('pangkal')) // 1
console.log(countDuplicateLettersRecursive('danau')) // 1
console.log(countDuplicateLettersRecursive('greatest')) // 2
console.log(countDuplicateLettersRecursive('wizard')) // 0