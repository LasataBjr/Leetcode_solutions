# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def deleteDuplicates(self, head):
        """
        :type head: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        # new_LL = ListNode()
        # new_list = new_LL
        # current = head
        # while current and current.next:
        #     if current.val != current.next.val:
        #         new_list.next = new_LL(current.val)
        #         new_list = new_list.next
                
        # return new_LL.next

        current = head

        while current and current.next:
            if current.val == current.next.val:
                current.next = current.next.next
            else:
                current = current.next
        
        return head
