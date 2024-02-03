USE pizzeria;

INSERT INTO clientes (nombre, apellido, domicilio, cogigo_postal, ciudad, provincia, telefono)
VALUES
('Juan', 'Gomez', 'Calle Alegre 123', 28001, 'Madrid', 'Madrid', '123456789'),
('Maria', 'Lopez', 'Avenida Soleada 456', 08001, 'Barcelona', 'Cataluña', '987654321'),
('Pedro', 'Martinez', 'Plaza Central 789', 41001, 'Sevilla', 'Andalucía', '654321987');

INSERT INTO pedido (id_cliente, fecha_pedido, modo_repartir, precio_total)
VALUES
(1, '2024-02-03', 'Reparto a domicilio', 30.50),
(2, '2024-02-03', 'Para llevar', 25.00),
(3, '2024-02-02', 'Reparto a domicilio', 45.75);

INSERT INTO productos (nombre, descripcion, imagen, precio)
VALUES
('Pizza Margherita', 'Tomate, mozzarella, albahaca', 'margherita.jpg', 10.99),
('Calzone', 'Jamón, queso, tomate', 'calzone.jpg', 12.50),
('Pasta Carbonara', 'Salsa de huevo, panceta, queso parmesano', 'carbonara.jpg', 8.75);

INSERT INTO pedido_productos (id_pedido, id_producto, total, precio_total)
VALUES
(1, 1, 2, 21.98),
(1, 2, 1, 12.50),
(2, 1, 3, 32.97),
(3, 3, 1, 8.75);

INSERT INTO catedorias_producto (nombre)
VALUES
('Pizza'),
('Calzone'),
('Pasta'),
('Coca-Cola');

INSERT INTO tienda (domicilio, codigo_postal, ciudad, provincia)
VALUES
('Calle Principal 789', '28002', 'Madrid', 'Madrid'),
('Avenida Central 456', '08002', 'Barcelona', 'Cataluña');

INSERT INTO empleados (id_tienda, nombre, apellido, nif, telefono)
VALUES
(1, 'Carlos', 'Rodriguez', '123456789A', '678901234'),
(2, 'Ana', 'Garcia', '987654321B', '567890123');

INSERT INTO reparto (id_pedido, id_repartidor, fecha_reparto)
VALUES
(1, 1, '2024-02-03'),
(2, 2, '2024-02-03'),
(3, 1, '2024-02-02');