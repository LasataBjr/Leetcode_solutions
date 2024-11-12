class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        roman = {'I' : 1,
                 'V' : 5,
                 'X' : 10,
                 'L' : 50,
                 'C' : 100,
                 'D' : 500,
                 'M' : 1000
                }
        total = 0
        length = len(s)
        for i in range(length) :
            value = roman[s[i]]
            if (i + 1) < length and roman[s[i]] < roman[s[i+1]]:
                total -= value
            else:
                total += value
        return total
        
x = Solution()
result = x.romanToInt("LVIII")
print(result)
