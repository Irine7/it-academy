INSERT INTO usuarios (email, password, nombre_usuario, fecha_nacimiento, sexo, pais, codigo_postal, tipo_usuario)
VALUES
('usuario1@gmail.com', 'pass123', 'Usuario1', '1990-01-15', 'Femenino', 'España', '08001', 'free'),
('usuario2@gmail.com', 'pass456', 'Usuario2', '1985-05-20', 'Masculino', 'Argentina', 'C1425ABC', 'prèmium'),
('usuario3@gmail.com', 'pass789', 'Usuario3', '1995-09-10', 'Femenino', 'México', '01000', 'free');

INSERT INTO subscripciones_premium (id_usuario, fecha_inicio, fecha_renovacion, forma_pago, numero_tarjeta, mes_caducidad, anyo_caducidad, codigo_seguridad, usuario_paypal)
VALUES
(2, '2023-01-01', '2023-02-01', 'Tarjeta de crédito', '1234567812345678', 12, 25, 123, NULL),
(3, '2024-03-15', '2024-04-15', 'PayPal', NULL, NULL, NULL, NULL, 'usuario3_paypal');

INSERT INTO subscripciones_premium (id_usuario, fecha_inicio, fecha_renovacion, forma_pago, numero_tarjeta, mes_caducidad, anyo_caducidad, codigo_seguridad, usuario_paypal)
VALUES
(1, '2023-01-01', '2023-02-01', 'Tarjeta', '1234567890123456', 12, 2023, 123, NULL),
(2, '2024-01-01', '2024-02-01', 'Tarjeta', '2345678901234567', 11, 2024, 456, NULL),
(3, '2024-02-01', '2024-03-01', 'PayPal', NULL, NULL, NULL, NULL, 'usuario_paypal');

INSERT INTO pagos_premium (id_suscripcion, fecha_pago, numero_orden, total)
VALUES
(1, '2023-01-05', 12345, 9.99),
(2, '2024-04-01', 67890, 14.99),
(3, '2024-05-10', 98765, 9.99);

INSERT INTO playlists (id_usuario, titulo, num_canciones, fecha_creacion, eliminada, fecha_eliminacion, tipo_playlist, compartida)
VALUES
(1, 'Lista Rock', 15, '2023-01-10', FALSE, NULL, 'activa', FALSE),
(2, 'Mis Favoritas', 20, '2024-03-20', FALSE, NULL, 'activa', TRUE),
(3, 'Playlist Caliente', 10, '2024-05-01', FALSE, NULL, 'activa', TRUE);

INSERT INTO canciones (titulo, duracion, reproducciones)
VALUES
('Cancion1', '03:45', 1000),
('Cancion2', '04:30', 800),
('Cancion3', '02:55', 1200);

INSERT INTO albums (titulo, anyo_publicacion, portada_imagen)
VALUES
('Álbum1', 2022, 'album1.jpg'),
('Álbum2', 2023, 'album2.jpg'),
('Álbum3', 2024, 'album3.jpg');

INSERT INTO artistas (nombre, imagen_artista)
VALUES
('Artista1', 'artista1.jpg'),
('Artista2', 'artista2.jpg'),
('Artista3', 'artista3.jpg');

INSERT INTO seguimientos_artistas (id_usuario, id_artista)
VALUES
(1, 1),
(2, 2),
(3, 3);

INSERT INTO relaciones_artistas (id_artista_principal, id_artista_relacionado)
VALUES
(1, 2),
(2, 3),
(3, 1);

INSERT INTO canciones_favoritas (id_usuario, id_cancion)
VALUES
(1, 1),
(2, 2),
(3, 3);

INSERT INTO albums_favoritos (id_usuario, id_album)
VALUES
(1, 1),
(2, 2),
(3, 3);
