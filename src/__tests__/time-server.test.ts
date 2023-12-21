import { padZero } from '../time-server';

test('padZero adds leading zero to numbers less than 10', () => {
	expect(padZero(5)).toBe('05');
	expect(padZero(9)).toBe('09');
});
