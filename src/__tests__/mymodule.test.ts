const mock = require('mock-fs');
const mymodule = require('../mymodule');

describe('filterFilesByExtension', () => {
	afterEach(() => {
		mock.restore();
	});

	it('should filter files by extension', (done) => {
		const mockedFiles = {
			'path/to/directory': {
				'file1.txt': 'content',
				'file2.js': 'content',
				'file3.txt': 'content',
			},
		};

		mock(mockedFiles);

		const directory = 'path/to/directory';
		const extension = 'txt';

		mymodule(directory, extension, (error: unknown, files: string[]) => {
			expect(error).toBeNull();
			expect(files).toEqual(['file1.txt', 'file3.txt']);
			done();
		});
	});
});
