import nock from 'nock';
import { fetchData } from '../juggling-async';

const urlFirst = 'http://urlfirst.com';
const urlSecond = 'http://urlsecond.com';
const urlThird = 'http://urlthird.com';

const dataFirst = 'Some information from urlFirst';
const dataSecond = 'Some information from urlSecond';
const dataThird = 'Some information from urlThird';

nock(urlFirst).get('/').reply(200, dataFirst);
nock(urlSecond).get('/').reply(200, dataSecond);
nock(urlThird).get('/').reply(200, dataThird);

describe('Testing fetchData', () => {
	it('should return expecting results', async () => {
		const spy = jest.spyOn(console, 'log').mockImplementation();

		await fetchData(urlFirst);

		expect(spy).toHaveBeenCalledWith('Some information from urlFirst');
		expect(spy).toHaveBeenCalledWith('Some information from urlSecond');
		expect(spy).toHaveBeenCalledWith('Some information from urlThird');
		spy.mockRestore();
	});
});
