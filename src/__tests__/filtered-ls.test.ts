const mockFs = require('mock-fs');
import { filteredList } from '../filtered-ls';

describe('filteredList', () => {
	const testDir = '/path/to/directory';

	beforeEach(() => {
		mockFs({
			[testDir]: {
				'first.md': 'console.log("Lorem")',
				'second.md': 'console.log("Lorem")',
				'third.ts': 'Lorem',
			},
		});

		// Подготавливаем аргументы командной строки
		process.argv = ['', '', testDir, 'md'];
	});

	afterEach(() => {
		mockFs.restore();
	});

	it('should filter files by extension', async () => {
		const spy = jest.spyOn(console, 'log').mockImplementation();

		await filteredList(testDir, 'md');

		expect(spy).toHaveBeenCalledWith('first.md');
		expect(spy).toHaveBeenCalledWith('second.md');

		spy.mockRestore();
	});
});
