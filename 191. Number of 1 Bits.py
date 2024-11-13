class Solution(object):
    def hammingWeight(self, n):
        """
        :type n: int
        :rtype: int
        """
        binary_num = bin(n)[2:]
        return  binary_num.count('1')