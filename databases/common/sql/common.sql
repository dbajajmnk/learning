--SELECT * FROM film
--SELECT film_id,title,description FROM film
---SELECT * FROM film LIMIT 10
/**************Comparison Operator **********************
= equal
< less than
> greater than
<= less than and equal
>= greater than and equal
<> not equaul
***/
/****************** Comparison Opearator ***********************/
--SELECT * FROM film WHERE title ='Chamber Italian'
--SELECT * FROM film WHERE title <>'Chamber Italian'
---SELECT * FROM film WHERE film_id >10
---SELECT * FROM film WHERE film_id <10
---SELECT * FROM film WHERE film_id >=10
---SELECT * FROM film WHERE film_id <=10
/**************Logical Opearator **********************
AND
OR
NOT
***/
/****************** Logical Operator ***********************/
--SELECT * FROM film WHERE rental_duration=7 AND rental_rate=4.99 AND film.length =117
--SELECT * FROM film WHERE rental_duration=7 OR rental_rate=4.99 OR film.length =117
---SELECT * FROM film WHERE NOT rental_duration=7 

/*****************Functions**********************
Round()
SUM()
MIN()
MAX()
COUNT()
AVG()
**/
/************** Aggregiation Functions **********/
--SELECT COUNT(*) FROM film
---SELECT SUM(rental_duration) from film 
---SELECT AVG(rental_duration) from film 
---SELECT MIN(rental_duration) from film 
--SELECT MAX(rental_duration) from film 
/******************************** Aggregation Function **********************/
/*** Key Words **********
ORDER BY - ASC, DESC
AS
GROUP BY : 
GROUP BY clause is used with the SELECT statement.
In the query, the GROUP BY clause is placed after the WHERE clause.
In the query, the GROUP BY clause is placed before the ORDER BY clause if used.
In the query, the Group BY clause is placed before the Having clause.
Place condition in the having clause.
DISTINCT
BETWEEN
IN
LIKE 
ILIKE
SELECT 
FROM
HAVING : 
The HAVING clause is an essential tool in SQL for filtering results based on aggregated data. 
Unlike the WHERE clause, which applies conditions to individual rows, 
HAVING works on groups of data that have been aggregated using functions like SUM(), AVG(), and COUNT(). 
Understanding how and when to use the HAVING clause allows you to perform more complex data analysis and generate meaningful insights from your datasets
Difference 
Having
In the HAVING clause it will check the condition in group of a row.	
HAVING clause can only be used with aggregate function.	
Priority Wise HAVING Clause is executed after Group By.	


WHERE
In the WHERE condition it will check or execute at each row individual.
The WHERE Clause cannot be used with aggregate function like Having
Priority Wise WHERE is executed before  Group By.

JOIN
***/
--SELECT title from film ORDER BY title
/**** Pattern Matching Characters ***
_ single charactor
% - Occurance of the character**/
SELECT 
    title,
    length,
    CASE 
        WHEN length < 60 THEN 'Short'
        WHEN length BETWEEN 60 AND 120 THEN 'Medium'
        ELSE 'Long'
    END AS length_category
FROM film;


SELECT 
    customer_id,
    COUNT(rental_id) AS rental_count
FROM rental
GROUP BY customer_id
ORDER BY rental_count DESC;

/**

Hi team good to go
**/



