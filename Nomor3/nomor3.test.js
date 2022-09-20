const removeData = require("./nomor3");

test("Test 1", () => {
    expect(removeData([2,2,2,11])).toEqual([2,11]);
});
test("Test 2", () => {
    expect(removeData([2,3,3,3,6,9,9])).toEqual([2,3,6,9]);
});