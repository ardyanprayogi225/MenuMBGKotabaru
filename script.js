const namaHari = [
"Minggu",
"Senin",
"Selasa",
"Rabu",
"Kamis",
"Jumat",
"Sabtu"
];

const namaBulan = [
"Januari",
"Februari",
"Maret",
"April",
"Mei",
"Juni",
"Juli",
"Agustus",
"September",
"Oktober",
"November",
"Desember"
];

const sekarang = new Date();

const hari = namaHari[sekarang.getDay()];
const tanggal = sekarang.getDate();
const bulan = namaBulan[sekarang.getMonth()];
const tahun = sekarang.getFullYear();

document.getElementById("tanggal").textContent =
`${hari}, ${tanggal} ${bulan} ${tahun}`;

document.getElementById("tahun").textContent = tahun;
