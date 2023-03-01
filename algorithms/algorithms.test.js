const algorithms = require('./algorithms')
 
test('test with ascending array', () => {
    expect(algorithms.miniMaxSum([1, 2, 3, 4, 5])).toEqual([10, 14]);
});


test('test with descending array', () => {
    expect(algorithms.miniMaxSum([10, 8, 4, 2, 1])).toEqual([15, 24]);
});


test('test with random array', () => {
    expect(algorithms.miniMaxSum([1, 6, 11, 14, 2])).toEqual([20, 33]);
});