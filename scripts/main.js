(function () {
	var collection1 = new Collection (users);

	// log initial state
	//logItems(collection1.getItems());

	console.log(collection1.getSize());
	console.log(collection1.getItem(5));
	console.log(collection1.filterParam([{skill: 'javascript'}, {gender: 'Male'}]));
	console.log(collection1.filterBy([{skill: 'javascript'}, {gender: 'Male'}], 'age'));
	//logItems(collection1.simpleFilter('skill', 'javascript'))
	//var filtered = collection1.filterBy([{skill: 'c++'}, {gender: 'Female'}]);
	//logItems(filtered);
	//console.log(filtered);
	
	//var sortedByAge = collection1.sortByField('age');
	//var sortedByName = collection1.sortByField('first_name');
	//var simpleFilter = collection1.simpleFilter('skill', 'javascript');

	// log sorted states
	//logItems(sortedByAge);
	//logItems(sortedByName);

} ());