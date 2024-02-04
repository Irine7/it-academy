USE youtube;

INSERT INTO usuarios (email, password, nombre, fecha_nacimiento, sexo, pais, codigo_postal)
VALUES
('usuario1@email.com', 'contrasena1', 'Usuario Uno', '1990-01-15', 'Femenino', 'España', '28001'),
('usuario2@email.com', 'contrasena2', 'Usuario Dos', '1985-05-22', 'Masculino', 'Argentina', 'C1425ABC'),
('usuario3@email.com', 'contrasena3', 'Usuario Tres', '1992-11-10', 'Femenino', 'México', 'CP03100');

INSERT INTO videos (id_usuario, titulo, descripcion, tamaño, nombre_archivo, duracion_video, thumbnail, reproducciones, likes, dislikes, estado, fecha_publicacion)
VALUES
(1, 'Video Uno', 'Descripción del Video Uno', 1024, 'video_uno.mp4', '00:10:30', 'thumbnail1.jpg', 1000, 50, 5, 'publico', '2024-02-03 08:30:00'),
(2, 'Video Dos', 'Descripción del Video Dos', 800, 'video_dos.mp4', '00:08:45', 'thumbnail2.jpg', 800, 40, 2, 'publico', '2024-02-02 12:45:00'),
(3, 'Video Tres', 'Descripción del Video Tres', 1200, 'video_tres.mp4', '00:12:15', 'thumbnail3.jpg', 1200, 60, 8, 'publico', '2024-02-01 18:15:00');

INSERT INTO etiquetas (nombre_etiqueta)
VALUES
('Entretenimiento'),
('Tecnología'),
('Viajes');

INSERT INTO videos_etiquetas (id_video, id_etiqueta)
VALUES
(1, 1),
(1, 2),
(2, 2),
(3, 3);

INSERT INTO canales (id_usuario, nombre_canal, descripcion, fecha_creacion)
VALUES
(1, 'Canal de Usuario Uno', 'Descripción del canal de Usuario Uno', '2024-01-30'),
(2, 'Canal de Usuario Dos', 'Descripción del canal de Usuario Dos', '2024-01-28'),
(3, 'Canal de Usuario Tres', 'Descripción del canal de Usuario Tres', '2024-01-25');

INSERT INTO suscripciones (id_usuario, id_canal, fecha_suscripcion)
VALUES
(2, 1, '2024-01-31'),
(3, 1, '2024-02-01'),
(1, 2, '2024-01-29');

INSERT INTO interacciones_videos (id_usuario, id_video, tipo_interaccion, fecha_interaccion)
VALUES
(1, 1, 'like', '2024-02-03 09:00:00'),
(2, 1, 'dislike', '2024-02-03 09:30:00'),
(3, 2, 'like', '2024-02-02 13:00:00');

INSERT INTO playlists (id_usuario, nombre_playlist, fecha_creacion, estado)
VALUES
(1, 'Mis Favoritos', '2024-02-01', 'privada'),
(2, 'Música Relajante', '2024-02-02', 'publica'),
(3, 'Videos Interesantes', '2024-02-03', 'publica');

INSERT INTO playlists_videos (id_playlist, id_video_playlist)
VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 1);

INSERT INTO comentarios (id_usuario, id_video, texto_comentario, fecha_comentario)
VALUES
(1, 1, 'Excelente video, me encantó', '2024-02-03 10:00:00'),
(2, 1, 'No estoy de acuerdo con el contenido', '2024-02-03 10:30:00'),
(3, 2, 'Buenísimo, gracias por compartir', '2024-02-02 14:00:00');

INSERT INTO interacciones_comentarios (id_usuario, id_comentario, tipo_interaccion, fecha_interaccion)
VALUES
(1, 1, 'like', '2024-02-03 10:30:00'),
(2, 1, 'dislike', '2024-02-03 11:00:00'),
(3, 2, 'like', '2024-02-02 15:30:00');


