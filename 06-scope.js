/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/*
1. ada 2.

2. global scope : variabel bisa diakses dari dalam maupun luar dari suatu fungsi atau blok (grup) kode.
    local scope : variabel hanya bisa diakses di dalam sebuah fungsi atau blok kode.

3. console.log(myName)

-global scope : 
let myName = "Mason";

function greeting() {
    return myName;
}
console.log(myName); // output Mason

-local scope :
function greeting() {
    let myName = "Mason";
    return myName;
}

console.log(myName); // output error, karena myName berada di dalam fungsi greeting.

*/

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/*
1. Mariah
2. Karena console di minta untuk menampilkan hasil fungsi dari argument "Mariah Carey".
*/
///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));