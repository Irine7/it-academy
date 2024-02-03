USE optica;

#1. List the total purchases of a customer. 
# Перечислите общий объем покупок клиента. 
SELECT 
clientes.id_cliente,
clientes.nombre,
clientes.apellido,
COUNT(ventas.id_venta) AS todas_ventas 
FROM clientes
LEFT JOIN ventas ON clientes.id_cliente = ventas.id_cliente 
GROUP BY 
clientes.id_cliente;

#2. List the different glasses that an employee has sold during a year. 
# Перечислите различные очки, которые сотрудник продал за год. 
SELECT 
empleado.id_empleado, 
empleado.nombre,
empleado.apellido, 
COUNT(ventas.id_venta) AS todas_ventas 
FROM empleado 
JOIN 
ventas ON empleado.id_empleado = ventas.id_empleado 
JOIN 
gafas ON ventas.id_gafas = gafas.id_gafas 
WHERE 
fecha_venta LIKE '2023%'
GROUP BY 
empleado.id_empleado
ORDER BY 
todas_ventas DESC;

#3. List the different suppliers who have supplied glasses sold successfully by the optician. 
# Перечислите различных поставщиков, которые поставляли очки, успешно продаваемые оптикой. 
SELECT 
proveedores.id_proveedor,
proveedores.nombre,
COUNT(ventas.id_venta) AS todas_ventas 
FROM proveedores 
JOIN gafas ON proveedores.id_proveedor = gafas.id_proveedor 
JOIN ventas ON gafas.id_gafas = ventas.id_gafas 
GROUP BY proveedores.id_proveedor
ORDER BY todas_ventas DESC;









