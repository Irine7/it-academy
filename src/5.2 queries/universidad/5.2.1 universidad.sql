# Check as Active base:
USE universidad;

#1. Returns a list with the first last name, second last name and first name of all the students in alphabetical order.
# Возвращает список с первой фамилией, второй фамилией и именем всех учащихся в алфавитном порядке.
SELECT 
apellido1,
apellido2,
nombre,
tipo
FROM persona
WHERE tipo = 'alumno'
ORDER BY 
apellido1 ASC, 
apellido2 ASC, 
nombre ASC;

#2. Find out the first and last names of students who have not registered their phone number in the database.
# Узнайте имена и фамилии студентов, не зарегистрировавших свой номер телефона в базе данных.
SELECT 
apellido1,
apellido2,
nombre,
tipo,
telefono
FROM persona
WHERE tipo = 'alumno'
AND telefono IS NULL;

#3. Returns the list of students who were born in 1999. 
# Возвращает список студентов, родившихся в 1999 году. 
SELECT 
apellido1,
apellido2,
nombre,
tipo,
fecha_nacimiento
FROM persona
WHERE tipo = 'alumno'
AND fecha_nacimiento BETWEEN '1999-01-01' AND '1999-12-31';

#4. Returns the list of teachers who have not registered their phone number in the database and also their NIF ends in K.
# Возвращает список учителей, которые не зарегистрировали свой номер телефона в базе данных, а также их NIF оканчивается на K.
SELECT 
apellido1,
apellido2,
nombre,
tipo,
telefono,
nif 
FROM persona
WHERE tipo = 'profesor'
AND telefono IS NULL
AND nif LIKE '%K';

#5. Returns the list of subjects that are taught in the first semester, in the third year of the degree that has the identifier 7.
# Возвращает список предметов, которые преподаются в первом семестре, на третьем курсе степени с идентификатором 7.
SELECT 
nombre AS asignatura_nombre,
cuatrimestre, 
curso,
id_grado 
FROM asignatura
WHERE cuatrimestre = '1'
AND curso = '3'
AND id_grado = '7';

#6. Returns a list of professors along with the name of the department to which they are linked. The listing should return four columns, first last name, second last name, first name and department name. The result will be sorted alphabetically from lowest to highest by last name and first name.
# Возвращает список профессоров вместе с названием кафедры, к которой они привязаны. В списке должны быть возвращены четыре столбца: первая фамилия, вторая фамилия, имя и название отдела. Результат будет отсортирован в алфавитном порядке от низшего к высшему по фамилии и имени.
SELECT 
persona.apellido1,
persona.apellido2,
persona.nombre,
departamento.nombre as nombre_departamento
FROM persona
JOIN profesor ON persona.id = profesor.id_profesor
JOIN departamento ON profesor.id_departamento = departamento.id
WHERE persona.tipo = 'profesor'
ORDER BY persona.apellido1,
persona.apellido2,
persona.nombre;

#7. Returns a list with the name of the subjects, start year and end year of the student's school year with NIF 26902806M.
# Возвращает список с названием предметов, годом начала и окончания учебного года учащегося с номером NIF 26902806M.
SELECT 
asignatura.nombre AS nombre_asignatura,
curso_escolar.anyo_inicio,
curso_escolar.anyo_fin,
persona.nif 
FROM alumno_se_matricula_asignatura
JOIN asignatura ON alumno_se_matricula_asignatura.id_asignatura = asignatura.id
JOIN curso_escolar ON alumno_se_matricula_asignatura.id_curso_escolar = curso_escolar.id
JOIN persona ON alumno_se_matricula_asignatura.id_alumno = persona.id
WHERE alumno_se_matricula_asignatura.id_alumno = (
SELECT id
FROM persona
WHERE tipo = 'alumno'
AND nif = '26902806M');

#8. Returns a list with the name of all the departments that have professors who teach a subject in the Degree in Computer Engineering (Plan 2015).
# Возвращает список с названиями всех кафедр, на которых есть профессора, преподающие предмет со степенью в области компьютерной инженерии (план 2015 г.).
SELECT DISTINCT 
departamento.nombre AS nombre_departamento,
grado.nombre AS nombre_grado
FROM departamento
JOIN profesor ON departamento.id = profesor.id_departamento
JOIN asignatura ON profesor.id_profesor = asignatura.id_profesor
JOIN grado ON asignatura.id_grado = grado.id
WHERE grado.id = 4;

#9. Returns a list of all students who have enrolled in a subject during the 2018/2019 school year. 
# Возвращает список всех учащихся, записавшихся на любой предмет в 2018/2019 учебном году. 
SELECT DISTINCT 
persona.nombre,
persona.apellido1,
persona.apellido2,
persona.tipo,
curso_escolar.anyo_inicio,
curso_escolar.anyo_fin 
FROM persona
JOIN alumno_se_matricula_asignatura ON persona.id = alumno_se_matricula_asignatura.id_alumno 
JOIN curso_escolar ON alumno_se_matricula_asignatura.id_curso_escolar = curso_escolar.id 
WHERE curso_escolar.anyo_inicio = 2018
AND curso_escolar.anyo_fin = 2019;