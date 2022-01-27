/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
- Type Error : an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.
- Reference Error : an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.
- Range Error :  an error when trying to pass a value as an argument to a function that does not allow a range that includes the value.
- Syntax Error : an error that caused by the incorrect use of a pre-defined syntax.

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
1. Error
2. ReferenceError
3. error terjadi karena variabel salaryWithConst belum di initialisasi dalam lingkup yang di referensikan.

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;