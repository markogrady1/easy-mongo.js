var mgo = require('./index');
var express = require('express');

var app = express();

var server = app.listen("3009", function(){
  host = server.address().address;
  port = server.address().port;
    console.log("Listening on port: %s", port);
});

var param = {
	collection: "esprima",
	query: { 
		"title": 1,
		"assignee": 1, 
		"created_at": 1, 
		"html_url": 1,  
		"_id": 0 
	},
	projection: {}
}


// mgo.getConnection('issues',  function(db) {
// 	mgo.getRecordArray(db, param, function(doc) {
// 		console.log('caller',doc)
// 	});
// })


// mgo.getConnection('issues',  function(db) {
// 	mgo.getEachRecord(db, param, function(doc) {
// 		console.log('caller',doc)
// 	});
// })

// var param2 = {
// 	collection: "repos",
// 	query: { 
// 		query: {"name": "jquery"},
// 	},
// 	projection: {"html_url": 1}
// }


// mgo.getConnection('repositories',  function(db) {
// 	mgo.getOneRecord(db, param2, function(doc) {
// 		console.log('caller',doc)
// 	});
// })
var param3 = {
	collection: "users",
	record: { 
		"firstname": "Bob",
        "lastname": "Bar",
        "email": "bob@someplace.com"
	}
}
var record = { "username": "Bob", "email": "bob@someplace" };
mgo.getConnection('user',  function(db) {
mgo.insertOneRecord(db, param3, function(result) {
	console.log(result)
})
});
