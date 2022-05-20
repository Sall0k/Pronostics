import { escapeHtml, sha } from "./utils.js"

let button = document.getElementById('enter_btn')
let password_input = document.getElementById('password')

button.addEventListener('click', () => {
    password_input.classList.remove('is-invalid')
    const password = escapeHtml(password_input.value)
    if (password) {
        if (password === 'MesPronos') {
            toPronostics()
        }
        if (sha256(password) === sha) {
            window.sessionStorage.setItem('sha', password);
            toPronostics()
        }
    }
    password_input.classList.add('is-invalid')
})

function toPronostics() {
    window.location.replace(`pronostics.html`)
}