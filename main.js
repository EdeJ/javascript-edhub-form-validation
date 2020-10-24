const userName = document.getElementById('user-name');
const password = document.getElementById('user-password');
const messageUser = document.getElementById('message-user');
const messagePassword = document.getElementById('message-password');

userName.addEventListener('keyup', (e) => {
    if (e.target.value.includes('@')) {
        messageUser.textContent = 'Gebruikersnaam mag geen @ bevatten';
    } else {
        messageUser.textContent = '';
    }
});

password.addEventListener('keyup', (e) => {
    if (e.target.value.length < 6) {
        messagePassword.textContent = 'Wachtwoord is te kort, gebruik minimaal 6 tekens';
    } else {
        messagePassword.textContent = '';
    }
});



console.log(userName);