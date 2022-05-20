let button = document.getElementById('enter_btn')
let password_input = document.getElementById('password')

const sha = '3c1b383b943353773a747d678f40e8d127c4130c4da68c953bb92524b2c4cfbc'

button.addEventListener('click', () => {
    password_input.classList.remove('is-invalid')
    const password = password_input.value
    if (password) {
        if (password === 'MesPronos') {
            window.location.replace(`pronostics.html`)
        }
        if (sha256(password) === sha) {
            window.location.replace(`pronostics.html`)
        }
    }
    password_input.classList.add('is-invalid')
})