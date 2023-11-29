export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testRegex: '(/__tests__/.*|(.|/)(test|spec)).(jsx?|tsx?)$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleDirectories: ['node_modules', 'src'],
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json',
		},
	},
};
