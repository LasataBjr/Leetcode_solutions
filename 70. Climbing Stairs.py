class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        if (n == 0):
            return 0
        elif (n == 1):
            return 1
        
        first, second = 1, 1
        for i in range(2, n+1):
            current = first + second
            first = second
            second = current
        return second
        