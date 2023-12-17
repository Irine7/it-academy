import * as fs from 'fs';
import { countLines } from '../my-first-async-io';

describe('Testing countLines function', () => {
	it('which should return a correct number of lines', async () => {
		const fileName = 'content.txt';
		const content = 'Lorem\nLorem\nLorem\nLorem ipsum\nLorem ipsum\n';

		await new Promise<void>((resolve, reject) => {
			fs.writeFile(fileName, content, 'utf-8', (error) => {
				if (error) {
					console.error(error.message);
					reject(error);
				} else {
					resolve();
				}
			});
		});

		try {
			const result = await countLines(fileName);
			expect(result).toBe(5);
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message);
			}
		} finally {
			fs.unlinkSync(fileName);
		}
	});
});
