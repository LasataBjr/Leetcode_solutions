# Write your MySQL query statement below
Select C.name as Customers from Customers C
LEFT JOIN Orders O  on C.id = O.customerId
where O.customerId is null

