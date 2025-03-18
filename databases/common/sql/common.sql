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
/************** Aggregiation Functions **********/
--SELECT COUNT(*) FROM film
---SELECT SUM(rental_duration) from film 
---SELECT AVG(rental_duration) from film 
---SELECT MIN(rental_duration) from film 
--SELECT MAX(rental_duration) from film 
/******************************** Aggregation Function **********************/
/*** Key Words *************/
ORDER BY - ASC, DESC
AS
GROUP BY
LIKE
BETWEEN
IN





