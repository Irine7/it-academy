USE optica;

INSERT INTO proveedores (
nombre,
calle,
numero_de_calle,
piso,
puerta,
ciudad,
codigo_postal,
pais,
telefono,
fax,
nif 
)
VALUES (
'Opticas Polar Sl',
'Calle Isabel II',
5,
3,
2,
'Cordoba',
14002,
'España',
123456789,
232424243,
'2422523Y'
),
(
'Opticas Jonenses Sl',
'Calle Colon',
53,
2,
2,
'Alicante',
03570,
'España',
736478363,
938847463,
'7212832H'
),
(
'Opticas Noroeste Sl',
'Calle Terra',
26,
3,
1,
'Ferrol',
15402,
'España',
366373822,
736368282,
'5284833E'
),
(
'Opticas Valcarcel S.L.',
'Avenida Cardenal Herrera Oria',
243,
2,
3,
'Madrid',
28035,
'España',
737484847,
838477443,
'3589379J'
),
(
'Opticas Tutusaus Sl',
'Calle Mallorca',
302,
2,
3,
'Barcelona',
08026,
'España',
637378373,
937763383,
'2733883Y'
);

INSERT INTO marcas (nombre)
VALUES 
('Ralph'),
('Lacoste'),
('Dior'),
('Boss'),
('Ray Ban');

INSERT INTO gafas (
id_marca,
id_proveedor,
graduacion, 
tipo_de_montura,
color_de_montura,
color_de_cristal,
precio
)
VALUES
(2, 3, '-3', 'Pasta', 'Negro', 'Transparente', 230),
(1, 1, '+3', 'Metal', 'Negro', 'Transparente', 200),
(3, 5, '-7', 'Metal', 'Rojo', 'Transparente', 1300),
(4, 4, '-5', 'Pasta', 'Negro', 'Transparente', 550),
(5, 2, '-2', 'Pasta', 'Azul marino', 'Transparente', 270);

INSERT INTO clientes (
nombre,
apellido,
domicilio_postal,
telefono,
correo_electronico,
fecha_registro,
id_referencia_cliente
)
VALUES 
('Irina', 'Semichasova', '08033', 73388337, 'myemail@gmail.com', '2017', NULL),
('Igor', 'Ivanov', '08053', 63737383, 'email@gmail.com', '2018', NULL),
('Ivan', 'Petrov', '08040', 94448483, 'my@gmail.com', '2019', NULL),
('Maria', 'Semenova', '08030', 74878782, 'mail@gmail.com', '2022', NULL),
('Elena', 'Noskova', '08023', 8728475, 'mymail@gmail.com', '2023', NULL);
 
INSERT INTO empleado (nombre)
VALUES 
('Maria'),
('Jose'),
('John'),
('Josephina'),
('Jesus');
 
INSERT INTO ventas (
id_cliente,
id_gafas,
id_empleado,
fecha_venta)
VALUES
(61, 2, 3, '2023-01-01'),
(62, 3, 2, '2021-01-01'),
(63, 3, 3, '2020-01-01'),
(64, 4, 4, '2024-01-01'),
(65, 5, 5, '2023-01-01'),
(62, 1, 2, '2023-01-01'),
(63, 3, 5, '2023-01-01');