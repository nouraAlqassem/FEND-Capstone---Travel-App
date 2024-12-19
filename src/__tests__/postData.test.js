import { postData } from '../client/js/app';

// Mock fetch for testing
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ message: 'Success' }),
    })
);

describe('Testing the postData function', () => {
    test('It should send data and receive response', async () => {
        const url = 'http://localhost:8081/test';
        const data = { key: 'value' };

        const response = await postData(url, data);
        expect(response).toEqual({ message: 'Success' });
        expect(fetch).toHaveBeenCalledWith(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    });
});
