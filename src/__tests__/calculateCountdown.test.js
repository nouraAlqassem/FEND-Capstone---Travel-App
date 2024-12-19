import { calculateCountdown } from '../client/js/app';

describe('Testing the countdown calculation', () => {
    test('It should return the correct number of days', () => {
        const tripDate = '2024-12-25';
        const today = new Date('2024-12-20');
        const countdown = calculateCountdown(tripDate, today);
        expect(countdown).toBe(5);
    });
});
