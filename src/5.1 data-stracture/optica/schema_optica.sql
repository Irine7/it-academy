CREATE DATABASE IF NOT EXISTS optica;

USE optica;

CREATE table proveedores (
id_proveedor INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(50),
calle VARCHAR(50),
numero_de_calle INT,
piso INT,
puerta INT,
ciudad VARCHAR(30),
codigo_postal VARCHAR(10),
pais VARCHAR(30),
telefono INT, 
fax INT,
nif VARCHAR(20)
);

CREATE table marcas (
id_marca INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(20)
);

CREATE table gafas (
id_gafas INT AUTO_INCREMENT PRIMARY KEY,
id_marca INT,
id_proveedor INT,
graduacion VARCHAR(10), 
tipo_de_montura VARCHAR(50),
color_de_montura VARCHAR(50),
color_de_cristal VARCHAR(50),
precio DECIMAL(10, 2),
FOREIGN KEY (id_proveedor) REFERENCES proveedores(id_proveedor),
FOREIGN KEY (id_marca) REFERENCES marcas(id_marca));

CREATE table clientes (
id_cliente INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100),
apellido VARCHAR(100),
domicilio_postal VARCHAR(100),
telefono INT,
correo_electronico VARCHAR(50),
fecha_registro INT,
id_referencia_cliente INT,
FOREIGN KEY (id_referencia_cliente) REFERENCES clientes(id_cliente)
);

CREATE table empleado (
id_empleado INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100),
apellido VARCHAR(100)
);

CREATE table ventas (
id_venta INT AUTO_INCREMENT PRIMARY KEY,
id_cliente INT,
id_gafas INT,
id_empleado INT,
fecha_venta DATE,
FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
FOREIGN KEY (id_gafas) REFERENCES gafas(id_gafas),
FOREIGN KEY (id_empleado) REFERENCES empleado(id_empleado)
);
