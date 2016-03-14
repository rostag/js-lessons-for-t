function Collection(list) {
	//this.list = list;
	this.getItems = function() {
		return list
	};

}

Collection.prototype.getItem = function(index) {
	return this.getItems()[index]
}

Collection.prototype.getSize = function() {
	return this.getItems().length
	console.log(this.getItems)
};

Collection.prototype.sortByField = function(list, field) {
	function byField (user1, user2) {
		return user1[field] < user2[field] ? -1 : 1;
	}

	return list.sort(byField);
};

Collection.logItems = function (items) {
	var str = 'Items: ';
	items.forEach(function(item) {
		str += '\nUser Age: ' + item.age + ', First Name: ' + item.first_name + ', gender: ' + item.gender + ', Skill: ' + item.skill;
	});
	console.log(str);
	return str;
}

Collection.prototype.simpleFilter = function simpleFilter (list, fieldName, fieldValue) {  // фильтрует из массива элементов те, у которых поле fieldName  
	var filtered = list.filter(function(user){      // имеет значение fieldValue
		return user[fieldName] === fieldValue;
	});
	return filtered;
}
Collection.prototype.filterBy = function(a1, a2, a3) {
	var list = this.getItems().concat(),
		objFilters,
		self = this;
	if (arguments.length == 1 && typeof a1 === 'object') {   // a1 = [{skill: 'javascript'}, {gender: 'male'}]
		                                           // objFilters = {skill: "javascript", gender: "Male"} :
		return filterParam(a1);
	} 
	if (arguments.length == 2 && typeof a1 === 'object') {
		list = this.filterParam(a1);
		list = this.sortByField(list, a2);
	}
	return list;
}

Collection.prototype.filterParam = function(param1) { //param1 = [{skill: 'javascript'}, {gender: 'male'}]// objFilters = {skill: "javascript", gender: "Male"}
	var list = this.getItems().concat(),
		objFilters,
		self = this;

	objFilters = JSON.parse(JSON.stringify(param1).replace('},{', ',').replace('[', '').replace(']', '')); 
		for (var fieldName in objFilters) {
			list = simpleFilter(list, fieldName, objFilters[fieldName]);
		}
	return list;
}

/*
если в функцию передан второй/третий аргумент в виде строки - это значит, отфильтрованный результат надо 
	отсортировать по переданному полю:
	...filterBy(‘skill’, ‘javascript’, ‘age’) ---> получить всех юзеров со skill=javascript и отсортировать по age
	...filterBy([{skill: ‘javascript’}, {gender: male}], ‘age’) ---> получить всех юзеров со skill=javascript и 
	gender=male и отсортировать их по age

Создать конструктор, который умеет работать с коллекциями.
Конструктор должен работать в ООП-стиле (работаем с this - инкапсуляция, работаем с прототипами - наследование).


Что должен уметь конструктор:
при инициализации он принимает массив юзеров, который не должен быть виден снаружи (приватная переменная)

доступные методы:
-- получить размер коллекции //-- getSize();
-- получить элемент по его индексу //-- getItem();
-- сортировать по определенному полю (...sortBy(‘age’)) // sortByField()

-- фильтровать по определенному полю и его значению:
	если в функцию передали только два аргумента (две строки), то фильтрация происходит по одному полю:
	...filterBy(‘skill’, ‘javascript’) ---> вернет массив, где будут находится только юзеры со skill=javascript
	//simpleFilter()

	если в функцию передали массив с объектами вида {field: value}, то фильтрация происходит по всем полям, 
	которые переданы в массив:
	...filterBy([{skill: ‘javascript’}, {gender: ‘male’}]) ---> вернет массив, где будут находится только юзеры со 
	skill=javascript и gender=male // filterBy

	если в функцию передан второй/третий аргумент в виде строки - это значит, отфильтрованный результат надо 
	отсортировать по переданному полю:
	...filterBy(‘skill’, ‘javascript’, ‘age’) ---> получить всех юзеров со skill=javascript и отсортировать по age
	...filterBy([{skill: ‘javascript’}, {gender: male}], ‘age’) ---> получить всех юзеров со skill=javascript и 
	gender=male и отсортировать их по age

-- найти юзеров по значению поля - функция принимает имя поля и часть строки, которая встречается в значении поля:
	findByValue(‘skill’, ‘ja’) ---> вернет всех юзеров, у которых skill содержит сочетание букв ja
	//Дополнительно: второй аргумент должен содержать не менее двух букв - если введена одна буква, 
	//выдать сообщение “The search string should have at least two characters”


-- создать глубокую копию коллекции

конструктор должен иметь статические методы:
-- проверить, имеется ли определенное поле в заданной коллекции (в каждом из элементов):
-- YourConstructor.checkFieldInCollection(collection, ‘age’) ---> проверяет, есть ли в каждом элементе collection 
поле age
-- проверяет, является ли переданный объект просто массивом или экземпляром YourConstructor:
	var uCollection = new YourConstructor(user);
	var uList = [{}, {}, {}];
	YourConstructor.getCreator(uCollection) ---> ‘YourConstructor’
	YourConstructor.getCreator(uList) ---> ‘Array’
создать новую коллекцию:
YourConstructor.createCollection(users)
эквивалентно ---->
new YourConstructor(users);

“
Пришло время познакомиться с еще одним понятием — статические свойства и методы. 
Статические методы/свойства классов это такие методы/свойства, к которым можно обратиться не создавая 
объект данного класса. Например, мы создаем описание стола. В этом случае, только когда мы создадим реальный 
стол, мы сможем говорить о его высоте и ширине (с учетом погрешностей при производстве). Но вот материал скорее
всего будет один на всех. Также один на всех будет чертеж, название и прочие атрибуты. Т.е. очевидно, что 
некоторые свойства присущи не конкретному объекту, а классу целиком. Тоже самое можно сказать и о методах. 
К ним можно обращаться не создавая объект.
“
*/