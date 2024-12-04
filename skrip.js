document.getElementById("resetButton").addEventListener("click", function () {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; 
});

document.getElementById("bmiForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    if (!gender) {
        alert("Silakan pilih jenis kelamin.");
        return;
    }

    const berat = parseFloat(document.getElementById("berat").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
        alert("Masukkan nilai berat dan tinggi yang valid.");
        return;
    }

const tinggiMeter = tinggi / 100;
const bmi = (berat / (tinggiMeter * tinggiMeter)).toFixed(2);
let category;

if (bmi < 18.5) {
    category = 'Kekurangan berat badan';
} else if (bmi < 24.9) {
    category = 'Normal';
} else if (bmi < 29.9) {
    category = 'Berat badan berlebih';
} else {
    category = 'Obesitas';
}

const resultDiv = document.getElementById("result");
resultDiv.innerHTML = `<p>Jenis Kelamin: ${gender}</p>
                       <p>BMI Anda: ${bmi}</p>
                       <p>Kategori: ${category}</p>`;

});
