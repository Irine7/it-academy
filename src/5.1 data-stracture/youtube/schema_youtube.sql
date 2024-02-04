CREATE  DATABASE IF NOT EXISTS youtube;

USE youtube;

CREATE TABLE usuarios (
id_usuario INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(30) UNIQUE, 
password VARCHAR(15),
nombre VARCHAR(30), 
fecha_nacimiento DATE,
sexo VARCHAR(10),
pais VARCHAR(30),
codigo_postal VARCHAR(10));

CREATE TABLE videos (
id_video INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT,
titulo VARCHAR(50),
descripcion TEXT,
tamaño INT,
nombre_archivo VARCHAR(30),
duracion_video TIME,
thumbnail VARCHAR(30),
reproducciones INT,
likes INT,
dislikes INT,
estado ENUM('publico', 'oculto', 'privado'),
fecha_publicacion DATETIME,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario));

CREATE TABLE etiquetas (
id_etiqueta INT AUTO_INCREMENT PRIMARY KEY,
nombre_etiqueta VARCHAR(30));

CREATE TABLE videos_etiquetas (
id_video INT,
id_etiqueta INT,
PRIMARY KEY (id_video, id_etiqueta),
FOREIGN KEY (id_video) REFERENCES videos(id_video),
FOREIGN KEY (id_etiqueta) REFERENCES etiquetas(id_etiqueta));

CREATE TABLE canales (
id_canal INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT,
nombre_canal VARCHAR(30),
descripcion TEXT,
fecha_creacion DATE,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario));

CREATE TABLE suscripciones (
id_usuario INT,
id_canal INT,
fecha_suscripcion DATE,
PRIMARY KEY (id_usuario, id_canal),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
FOREIGN KEY (id_canal) REFERENCES canales(id_canal));

CREATE TABLE interacciones_videos (
id_usuario INT,
id_video INT,
tipo_interaccion ENUM('like', 'dislike'),
fecha_interaccion DATETIME,
PRIMARY KEY (id_usuario, id_video),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
FOREIGN KEY (id_video) REFERENCES videos(id_video)); 

CREATE TABLE playlists (
id_playlist INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT,
nombre_playlist VARCHAR(50),
fecha_creacion DATE,
estado ENUM('publica', 'privada'),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario));

CREATE TABLE playlists_videos (
id_playlist INT,
id_video_playlist INT,
PRIMARY KEY (id_playlist, id_video_playlist),
FOREIGN KEY (id_playlist) REFERENCES playlists(id_playlist),
FOREIGN KEY (id_video_playlist) REFERENCES videos(id_video)
);

CREATE TABLE comentarios (
id_comentario INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT,
id_video INT,
texto_comentario TEXT,
fecha_comentario DATETIME,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
FOREIGN KEY (id_video) REFERENCES videos(id_video)
);

CREATE TABLE interacciones_comentarios (
id_usuario INT,
id_comentario INT,
tipo_interaccion ENUM('like', 'dislike'),
fecha_interaccion DATETIME,
PRIMARY KEY (id_usuario, id_comentario),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
FOREIGN KEY (id_comentario) REFERENCES comentarios(id_comentario));