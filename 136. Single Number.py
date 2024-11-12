class Solution(object):
    def singleNumber(self,nums):
        single_num = 0
        for n in nums:
            single_num ^= n
        return single_num