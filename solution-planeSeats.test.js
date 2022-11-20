const solution = require('./solution-planeSeats');
test('returns the combination', () => {
	expect(solution(22, '1A 3C 2B 20G 5A')).toBe(41);
});