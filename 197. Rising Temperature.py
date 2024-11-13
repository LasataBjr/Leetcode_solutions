# Write your MySQL query statement below
Select w1.id from Weather w1 JOIN Weather w2 on
w1.recordDate = DATE_ADD(w2.recordDate, INTERVAL 1 DAY)    where w1.temperature > w2.temperature  