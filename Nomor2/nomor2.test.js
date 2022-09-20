const joinArray = require("./nomor2");

test("Test 1", () => {
    expect(joinArray(['senin','selasa','rabu'], ['senin', 'kamis'])).toEqual(['senin', 'selasa', 'rabu', 'kamis']);
});
test("Test 2", () => {
    expect(joinArray(['apel', 'nanas'],['anggur', 'apel'])).toEqual(['apel', 'nanas', 'anggur']);
});