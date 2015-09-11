#easy-mongoJS  


##Making the use of MongoDB very simple. 
    
**Implementation Requirements**   
     
 - [NodeJS] [node-requirements]
 - [MongoDB] [mongodb-requirements] 
 

and your ready to go...

**Implementation**   
Terminal   
```bash
$ npm install easy-mongoJS --save
```
Javascript file
```javascript
var mgo = require('easy-mongoJS');


```

Get an array of users  
Create an object to hold the collection name, projection and query

```javascript
var param = {
	collection: "registered",
	query: { 
		"firstname": 1,
		"lastname": 1, 
		"email": 1, 
		"_id": 0 
	},
	projection: {}
}

```
And simply call the following function and pass your `param` object into the `getRecordArray` function

```javascript
mgo.getConnection('users',  function(db) {
	mgo.getRecordArray(db, param, function(doc) {
		console.log(doc);
	});
})
```
The above construct does two things:
- connects to the database. 
- uses the connection to retrieve a required set of data


Other examples are :
Get an array of records/documents returned one at a time.
```javascript
mgo.getConnection('users',  function(db) {
	mgo.getEachRecord(db, param, function(doc) {
	  console.log(doc);
 	});
})
```
Get a single record/document
```javascript
mgo.getConnection('users', function(db) {
 	mgo.getOneRecord(db, param, function(doc) {
 		console.log(doc);
 	});
})
```

Insert a record/document
```javascript
//create an object to insert into function
var userObj = {
	collection: "registered",
	record: { 
		"firstname": "Bob",
		"lastname": "Bar",
		"email": "bob@someplace.com"
	}
}

mgo.getConnection('users',  function(db) {
  mgo.insertOneRecord(db, userObj, function(result) {
 	  console.log(result);
  })
});
```
[requirements]: https://github.com/jquery/content/issues/4  
[node-requirements]: https://nodejs.org/
[mongodb-requirements]: https://www.mongodb.org/
[npm-requirements]: https://docs.npmjs.com/getting-started/installing-node
[homebrew-requirements]: http://brew.sh/
