// Функция для обработки регистрации
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартную отправку формы

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Проверка на совпадение паролей
    if (password !== confirmPassword) {
        alert('Пароли не совпадают!');
        return;
    }

    // Здесь можно добавить отправку данных на сервер, например, с использованием fetch
    alert(`Регистрация успешна!\nИмя: ${username}\nEmail: ${email}`);
});

// Пример обработки кнопок входа через соцсети (просто вывод сообщения)
document.getElementById('google-login').addEventListener('click', function() {
    alert('Вход через Google');
});

document.getElementById('facebook-login').addEventListener('click', function() {
    alert('Вход через Facebook');
});
