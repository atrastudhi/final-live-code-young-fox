/*
  Halang Rintang

  Diberikan sebuah function halangRintang yang menerima 2 parameter yaitu:
   - parameter pertama adalah string menggambarkan arena perlombaan dimana symbol `_` menandakan arena datar
     dan symbol `n` menandakan rintangan.
   - parameter kedua adalah number daya lompat kuda yang menentukan berapa banyak rintangan yang dapat dilewati
     dalam sekali lompat

  function ini akan mengembalikan jarak yang dapat di tempuh oleh kuda tersebut sebelum akhirnya menabrak rintangan

  example:
  halangRintang('__n__nn__nnn__n', 2)

  proses:
  karakter ke-1 dan 2 adalah arena datar sehingga dapat dilewati
  karakter ke-3 terdapat satu rintangan sehingga dapat dilewati
  karakter ke-4 dan 5 adalah arena datar sehingga dapat dilewati
  karakter ke-6 dan 7 terdapat dua rintangan sehinga dapat dilewati
  karakter ke-8 dan 9 adalah arena datar sehingga dapat dilewati
  karakter ke-10 sampai 11 terdapat 3 rintangan sedangkan daya lompat hanya 2 sehingga tidak dapat dilewati dan berhenti di 9

  output:
  9

  RULES:
  - WAJIB menyertakan algorithm/pseudocode
  - DILARANG menggunakan built in function .split(), .slice(), .indexOf()
  - DILARANG menggunakan regex

*/
function halangRintang(arena, dayaLompat) {
  // you can only write your code here!
  let result = 0
  let counterN = 0

  for(let i = 0; i < arena.length; i++) {
    if(arena[i] === 'n') {
      counterN += 1
    } else {
      if(counterN <= dayaLompat) {
        result += counterN
        counterN = 0
      } else {
        return result
      }
      result +=1
    } 
  }
  return result
}

// ALGORITMA

// 1. buat variabel 'result' dengan 0
// 2. buat variable 'counterN' dengan 0
// 3. buat looping untung parameter 'arena'
// 4. jika arena index ke 'i' sama dengan 'n' maka counterN ditambahkan 1
// 5. selain itu:
//   5a. jika counterN lebih kecil atau sama dengan parameter 'dayaLompat' maka result ditambahkan counterN, counterN kembalikan menjadi 0
//   5b. selain itu maka return 'result'
//   5c. jika tidak masuk di antara 2 itu maka result di tambahkan 1
// 6. kembalikan result

// TEST CASES
console.log(halangRintang('___n__nn', 1)); // 6
console.log(halangRintang('___n__nn_nnn', 2)); // 9
console.log(halangRintang('_nnnnn___', 1)); // 1
console.log(halangRintang('____nnnn__nnnnn', 4)); // 10
console.log(halangRintang('nnnnn____', 2)); // 0
