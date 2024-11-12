class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        output = ""
        lowercase_str = s.lower()
        for char in lowercase_str:
            if char != " " and char.isalpha():
                output += char
        reversed_str = output [::-1]
        if output == reversed_str:
            return True 
        else:
            return False
        
        char = [chars.lower() for chars in s if chars.isalnum()]

        return char == char[::-1]

        # n = "~`!@#$%^&*()_-+=[{]}\|;:'\",<.>/?"
        # s = s.lower().replace(" ", "")
        # for c in n:
        #     s = s.replace(c, "")
        # return s == s[::-1]
