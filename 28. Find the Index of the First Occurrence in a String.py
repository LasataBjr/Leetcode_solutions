class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        if needle not in haystack:
            return -1
        if needle in haystack:
            index = haystack.find(needle)
            return index

x = Solution()
x.strStr("leetcode", needle = "leeto")     