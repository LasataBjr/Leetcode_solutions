class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        nums = []
        joined_num = ''.join(map(str, digits))
        joined_str = int(joined_num) + 1
        for digit in str(joined_str):
            x = int(digit)
            nums.append(x)
        return nums