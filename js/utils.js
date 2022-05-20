export { escapeHtml, sha }

const sha = '3c1b383b943353773a747d678f40e8d127c4130c4da68c953bb92524b2c4cfbc'

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
}