function validateForm() {
    let isValid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (name.value === '') {
        document.getElementById('nameError').innerText = 'Имя не может быть пустым';
        isValid = false;
    } else {
        document.getElementById('nameError').innerText = '';
    }

    if (!email.value.includes('@') || !email.value.includes('.')) {
        document.getElementById('emailError').innerText = 'Неверный формат Email';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    if (password.value.length < 8) {
        document.getElementById('passwordError').innerText = 'Пароль должен содержать минимум 8 символов';
        isValid = false;
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    if (isValid) alert('Регистрация прошла успешно!');
}



function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = 'Введите оба числа';
        return;
    }

    switch (operation) {
        case 'add': result = num1 + num2; break;
        case 'subtract': result = num1 - num2; break;
        case 'multiply': result = num1 * num2; break;
        case 'divide': result = num1 / num2; break;
    }

    document.getElementById('result').innerText = 'Результат: ' + result;
}



function showImage(element) {
    const largeImageContainer = document.getElementById('largeImageContainer');
    const largeImage = document.getElementById('largeImage');
    largeImage.src = element.src;
    largeImageContainer.style.display = 'block';
}
