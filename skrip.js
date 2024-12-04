document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert to meters

    if (!gender || isNaN(weight) || isNaN(height)) {
        alert('Please fill out all fields correctly.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category;

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    const genderText = gender === 'male' ? 'Male' : 'Female';

    document.getElementById('result').innerHTML = `
        Gender: ${genderText}<br>
        BMI: ${bmi}<br>
        Category: ${category}
    `;
});
