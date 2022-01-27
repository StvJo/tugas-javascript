/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

/// Pegeluaran
/// gundam = 750000
/// makan = 2000000
/// kost = 1000000
/// subscription = 250000

/// Gaji
/// gajiPokok = 5000000
/// gajiBonus = 10% dari gajiPokok
/// gajiLembur = 5% dari gajiPokok

/// Sisa Gaji
const sisaGaji = () => {
    console.log(b - a)
}; // output 1750000

const gundam = 750000
const makan = 2000000
const kost = 1000000
const subscription = 250000

a = gundam + makan + kost + subscription; //output 4000000

const gajiPokok = 5000000
const gajiBonus = 10 * gajiPokok / 100
const gajiLembur = 5 * gajiPokok / 100

b = gajiPokok + gajiBonus + gajiLembur; //output 5750000

/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;
const isSame;

console.log(oneInString == oneInNumber); //output true

/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;
const isHigher;

console.log(studentA > studentB); //output false


/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const final; 

console.log(oneInString === oneInNumber); //output false