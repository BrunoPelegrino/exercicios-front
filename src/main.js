import { nanoid } from 'nanoid';
import { copy } from 'clipboard-copy';

import "./style.css";

const generateBtn = document.getElementById('generate-password');
const showPassword = document.getElementById('password-display');
const copyBtn = document.getElementById('copy-btn');

generateBtn.addEventListener('click', () => {
  const password = nanoid();
  showPassword.innerHTML = password;
});

 
copyBtn.addEventListener('click', function () {
  copy(showPassword.innerHTML)
})
