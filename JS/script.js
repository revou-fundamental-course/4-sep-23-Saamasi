const HasilLuas = document.getElementsById("hasilLuas");
const HasilKeliling = document.getElementById("hasilKeliling")

function hitungLuas() {
    const sisi = parseInt(document.getElementById("luasSisi").value);
    if (isNaN(sisi) || sisi <= 0 || sisi == "") {
        alert("Jumlah sisi harus bilangan positif dan tidak boleh kosong atau 0.");
        return;
    }
    const luas = sisi * sisi;
    HasilLuas.innerHTML = `
        <p>Hasil :</p>
        <p> ${luas} cm2 </p></>
    `;
}

function hitungKeliling() {
    const sisi = parseInt(document.getElementById("kelilingSisi").value);
    if (isNaN(sisi) || sisi <= 0 || sisi == "") {
        alert("Jumlah sisi harus bilangan positif dan tidak boleh kosong atau 0.");
        return;
    }
    const keliling = 4 * sisi;
    HasilKeliling.innerHTML = `
    <p>Hasil :</p>
    <p>${keliling} cm</p>
    `;
}

document.getElementById("hitungLuas").addEventListener("click", hitungLuas);
document.getElementById("hitungKeliling").addEventListener("click", hitungKeliling);
