const meanMedian = require("./nomor1");

test("Test 1", () => {
    expect(meanMedian([1,2,3,4])).toEqual([2.5,2.5]);
});
test("Test 2", () => {
    expect(meanMedian([2,3,3,4,8])).toEqual([4,3]);
});