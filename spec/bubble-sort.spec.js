describe('bubbleSort', function () {
    it('should return [1, 2, 3, 4, 5] when [3, 5, 2, 1, 4] is passed in', function () {
        let result = bubbleSort([3, 5, 2, 1, 4]);
        expect(result).toEqual([1, 2, 3, 4, 5])
    })
})