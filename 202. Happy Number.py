    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        """
        visited_num = set()
        while n != 1:
            if n in visited_num:
                return False
            visited_num.add(n)
            n =  sum(int(digit) ** 2 for digit in str(n))
        return True;