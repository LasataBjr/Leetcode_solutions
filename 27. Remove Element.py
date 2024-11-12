class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        i = 0
        while i < (len(nums)):
            if nums[i] == val:
                nums.pop(i)
            else:
                i += 1
        length = len(nums)
        return length


x= Solution()
num = [3,2,2,3]
value = 3
result = x.removeElement(num,value)
print(result)
print(num)