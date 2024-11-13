class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: int
        """
        
        char_count = Counter(s)  #creates a dictionary-like object where keys are characters in s, and values are the frequency of each character.
        result = 0
        odd_found= False

        for count in char_count.values():
            if count % 2 == 0:
                result += count # Add even counts as they fully contribute to the palindrome
            else:
                result += count -1 # Add the largest even part of odd counts
                odd_found = True 
        #If any odd count was found, 1 is added to result to place a single character in the middle of the palindrome.

        if odd_found:
            result += 1
    
        return result


        
        