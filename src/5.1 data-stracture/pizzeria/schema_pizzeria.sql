CREATE DATABASE IF NOT EXISTS pizzeria;

USE pizzeria;

CREATE TABLE clientes (
id_cliente INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(20),
apellido VARCHAR(20),
domicilio VARCHAR(50),
cogigo_postal INT,
ciudad VARCHAR(30),
provincia VARCHAR(20),
telefono VARCHAR(10));

CREATE TABLE pedido (
id_pedido INT AUTO_INCREMENT PRIMARY KEY,
id_cliente INT REFERENCES clientes(id_cliente),
fecha_pedido DATE,
modo_repartir VARCHAR(30),
precio_total INT);

CREATE TABLE productos (
id_producto INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(20),
descripcion VARCHAR(50),
imagen VARCHAR(50),
precio DECIMAL(10, 2));

-- Добавляем колонку id_categoria в таблицу productos
ALTER TABLE productos
ADD COLUMN id_categoria INT,
ADD FOREIGN KEY (id_categoria) REFERENCES catedorias_producto(id_categoria);


CREATE TABLE pedido_productos (
id_numero_pedido INT AUTO_INCREMENT PRIMARY KEY,
id_pedido INT REFERENCES pedido(id_pedido),
id_producto INT REFERENCES productos(id_producto),
total INT,
precio_total DECIMAL(10, 2));

CREATE TABLE catedorias_producto (
id_categoria INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(20));

CREATE TABLE tienda (
id_tienda INT AUTO_INCREMENT PRIMARY KEY,
domicilio VARCHAR(50),
codigo_postal VARCHAR(10),
ciudad VARCHAR(30),
provincia VARCHAR(20));

CREATE TABLE empleados (
id_empleado INT AUTO_INCREMENT PRIMARY KEY,
id_tienda INT REFERENCES tienda(id_tienda),
nombre VARCHAR(30),
apellido VARCHAR(30), 
nif VARCHAR(15),
telefono VARCHAR(15));

CREATE TABLE reparto (
id_reparto INT AUTO_INCREMENT PRIMARY KEY,
id_pedido INT REFERENCES pedido(id_pedido),
id_repartidor INT REFERENCES empleados(id_empleado),
fecha_reparto DATE);