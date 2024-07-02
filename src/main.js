import { nanoid } from 'nanoid';

const generateBtn = document.getElementById('generate-password');
const showPassword = document.getElementById('password-display')
generateBtn.addEventListener('click', () => {
        const password = nanoid();
        showPassword.innerHTML = password
})

