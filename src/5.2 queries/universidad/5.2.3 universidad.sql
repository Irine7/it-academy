# Check as Active base:
USE universidad;

#1. Returns the total number of students. 
# Возвращает общее количество студентов. 
SELECT 
COUNT(tipo) AS total_students
FROM persona
WHERE tipo = 'alumno';

#2. Calculate how many students were born in 1999. 
# Подсчитайте, сколько студентов родилось в 1999 году. 
SELECT 
COUNT(fecha_nacimiento) AS fecha_nacimiento
FROM persona 
WHERE fecha_nacimiento LIKE '%1999%';

#3. Calculate how many teachers there are in each department. The result should only show two columns, one with the name of the department and another with the number of teachers in that department. The result must only include the departments that have associate professors and must be ordered from highest to lowest by the number of professors.
# Посчитайте, сколько преподавателей на каждом факультете. В результате должно отображаться только два столбца: один с названием департамента, а другой с количеством профессоров на этом департаменте. Результат должен включать только департаменты, на которых есть профессора, и должен быть отсортирован по количеству профессоров от самого высокого к самому низкому. 
SELECT 
departamento.nombre AS nombre_departamento,
COUNT(profesor.id_profesor) AS numero_de_profesores
FROM
departamento
LEFT JOIN profesor ON departamento.id = profesor.id_departamento
GROUP BY departamento.nombre 
HAVING COUNT(profesor.id_profesor) > 0 
ORDER BY numero_de_profesores DESC;

#4. Returns a list with all the departments and the number of professors in each of them. Keep in mind that there may be departments that do not have associate professors. These departments must also appear in the list.
# Возвращает список всех департаментов и количества профессоров на каждом из них. Имейте в виду, что могут быть департаменты, на которых нет профессоров. Эти департаменты также должны появиться в списке.
SELECT 
departamento.nombre AS nombre_departamento,
COUNT(profesor.id_profesor) AS numero_de_profesores
FROM
departamento
LEFT JOIN profesor ON departamento.id = profesor.id_departamento
GROUP BY departamento.nombre 
HAVING COUNT(profesor.id_profesor) >= 0 
ORDER BY numero_de_profesores DESC;

#5. Returns a list with the name of all the existing degrees in the database and the number of subjects each one has. Note that there may be degrees that do not have associated subjects. These grades must also appear in the listing. The result must be ordered from highest to lowest by the number of subjects. 
# Возвращает список с названиями всех существующих степеней в базе данных и количеством предметов по каждому из них. Обратите внимание, что могут быть степени, не имеющие связанных предметов. Эти оценки также должны присутствовать в списке. Результат необходимо отсортировать от большего к меньшему по количеству предметов. 
SELECT 
grado.nombre AS nombre_grado,
COUNT(asignatura.id) AS numero_de_asignaturas 
FROM grado
LEFT JOIN asignatura ON grado.id = asignatura.id_grado 
GROUP BY grado.nombre
ORDER BY numero_de_asignaturas DESC;

#6. Returns a list with the name of all the existing degrees in the database and the number of subjects each has, of the degrees that have more than 40 associated subjects. 
# Возвращает список с названиями всех существующих степеней в базе данных и количеством предметов, которые имеет каждый из степеней, с которыми связано более 40 предметов. 
SELECT 
grado.nombre AS nombre_grado,
COUNT(asignatura.id) AS numero_de_asignaturas 
FROM grado
LEFT JOIN asignatura ON grado.id = asignatura.id_grado 
GROUP BY grado.nombre
HAVING numero_de_asignaturas >= 40;

#7. Returns a list showing the name of the degrees and the sum of the total number of credits for each subject type. The result must have three columns: name of the degree, type of subject and the sum of the credits of all subjects of that type.  
# Возвращает список, показывающий названия степеней и сумму общего количества кредитов для каждого типа предмета. Результат должен иметь три столбца: название степени, тип предмета и сумма кредитов по всем предметам этого типа. 
SELECT 
grado.nombre AS nombre_grado,
asignatura.tipo AS tipo_asignatura,
SUM(asignatura.creditos) AS suma_creditos 
FROM grado
LEFT JOIN asignatura ON grado.id = asignatura.id_grado
GROUP BY grado.nombre, asignatura.tipo;

#8. Returns a list that shows how many students have enrolled in a subject in each of the school years. The result must show two columns, one column with the start year of the school year and another with the number of enrolled students. 
# Возвращает список, показывающий, сколько учащихся записалось на данный предмет в каждый учебный год. Результат должен содержать два столбца: в одном столбце указан год начала учебного года, а в другом — количество зачисленных учащихся. 
SELECT 
curso_escolar.anyo_inicio,
COUNT(DISTINCT alumno_se_matricula_asignatura.id_alumno) AS alumnos_matriculados
FROM curso_escolar
LEFT JOIN alumno_se_matricula_asignatura ON curso_escolar.id = alumno_se_matricula_asignatura.id_curso_escolar
GROUP BY curso_escolar.anyo_inicio;

#9. Returns a list with the number of subjects taught by each teacher. The list must take into account those professors who do not teach any subjects. The result will show five columns: id, name, first last name, second last name and number of subjects. The result will be ordered from highest to lowest by the number of subjects. 
# Возвращает список с количеством предметов, преподаваемых каждым учителем. В списке должны быть учтены те профессора, которые не преподают никаких предметов. В результате отобразятся пять столбцов: идентификатор, имя, первая фамилия, вторая фамилия и количество предметов. Результат будет упорядочен от большего к меньшему по количеству предметов. 
SELECT 
persona.id,
persona.nombre,
persona.apellido1,
persona.apellido2,
COUNT(asignatura.id)  AS numero_asignaturas
FROM persona
LEFT JOIN profesor ON persona.id = profesor.id_profesor 
LEFT JOIN asignatura ON profesor.id_profesor = asignatura.id_profesor 
GROUP BY 
persona.id,
persona.nombre,
persona.apellido1,
persona.apellido2 
ORDER BY numero_asignaturas DESC;

#10. Returns all data for the youngest student.
# Возвращает все данные для самого младшего студента. 
SELECT 
nombre,
apellido1,
apellido2,
fecha_nacimiento
FROM 
persona
WHERE tipo = 'alumno'
ORDER BY fecha_nacimiento DESC
LIMIT 1;

#11. Returns a list of professors who have an associated department and who do not teach any subjects. 
# Возвращает список профессоров, у которых есть связанная кафедра и которые не преподают никаких предметов. 
SELECT 
persona.nombre,
persona.apellido1,
persona.apellido2,
asignatura.nombre AS nombre_asignatura
FROM persona
JOIN profesor ON persona.id = profesor.id_profesor 
LEFT JOIN asignatura ON profesor.id_profesor = asignatura.id_profesor 
WHERE profesor.id_departamento IS NOT NULL 
AND asignatura.id_profesor IS NULL;

