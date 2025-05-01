const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const passwordField = document.getElementById("password");
const copiedMessage = document.getElementById("copiedMessage");
const lengthInput = document.getElementById("length");

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?";
const generatedPasswords = [];

function generatePassword(length) {
    let password;
    do {
        password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
    } while (generatedPasswords.includes(password));

    generatedPasswords.push(password);
    return password;
}

generateBtn.addEventListener("click", () => {
    const length = parseInt(lengthInput.value);

    if (isNaN(length) || length < 8 || length > 20) {
        alert("Please enter a valid number between 8 and 20.");
        return;
    }

    const newPassword = generatePassword(length);
    passwordField.value = newPassword;
    copiedMessage.classList.add("hidden");
});

copyBtn.addEventListener("click", () => {
    if (passwordField.value) {
        navigator.clipboard.writeText(passwordField.value).then(() => {
            copiedMessage.classList.remove("hidden");
            setTimeout(() => copiedMessage.classList.add("hidden"), 2000);
        });
    }
});