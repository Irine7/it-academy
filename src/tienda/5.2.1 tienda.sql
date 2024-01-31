# Cheack as Active base:
USE tienda;

#1. List the name of all the products in the product table.
SELECT nombre FROM  producto;

#2. List the names and prices of all the products in the product table.
SELECT 
nombre, precio 
FROM producto;

#3.List all columns of the product table.
SELECT * FROM producto;

#4. List the name of the products, the price in euros and the price in US dollars (USD). Here we multiplicate precio by 1.08 (actual exchange rate)
SELECT 
nombre,  
precio AS precio_euros, 
precio * 1.08 AS precio_dolares FROM producto;

#5. List the name of the products, the price in euros and the price in US dollars (USD). Use the following aliases for the columns: product name, euros, dollars.
SELECT 
nombre AS product_name,  
precio AS euros, 
precio * 1.08 AS dollars FROM producto;

#6. List the names and prices of all products in the product table, converting the names to uppercase.
SELECT 
UPPER(nombre) AS nombre,
precio
FROM producto;

#7. List the names and prices of all products in the product table, converting the names to lowercase.
SELECT 
LOWER(nombre) AS nombre, 
precio
FROM producto;

#8. List the name of all manufacturers in one column, and in another column capitalize the first two characters of the manufacturer's name.
SELECT 
nombre,
UPPER(SUBSTRING(nombre, 1,2)) AS primeras_dos_letras
FROM fabricante;

#9. List the names and prices of all products in the product table, rounding the price value.
SELECT 
nombre,
ROUND(precio) AS precio_rondeado
FROM producto;

#10. Lists the names and prices of all products in the product table, truncating the price value to display it without any decimal places.
SELECT 
nombre, 
TRUNCATE(precio, 0) AS precio_truncado
FROM producto;

#11. List the code of the manufacturers that have products in the product table.
SELECT DISTINCT fabricante.codigo, fabricante.nombre AS fabricantes_presentes
FROM fabricante
INNER JOIN producto ON fabricante.codigo = producto.codigo_fabricante;

#12. List the code of the manufacturers that have products in the product table, eliminating the codes that appear repeatedly.
SELECT DISTINCT fabricante.codigo AS fabricantes_presentes
FROM fabricante
INNER JOIN producto ON fabricante.codigo = producto.codigo_fabricante;

#13. List manufacturer names in ascending order.   
SELECT DISTINCT nombre
FROM fabricante
ORDER BY nombre ASC;

#14. List manufacturer names in descending order.
SELECT DISTINCT nombre
FROM fabricante
ORDER BY nombre DESC;

#15. Lists product names sorted first by name in ascending order and second by price in descending order.
SELECT nombre, precio
FROM producto
ORDER BY nombre ASC, precio DESC;

#16. Returns a list with the first 5 rows of the manufacturer table.
SELECT *
FROM fabricante
LIMIT 5;

#17. Returns a list with 2 rows starting from the fourth row of the manufacturer table. The fourth row must also be included in the answer.
SELECT *
FROM fabricante
LIMIT 2 OFFSET 3;

#18. List the cheapest product name and price. (Use only the ORDER BY and LIMIT clauses). NOTE: I could not use MIN(price) here, I would need GROUP BY.
SELECT nombre, precio
FROM producto
ORDER BY precio
LIMIT 1;

#19. List the name and price of the most expensive product. (Use only the ORDER BY and LIMIT clauses). NOTE: I could not use MAX(price) here, I would need GROUP BY.
SELECT nombre, precio
FROM producto
ORDER BY precio
LIMIT 1;

#20. List the name of all products from the manufacturer whose manufacturer code is equal to 2.
SELECT * 
FROM fabricante
WHERE codigo = "2";

#21. Returns a list with the product name, price, and manufacturer name of all products in the database.
SELECT 
producto.nombre,
producto.precio,
fabricante.nombre AS nombre_fabricante
FROM producto
JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo;

#22. Returns a list with the product name, price, and manufacturer name of all products in the database. Sort the result by manufacturer name, in alphabetical order.
SELECT 
producto.nombre,
producto.precio,
fabricante.nombre AS nombre_fabricante
FROM producto
JOIN fabricante 
ON producto.codigo_fabricante = fabricante.codigo
ORDER BY fabricante.nombre;

#23. Returns a list with the product code, product name, manufacturer code, and manufacturer name of all products in the database.
SELECT
producto.codigo,
producto.nombre,
fabricante.codigo,
fabricante.nombre AS nombre_fabricante
FROM producto
INNER JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo;

#24. Returns the name of the product, its price and the name of its manufacturer, of the cheapest product.
SELECT
producto.nombre,
producto.precio,
fabricante.nombre AS nombre_fabricante
FROM producto
INNER JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo
ORDER BY precio ASC
LIMIT 1;

#25. Returns the name of the product, its price and the name of its manufacturer, of the most expensive product.
SELECT
producto.nombre,
producto.precio,
fabricante.nombre AS nombre_fabricante
FROM producto
INNER JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo
ORDER BY precio DESC
LIMIT 1;

#26. Returns a list of all products from manufacturer Lenovo. 
SELECT 
producto.nombre,
producto.precio,
fabricante.nombre AS nombre_fabricante
FROM producto
INNER JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo
WHERE fabricante.codigo = 2;

#27. Returns a list of all products from manufacturer Crucial that have a price greater than €200.
SELECT
producto.codigo,
producto.nombre,
producto.precio,
fabricante.nombre AS nombre_fabricante
FROM producto
INNER JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo
WHERE fabricante.nombre = 'Crucial' AND producto.precio > 200;

#28. Returns a list with all the products of the manufacturers Asus, Hewlett-Packard and Seagate. Without using the IN operator.
SELECT 
producto.nombre,
producto.precio,
fabricante.nombre AS nombre_fabricante
FROM 
producto
INNER JOIN 
fabricante ON producto.codigo_fabricante = fabricante.codigo
WHERE 
fabricante.nombre = 'Asus' OR fabricante.nombre = 'Hewlett-Packard' OR fabricante.nombre = 'Seagate';

#29. Returns a list with all the products of the manufacturers Asus, Hewlett-Packard and Seagate. Using the IN operator.
SELECT 
producto.nombre,
producto.precio,
fabricante.nombre  AS nombre_fabricante
FROM
producto
INNER JOIN
fabricante ON producto.codigo_fabricante = fabricante.codigo 
WHERE 
fabricante.nombre in ("Asus", "Hewlett-Packard", "Seagate");

#30. Returns a list with the name and price of all products from manufacturers whose name ends with the vowel e.
SELECT 
producto.nombre,
producto.precio,
fabricante.nombre  AS nombre_fabricante
FROM
producto
INNER JOIN
fabricante ON producto.codigo_fabricante = fabricante.codigo 
WHERE 
fabricante.nombre LIKE '%e';

#31. Returns a list with the name and price of all products whose manufacturer name contains the character w in their name.
SELECT 
producto.nombre,
producto.precio,
fabricante.nombre AS nombre_fabricante
FROM
producto
INNER JOIN
fabricante ON producto.codigo_fabricante = fabricante.codigo 
WHERE 
fabricante.nombre LIKE '%w%';

#32. Returns a list with the product name, price and manufacturer name, of all products that have a price greater than or equal to €180. Sort the result first by price (in descending order) and second by name (in ascending order).
SELECT 
producto.nombre,
producto.precio,
fabricante.nombre AS nombre_fabricante
FROM
producto
INNER JOIN
fabricante ON producto.codigo_fabricante = fabricante.codigo 
WHERE 
producto.precio >= 180
ORDER BY 
producto.precio DESC, producto.nombre ASC;

#33. Returns a list with the manufacturer's code and name, only of those manufacturers that have associated products in the database.
SELECT DISTINCT
fabricante.codigo,
fabricante.nombre
FROM
fabricante
INNER JOIN
producto ON fabricante.codigo = producto.codigo_fabricante;

#34. Returns a list of all the manufacturers that exist in the database, along with the products that each of them has. The list must also show those manufacturers that do not have associated products.
SELECT 
fabricante.codigo,
fabricante.nombre,
producto.codigo,
producto.nombre
FROM 
fabricante
LEFT JOIN 
producto ON fabricante.codigo = producto.codigo_fabricante;

#35. Returns a list showing only those manufacturers that do not have any associated products.
SELECT 
fabricante.codigo,
fabricante.nombre,
producto.codigo,
producto.nombre
FROM 
fabricante
LEFT JOIN
producto ON fabricante.codigo = producto.codigo_fabricante
WHERE producto.codigo IS NULL;

#36. Returns all products from the manufacturer Lenovo. (Without using INNER JOIN).
SELECT 
producto.nombre,
producto.precio,
fabricante.nombre AS nombre_fabricante
FROM 
producto
LEFT JOIN 
fabricante ON producto.codigo_fabricante = fabricante.codigo
WHERE 
fabricante.nombre = 'Lenovo';

#37. Returns all data for products that have the same price as the most expensive product from the manufacturer Lenovo. (Without using INNER JOIN).
SELECT
producto.codigo,
producto.nombre,
producto.precio
FROM 
producto,
fabricante
WHERE 
producto.codigo_fabricante = fabricante.codigo
AND 
producto.precio = (
SELECT MAX(precio)
FROM producto
WHERE codigo_fabricante = (
SELECT codigo
FROM fabricante
WHERE fabricante.nombre = 'Lenovo'));

#38. List the name of the most expensive product from the manufacturer Lenovo.
SELECT 
producto.codigo,
producto.nombre,
producto.precio,
fabricante.nombre AS nombre_fabricante
FROM 
producto
JOIN 
fabricante ON producto.codigo_fabricante = fabricante.codigo
WHERE 
codigo_fabricante = (SELECT codigo FROM fabricante WHERE nombre = 'Lenovo')
AND precio = (SELECT MAX(precio) FROM producto WHERE codigo_fabricante = (SELECT codigo FROM fabricante WHERE nombre = 'Lenovo'))
LIMIT 1;

#39. List the cheapest product name from the manufacturer Hewlett-Packard.
SELECT 
producto.codigo,
producto.nombre,
producto.precio,
fabricante.nombre AS nombre_fabricante
FROM 
producto
JOIN 
fabricante ON producto.codigo_fabricante = fabricante.codigo
WHERE 
codigo_fabricante = (SELECT codigo FROM fabricante WHERE nombre = 'Hewlett-Packard')
AND precio = (SELECT MIN(precio) FROM producto WHERE codigo_fabricante = (SELECT codigo FROM fabricante WHERE nombre = 'Hewlett-Packard'))
LIMIT 1;

#40. Returns all products in the database that have a price greater than or equal to the most expensive product from manufacturer Lenovo.
SELECT 
producto.codigo,
producto.nombre,
producto.precio,
fabricante.nombre AS nombre_fabricante
FROM 
producto
JOIN 
fabricante ON producto.codigo_fabricante = fabricante.codigo
WHERE 
producto.precio >= (SELECT MAX(precio) FROM producto WHERE codigo_fabricante = (SELECT codigo FROM fabricante WHERE nombre = 'Lenovo'));

#41. List all products from the manufacturer Asus that are priced higher than the average price of all their products.

SELECT 
producto.codigo,
producto.nombre,
producto.precio,
fabricante.nombre AS nombre_fabricante
FROM 
producto
JOIN 
fabricante ON producto.codigo_fabricante = fabricante.codigo
WHERE 
fabricante.nombre = 'Asus'

AND producto.precio > (SELECT AVG(precio) FROM producto WHERE codigo_fabricante = fabricante.codigo);






