import { setupBrowserElements } from './browserUtils.js';
import { handleInput } from '../controller/controller.js';

const { input } = setupBrowserElements();

if (input) {
	input.addEventListener('input', handleInput);
}

export { input };
