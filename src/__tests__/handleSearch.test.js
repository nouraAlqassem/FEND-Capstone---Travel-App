import { handleSearch, postData } from '../client/js/app';

// Mock the fetch function globally
global.fetch = jest.fn((url) => {
    if (url.includes('/location')) {
        return Promise.resolve({
            json: () => Promise.resolve({
                geonames: [{ lat: 48.8566, lng: 2.3522 }],
            }),
        });
    }
    if (url.includes('/weather')) {
        return Promise.resolve({
            json: () => Promise.resolve({
                data: [{ weather: { description: 'Clear sky' } }],
            }),
        });
    }
    if (url.includes('/image')) {
        return Promise.resolve({
            json: () => Promise.resolve({
                hits: [{ webformatURL: 'https://example.com/image.jpg' }],
            }),
        });
    }
    return Promise.reject(new Error('Unknown API endpoint'));
});

describe('Testing the handleSearch function', () => {
    beforeEach(() => {
        // Set up the DOM elements required by handleSearch
        document.body.innerHTML = `
            <input id="location" value="Paris" />
            <input id="date" value="2024-12-25" />
            <div id="result"></div>
        `;
    });

    test('It should update the DOM with search results', async () => {
        // Call the handleSearch function
        await handleSearch();

        // Verify the DOM updates
        const result = document.getElementById('result').innerHTML;
        expect(result).toContain('Weather for Paris');
        expect(result).toContain('Days until your trip');
        expect(result).toContain('Clear sky');
    });
});
