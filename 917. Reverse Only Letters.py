class Solution(object):
    def reverseOnlyLetters(self, s):
        """
        :type s: str
        :rtype: str
        """
        str = list(s)
        left = 0
        right = len(str) - 1
        while left < right:
            while left < right and not str[left].isalpha():
                left += 1

            while left < right and not str[right].isalpha():
                right -= 1

            if left < right:
                str[left],str[right] = str[right], str[left]
                left += 1
                right -= 1
        
        return ''.join(str)

x = Solution()
result = x.reverseOnlyLetters("a-bC-dEf-ghIj")
print(result)