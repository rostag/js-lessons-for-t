(function () {
	var collection1 = new Collection (users);

	// log initial state
	//Collection.logItems(collection1.getItems());

	console.log(collection1.getSize());
	console.log(collection1.getItem(5));
	Collection.logItems(collection1.filterParam([{skill: 'javascript'}, {gender: 'Male'}]));
	Collection.logItems(collection1.filterBy([{skill: 'javascript'}, {gender: 'Male'}], 'age'));
	//Collection.logItems(collection1.simpleFilter('skill', 'javascript'))
	//var filtered = collection1.filterBy([{skill: 'c++'}, {gender: 'Female'}]);
	//Collection.logItems(filtered);
	//console.log(filtered);
	
	//var sortedByAge = collection1.sortByField('age');
	//var sortedByName = collection1.sortByField('first_name');
	//var simpleFilter = collection1.simpleFilter('skill', 'javascript');

	// log sorted states
	//Collection.logItems(sortedByAge);
	//Collection.logItems(sortedByName);

} ());