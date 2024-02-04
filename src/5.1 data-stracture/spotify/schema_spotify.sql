-- Crear la base de datos de Spotify
CREATE DATABASE IF NOT EXISTS spotify;

USE spotify;

-- Tabla de usuarios
CREATE TABLE usuarios (
id_usuario INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(30) UNIQUE,
password VARCHAR(15),
nombre_usuario VARCHAR(30),
fecha_nacimiento DATE,
sexo VARCHAR(10),
pais VARCHAR(30),
codigo_postal VARCHAR(10),
tipo_usuario ENUM('free', 'prèmium'));

CREATE TABLE subscripciones_premium (
id_suscripcion INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT,
fecha_inicio DATE,
fecha_renovacion DATE,
forma_pago VARCHAR(20),
numero_tarjeta VARCHAR(16),
mes_caducidad INT,
anyo_caducidad INT,
codigo_seguridad INT,
usuario_paypal VARCHAR(30),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario));


CREATE TABLE pagos_premium (
id_pago INT AUTO_INCREMENT PRIMARY KEY,
id_suscripcion INT,
fecha_pago DATE,
numero_orden INT UNIQUE,
total DECIMAL(10, 2),
FOREIGN KEY (id_suscripcion) REFERENCES subscripciones_premium(id_suscripcion));

CREATE TABLE playlists (
id_playlist INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT,
titulo VARCHAR(50),
num_canciones INT,
fecha_creacion DATE,
eliminada BOOLEAN,
fecha_eliminacion DATE,
tipo_playlist ENUM('activa', 'esborrada'),
compartida BOOLEAN,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario));

CREATE TABLE canciones (
id_cancion INT AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(50),
duracion TIME,
reproducciones INT);

CREATE TABLE albums (
id_album INT AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(50),
anyo_publicacion YEAR,
portada_imagen VARCHAR(50));

CREATE TABLE artistas (
id_artista INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(50),
imagen_artista VARCHAR(50));

CREATE TABLE seguimientos_artistas (
id_usuario INT,
id_artista INT,
PRIMARY KEY (id_usuario, id_artista),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
FOREIGN KEY (id_artista) REFERENCES artistas(id_artista));

CREATE TABLE relaciones_artistas (
id_artista_principal INT,
id_artista_relacionado INT,
PRIMARY KEY (id_artista_principal, id_artista_relacionado),
FOREIGN KEY (id_artista_principal) REFERENCES artistas(id_artista),
FOREIGN KEY (id_artista_relacionado) REFERENCES artistas(id_artista));

CREATE TABLE canciones_favoritas (
id_usuario INT,
id_cancion INT,
PRIMARY KEY (id_usuario, id_cancion),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
FOREIGN KEY (id_cancion) REFERENCES canciones(id_cancion));

CREATE TABLE albums_favoritos (
id_usuario INT,
id_album INT,
PRIMARY KEY (id_usuario, id_album),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
FOREIGN KEY (id_album) REFERENCES albums(id_album));