var data = require("../data.json");

exports.addFriend = function(request, response) { 
	var one = request.query.name;
	var two = request.query.description;
	var one = {'name': one, 'description': two, "imageURL": "http:://lorempixel.com/400/400/people"};
	console.log(one);
	data.friends.push(newFriend);
	response.render('index', data);

 }