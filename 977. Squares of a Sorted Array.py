class Solution(object):
    def sortedSquares(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        
        sqr = []
        for n in nums:
            square = n ** 2
            sqr.append(square)
            sqr.sort()

        return sqr

x = Solution()
result = x.sortedSquares([-4,-1,0,3,10])
print(result)