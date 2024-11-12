class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        num_dict = {}
        for i in range(len(nums)):
            c = target - nums[i]

            if c in num_dict:
                return (num_dict[c] , i)
        
            num_dict[nums[i]] = i


nums = [2 ,7, 11, 15]   
target = 9
x = Solution()
answer = x.twoSum(nums, target)
print(answer)
