/*
  ODD EVEN WORDS
  ==================

  function oddEventWord adalah sebuah function yang menerima 1 parameter berupa string kalimat.
  function ini akan mengubah setiap kata dalam kalimat tersebut menjadi odd atau even
  - jika jumlah karakter dalam kata tersebut adalah ganjil maka dirubah menjadi odd
  - jika jumlah karakter dalam kata tersebut adalah genap maka dirubah menjadi even


  example:
  oddEventWord('aku programmer')

  proses:
  terdiri dari dua kata aku, dan programmer
  kata aku terdiri dari tiga karakter a, k dan u sehingga dirubah menjadi odd
  kata programmer terdiri dari sepuluh karakter p, r, o, g, r, a, m, m, e, dan r sehingga dirubah menjado even


  output: odd even

  RULES:
  - WAJIB disertai dengan algorithm/pseudocode
  - DILARANG menggunakan built in function .split(), .indexOf()

*/
function oddEventWord (kalimat) {
  // Put your code here
  let result = ''
  let counter = 0
  for(let i = 0; i < kalimat.length; i++) {
    if(kalimat[i] === ' ') {
      if(counter % 2 === 0) {
        result += 'even '
      } else {
        result += 'odd '
      }
      counter = 0
    } else if(i === kalimat.length-1) {
      counter += 1
        if(counter % 2 === 0) {
          result += 'even'
        } else {
          result += 'odd'
        }
        counter = 0
    } else {
      counter += 1
    }
  }
  if(kalimat.length === 0) {
    return 'invalid input'
  } else {
    return result
  }
}

// ALGORITMA

// 1. buat variabel result dengan string kosong
// 2. buat variabel counter dengan number 0
// 3. looping kalimat
// 4. jika index kalimat sama dengan ' ' :
//   4a. jika counter habis di bagi 2 maka result ditambahkan 'even '
//   4b. selain itu maka result ditambahkan 'odd '
//   4c. counter kembalikan 0
// 5.jika 'i' sama dengan panjang parameter kalimat -1:
//   5a. jika counter habis di bagi 2 maka result ditambahkan 'even'
//   5b. selain itu maka result ditambahkan 'odd'
//   5c. counter kembalikan 0
// 6. selain itu maka counter di tambahkan 1
// 7. (di luar looping) jika panjang parameter kalimat sama dengan 0 maka return 'invalid input'
// 8. selain itu return variabel 'result'


console.log(oddEventWord('baca buku')) // even even
console.log(oddEventWord('rajin belajar')) // odd odd
console.log(oddEventWord('aku suka javascript')) // odd even even
console.log(oddEventWord('ikan')) // even
console.log(oddEventWord('')) // invalid input
