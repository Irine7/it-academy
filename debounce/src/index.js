import { handleInput } from './controller/controller.js';

const input = document.querySelector('input');
const standardText = document.getElementById('standard');
const debounceText = document.getElementById('debounce');

input.addEventListener('keyup', handleInput);

export { input, standardText, debounceText };
