class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if not strs:
            return ""

        common_prefix = strs[0]
        for s in strs[1:]:
            while not s.startswith(common_prefix):
                common_prefix = common_prefix[:-1]
                if not common_prefix:
                    return ""
        return common_prefix