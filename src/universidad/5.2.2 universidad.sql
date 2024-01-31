# Check as Active base:
USE universidad;

#1. Returns a list with the names of all the professors and the departments they are linked to. The list must also show those professors who do not have any associated department. The listing must return four columns, department name, first last name, second last name and teacher's name. The result will be sorted alphabetically from lowest to highest by department name, last name and first name.
# Возвращает список с именами всех профессоров и кафедр, с которыми они связаны. В списке также должны быть указаны те профессора, у которых нет соответствующей кафедры. В списке должны быть возвращены четыре столбца: название отдела, первая фамилия, вторая фамилия и имя учителя. Результат будет отсортирован в алфавитном порядке от низшего к высшему по названию отдела и фамилиям.
SELECT 
departamento.nombre AS nombre_departamento,
persona.apellido1,
persona.apellido2,
persona.nombre
FROM persona
LEFT JOIN profesor ON persona.id = profesor.id_profesor 
LEFT JOIN departamento ON profesor.id_departamento = departamento.id
ORDER BY 
departamento.nombre ASC,
apellido1 ASC, 
apellido2 ASC;

#2. Returns a list of professors who are not associated with a department.
# Возвращает список профессоров, не связанных с кафедрой. 
SELECT 
departamento.nombre AS nombre_departamento,
persona.apellido1,
persona.apellido2,
persona.nombre
FROM persona
LEFT JOIN profesor ON persona.id = profesor.id_profesor 
LEFT JOIN departamento ON profesor.id_departamento = departamento.id
WHERE profesor.id_departamento IS NULL;

#3. Returns a list of departments that do not have associate professors. 
# Возвращает список кафедр, на которых нет профессоров. 
SELECT 
departamento.nombre AS nombre_departamento
FROM departamento
LEFT JOIN profesor ON departamento.id = profesor.id_departamento
WHERE profesor.id_departamento IS NULL;

#4. Returns a list of teachers who do not teach any subjects. 
# Возвращает список профессоров, которые не преподают ни одного предмета. 
SELECT 
asignatura.nombre  AS nombre_asignatura,
persona.apellido1,
persona.apellido2,
persona.nombre
FROM persona
LEFT JOIN profesor ON persona.id = profesor.id_profesor 
LEFT JOIN asignatura ON profesor.id_profesor = asignatura.id_profesor 
WHERE asignatura.id_profesor IS NULL;

#5. Returns a list of subjects that do not have an assigned teacher.
# Возвращает список предметов, для которых нет назначенного преподавателя.
SELECT 
asignatura.nombre AS nombre_asignatura,
asignatura.id_profesor 
FROM asignatura 
WHERE asignatura.id_profesor IS NULL;

#6. Returns a list of all departments that have not taught subjects in any school year.
# Возвращает список всех департаментов, на которых не преподавали предметы ни в одном учебном году. 
SELECT departamento.nombre AS nombre_departamento
FROM departamento 
LEFT JOIN profesor ON departamento.id = profesor.id_departamento 
LEFT JOIN asignatura ON profesor.id_profesor = profesor.id_profesor 
LEFT JOIN curso_escolar ON asignatura.id = curso_escolar.id 
WHERE asignatura.id IS NULL;

