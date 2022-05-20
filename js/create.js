import { escapeHtml, sha } from "./utils.js"

const stored_info = escapeHtml(window.sessionStorage.getItem('sha') ?? '')
if (!(stored_info && sha256(stored_info) === sha)) {
    window.location.replace(`index.html`)
}

let body = document.getElementById('body-create')
body.classList.remove('d-none')

// LOADING HIPPODROMES

let hippodromes_list = document.getElementById('hippodromes-list')
let hippodromes
let new_hippodromes = []
let selected_hippodrome = ''

fetch("./files/hippodrome.json")
    .then(response => {
        if (response.ok) {
            return response
        }
        throw new Error();
    })
    .then(response => response.json())
    .then(json => {
        hippodromes = json
        displayHippodromesOptions()
    })
    .catch(() => hippodromes = [])

function displayHippodromesOptions() {
    hippodromes.forEach(hippodrome => {
        hippodromes_list.innerHTML += `<option value="${hippodrome}"/>`
    })
}

// HANDLING CLICK ON ADDING PRONOSTIC BUTTON

// BEFORE LEAVING, ADD NEW HIPPODROME IF NOT ALREADY EXISTS IN FILE