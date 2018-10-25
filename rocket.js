/**
SHINE BRIGHT LIKE A DIAMOND


Buatlah sebuah function bernama `diamond` yang menerima satu parameter berupa number.
function `diamond` akan membuat sebuah belah ketupat dengan simbol `$` dimana tinggi dari belah ketupat
ditentukan berdasarkan parameter number yang diterima.

**NOTE: Perhatikan pola untuk menentukan tinggi belah ketupat!!**

Contoh untuk input 3:
  $
 $ $
$   $
 $ $
  $


Contoh untuk input 4:

   $
  $ $
 $   $
$     $
 $   $
  $ $
   $


Contoh untuk input 6:

     $
    $ $
   $   $
  $     $
 $       $
$         $
 $       $
  $     $
   $   $
    $ $
     $


contoh untuk input 10:

         $
        $ $
       $   $
      $     $
     $       $
    $         $
   $           $
  $             $
 $               $
$                 $
 $               $
  $             $
   $           $
    $         $
     $       $
      $     $
       $   $
        $ $
         $

**/

function diamond(num) {
  //your code here
  let result = ''

  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num - i; j++) {
      if (j === num - i) {
        if(i === 0) {
        result += '$' + '\n' 
        } else {
          result += '$'
          for(let x = 0; x < (i*2)-1; x++) {
            // console.log(i)
            result += ' '
          }
          result+= '$' + '\n'
        }
      } else {
        result += ' '
      }
    }
  }

  for (let i = num-1; i >= 0; i--) {
    for (let j = 0; j <= num - i; j++) {
      if (j === num - i) {
        if(i === 0) {
        result += '$' + '\n' 
        } else {
          result += '$'
          for(let x = 0; x < (i*2)-1; x++) {
            // console.log(i)
            result += ' '
          }
          result+= '$' + '\n'
        }
      } else {
        result += ' '
      }
    }
  }

  return result
}

console.log(diamond(10));
console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(4));