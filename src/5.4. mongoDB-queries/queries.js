// 1. Write a query to display all documents in the Restaurants collection.
// 1. Напишите запрос для отображения всех документов в коллекции Restaurants.
db.restaurants.find();

// 2. Write a query to display the restaurant_id, name, borough, and cuisine of all documents in the Restaurants collection.
// 2. Напишите запрос для отображения Restaurant_id, названия, района и кухни всех документов в коллекции Restaurants.
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });

// 3. Write a query to display the restaurant_id, name, borough, and cuisine, but excluding the _id field for all documents in the Restaurants collection.
// 3. Напишите запрос для отображения Restaurant_id, названия, района и кухни, но исключая поле _id для всех документов в коллекции Restaurants.
db.restaurants.find(
	{},
	{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
);

// 4. Write a query to display restaurant_id, name, borough, and zip code, but excluding the _id field for all documents in the Restaurants collection.
// 4. Напишите запрос для отображения Restaurant_id, названия, района и почтового индекса, но исключая поле _id для всех документов в коллекции Restaurants.
db.restaurants.find(
	{},
	{ restaurant_id: 1, name: 1, borough: 1, address: { zipcode: 1 }, _id: 0 }
);

// 5. Write a query to show all the restaurants that are in the Bronx.
// 5. Напишите запрос, чтобы показать все рестораны, которые есть в Бронксе.
db.restaurants.find({ borough: 'Bronx' });

// 6. Write a query to show the first 5 restaurants that are in the Bronx.
// 6. Напишите запрос, чтобы показать первые 5 ресторанов, находящихся в Бронксе.
db.restaurants.find({ borough: 'Bronx' }).limit(5);

// 7. Enter a query to display all 5 restaurants after skipping the first 5 that are in the Bronx.
// 7. Введите запрос, чтобы отобразить все 5 ресторанов, пропустив первые 5, находящиеся в Бронксе.
db.restaurants.find({ borough: 'Bronx' }).skip(5).limit(5);

// 8. Write a query to find the restaurants that have a score greater than 90.
// 8. Напишите запрос, чтобы найти рестораны с оценкой выше 90.
db.restaurants.find({ 'grades.score': { $gt: 90 } });

// 9. Write a query to find restaurants that have a score greater than 80 but less than 100.
// 9. Напишите запрос, чтобы найти рестораны с оценкой выше 80, но ниже 100.
db.restaurants.find({ 'grades.score': { $gt: 80, $lt: 100 } });

// 10. Enter a query to find restaurants that are located at a longitude less than -95.754168.
// 10. Введите запрос, чтобы найти рестораны, расположенные на долготе меньше -95,754168.
db.restaurants.find({ 'address.coord.0': { $lt: -95.754168 } });

// 11. Write a MongoDB query to find restaurants that do not serve 'American' food and have a score greater than 70 and longitude less than -65.754168.
// 11. Напишите запрос MongoDB, чтобы найти рестораны, в которых не подают «американскую» еду, с оценкой выше 70 и долготой ниже -65,754168.
db.restaurants.find({
	cuisine: { $ne: 'American' },
	'grades.score': { $gt: 70 },
	'address.coord.0': { $lt: -65.754168 },
});

// 12. Write a query to find restaurants that do not prepare 'American' food and have a score higher than 70 and which, in addition, are located in longitudes lower than -65.754168. Note: Do this query without using the $and operator.
// 12. Напишите запрос, чтобы найти рестораны, которые не готовят «американскую» еду и имеют рейтинг выше 70 и которые к тому же расположены на долготе ниже -65,754168. Примечание. Выполните этот запрос без использования оператора $and.
db.Restaurants.find({
	cuisine: { $ne: 'American' },
	'grades.score': { $gt: 70 },
	'address.coord.0': { $lt: -65.754168 },
});

// 13. Enter a query to find restaurants that do not serve 'American' food, have an 'A' rating and are not in Brooklyn. The document should be displayed according to cuisine in descending order.
// 13. Введите запрос, чтобы найти рестораны, которые не подают «американскую» еду, имеют рейтинг «А» и находятся за пределами Бруклина. Документ должен отображаться по кухне в порядке убывания.
db.Restaurants.find({
	cuisine: { $ne: 'American' },
	'grades.grade': 'A',
	borough: { $ne: 'Brooklyn' },
}).sort({ cuisine: -1 });

// 14. Write a query to find the restaurant_id, name, borough and cuisine for those restaurants that contain 'Wil' in the first three letters of their name.
// 14. Напишите запрос, чтобы найти Restaurant_id, название, район и кухню для тех ресторанов, которые содержат слово «Wil» в первых трех буквах названия.
db.restaurants.find(
	{ name: { $regex: /^Wil/i } },
	{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// 15. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that contain 'ces' in the last three letters of their name.
// 15. Напишите запрос, чтобы найти Restaurant_id, название, район и кухню для тех ресторанов, которые содержат «ces» в последних трех буквах названия.
db.restaurants.find(
	{ name: { $regex: 'ces$' } },
	{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// 16. Write a query to find the restaurant_id, name, borough and cuisine for those restaurants that contain 'Reg' anywhere in their name.
// 16. Напишите запрос, чтобы найти Restaurant_id, название, район и кухню для тех ресторанов, в названии которых есть слово «Reg».

db.restaurants.find(
	{ name: { $regex: 'Reg' } },
	{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// 17. Write a query to find restaurants that belong to the Bronx and prepare American or Chinese dishes.
// 17. Напишите запрос, чтобы найти рестораны, принадлежащие Бронксу и готовящие блюда американской или китайской кухни.

db.restaurants.find({
	borough: 'Bronx',
	cuisine: { $in: ['American', 'Chinese'] },
});

// 18. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that belong to Staten Island, Queens, Bronx, or Brooklyn.
// 18. Напишите запрос, чтобы найти Restaurant_id, название, район и кухню для ресторанов, принадлежащих Стейтен-Айленду, Квинсу, Бронксу или Бруклину.

db.restaurants.find(
	{
		borough: {
			$in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'],
		},
	},
	{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// 19. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants NOT in Staten Island, Queens, Bronx, or Brooklyn.
// 19. Напишите запрос, чтобы найти Restaurant_id, название, район и кухню для тех ресторанов НЕ в Стейтен-Айленде, Квинсе, Бронксе или Бруклине.

db.restaurants.find(
	{
		borough: {
			$nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'],
		},
	},
	{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// 20. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that score less than 10.
// 20. Напишите запрос, чтобы найти Restaurant_id, название, район и кухню для тех ресторанов, которые набрали меньше 10 баллов.

db.restaurants.find(
	{ 'grades.score': { $lt: 10 } },
	{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// 21. Write a query to find the restaurant_id, name, borough and cuisine for those restaurants that prepare seafood ('seafood') unless they are 'American', 'Chinese' or the restaurant name starts with the letters 'Wil'.
// 21. Напишите запрос, чтобы найти Restaurant_id, название, район и кухню для тех ресторанов, где готовят морепродукты («морепродукты»), если только они не являются «американскими», «китайскими» или название ресторана начинается с букв «Wil».

db.restaurants.find(
	{
		cuisine: 'Seafood',
		$nor: [
			{ cuisine: 'American' },
			{ cuisine: 'Chinese' },
			{ name: { $regex: /^Wil/i } },
		],
	},
	{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// 22. Write a query to find the restaurant_id, name, and grades for those restaurants that achieve a grade of "A" and a score of 11 with an ISODate of "2014-08-11T00:00:00Z".
// 22. Напишите запрос, чтобы найти Restaurant_id, название и оценки для тех ресторанов, которые получили оценку «А» и 11 баллов с ISODate «2014-08-11T00:00:00Z».

db.restaurants.find(
	{
		'grades.grade': 'A',
		'grades.score': 11,
		'grades.date': ISODate('2014-08-11T00:00:00Z'),
	},
	{ restaurant_id: 1, name: 1, grades: 1 }
);

// 23. Write a query to find the restaurant_id, name, and grades for those restaurants where the 2nd element of the grades array contains a grade of "A" and a score of 9 with an ISODate of "2014-08-11T00:00:00Z" .
// 23. Напишите запрос, чтобы найти Restaurant_id, название и оценки для тех ресторанов, где второй элемент массива оценок содержит оценку «А» и оценку 9 с ISODate «2014-08-11T00:00:00Z».

db.restaurants.find(
	{
		'grades.1.grade': 'A',
		'grades.1.score': 9,
		'grades.1.date': ISODate('2014-08-11T00:00:00Z'),
	},
	{ restaurant_id: 1, name: 1, grades: 1 }
);

// 24. Write a query to find the restaurant_id, name, address, and geographic location for those restaurants where the second element of the coord array contains a value between 42 and 52.
// 24. Напишите запрос, чтобы найти Restaurant_id, имя, адрес и географическое местоположение для тех ресторанов, где второй элемент массива координат содержит значение от 42 до 52.

db.restaurants.find(
	{
		'address.coord.1': { $gte: 42, $lte: 52 },
	},
	{ restaurant_id: 1, name: 1, 'address.coord': 1 }
);

// 25. Enter a query to sort restaurants by name in ascending order.
// 25. Введите запрос для сортировки ресторанов по названию в порядке возрастания.

db.restaurants.find().sort({ name: 1 });

// 26. Enter a query to sort restaurants by name in descending order.
// 26. Введите запрос для сортировки ресторанов по названию в порядке убывания.

db.restaurants.find().sort({ name: -1 });

// 27. Write a query to organize restaurants by cuisine name in ascending order and by neighborhood in descending order.
// 27. Напишите запрос, чтобы упорядочить рестораны по названию кухни в порядке возрастания и по району в порядке убывания.

db.restaurants.find().sort({ cuisine: 1, borough: -1 });

// 28. Write a query to find out if the addresses contain the street.
// 28. Напишите запрос, чтобы узнать, содержат ли адреса улицу.

db.restaurants.find({ "address.street": { $exists: true, $ne: "" } });

// 29. Write a query that selects all documents in the restaurant collection where the values of the coord field are of type Double.
// 29. Напишите запрос, который выбирает все документы в коллекции ресторанов, где значения поля координат имеют тип Double.
db.restaurants.find({ "address.coord": { $type: "double" } });

// 30. Write a query that selects the restaurant_id, name, and grade for those restaurants that return 0 as the remainder after dividing any of their scores by 7.
// 30. Напишите запрос, который выбирает Restaurant_id, название и оценку для тех ресторанов, которые возвращают 0 в остатке после деления любой из своих оценок на 7.

db.restaurants.find({ 
	"grades.score": { $mod: [7, 0] } 
}, { 
	restaurant_id: 1, name: 1, "grades": 1 
});

// 31. Write a query to find the restaurant name, borough, longitude, latitude and cuisine for those restaurants that contain 'mon' somewhere in their name.
// 31. Напишите запрос, чтобы найти название ресторана, район, долготу, широту и кухню для тех ресторанов, в названии которых где-то есть слово «mon».

db.restaurants.find({ 
	name: { $regex: /mon/i } 
}, { 
	name: 1, 
	borough: 1, 
	"address.coord": 1, 
	cuisine: 1 
});


// 32. Write a query to find the restaurant name, borough, longitude, latitude and cuisine for those restaurants that contain 'Mad' as the first three letters of their name.
// 32. Напишите запрос, чтобы найти название ресторана, район, долготу, широту и кухню для тех ресторанов, в названии которых есть слово «Mad».

db.restaurants.find({ 
	name: { $regex: /^Mad/i } 
}, { 
	name: 1, 
	borough: 1, 
	"address.coord": 1, 
	cuisine: 1 
});