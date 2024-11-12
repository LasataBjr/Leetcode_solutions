class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        digit = 0
        copy = x
        while(x > 0):
            remainder = x % 10 # 1
            digit = (digit * 10) + remainder 
            x = x // 10 

        return copy == digit       

x = Solution()
x.isPalindrome(121)    