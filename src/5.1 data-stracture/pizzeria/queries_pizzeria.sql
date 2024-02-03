#1. Query to count the number of products in the "Beverages" category sold in a specific location 
# Запрос на подсчет количества товаров категории «Напитки», проданных в определенном месте

SELECT clientes.ciudad AS ciudad,
    SUM(pedido_productos.total) AS cantidad_bebidas_vendidas
FROM pedido_productos
    JOIN pedido ON pedido_productos.id_pedido = pedido.id_pedido
    JOIN clientes ON pedido.id_cliente = clientes.id_cliente
    JOIN productos ON pedido_productos.id_producto = productos.id_producto
    JOIN catedorias_producto ON productos.id_categoria = catedorias_producto.id_categoria
WHERE clientes.ciudad = 'NombreDeLaCiudad' -- Замени 'NombreDeLaCiudad' на нужное название города
    AND catedorias_producto.nombre = 'Bebidas'
GROUP BY clientes.ciudad;

#2. Check to see the sales made by a specific employee
# Запрос для просмотра продаж, совершенных определенным сотрудником

SELECT empleados.id_empleado,
    empleados.nombre AS nombre_empleado,
    empleados.apellido AS apellido_empleado,
    COUNT(pedido.id_pedido) AS cantidad_ventas
FROM empleados
JOIN reparto ON empleados.id_empleado = reparto.id_repartidor
JOIN pedido ON reparto.id_pedido = pedido.id_pedido
GROUP BY empleados.id_empleado
ORDER BY cantidad_ventas DESC;