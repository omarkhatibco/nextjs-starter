import fetchMock from 'jest-fetch-mock';
import { response } from '__mocks__';

fetchMock.mockResponseOnce(JSON.stringify(response));

describe('Hooks', () => {
	it('matches', async () => {
		expect(1).toEqual(1);
	});
});
