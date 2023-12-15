// import { sum } from '../baby-steps';

// describe('Testing if the function returns the sum of all arguments and the sum is a number', () => {
// 	const args = [1, 2, 3];

// 	it('Check if the return is a sum of given arguments and its type is a number', () => {
// 		const res = sum(args);

// 		expect(res).toBe(6);
// 	});
// });

import { sum } from '../baby-steps';

describe('Testing if the function returns the sum of all arguments and the sum is a number', () => {
	it('Check if the return is a sum of given arguments and its type is a number', () => {
		const args = [1, 2, 3];
		const res = sum(args);
		expect(res).toBe(6);
	});
});
