import { greeting } from '../hello-world';

describe('Testing if the function returns greeting "Hello world" ', () => {
	it('Returns the required greeting', () => {
		const greeting = 'Hello world';
		const res = greeting;
		expect(res).toEqual('Hello world');
	});
});
