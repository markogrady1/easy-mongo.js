var conf = require("./conf/dbConfig");

var mongoClient = require("mongodb").MongoClient;

var mong = {}
mong.getConnection = function(dbase, callback) {
	mongoClient.connect(conf.mdb + conf.mhost + conf.mport + dbase, function(err, db) {
		if (err) throw err;
		callback(db);
	});
};


mong.getRecordArray = function(db, paramObj, callback) {
	db.collection(paramObj.collection).find(paramObj.projection ,paramObj.query).toArray(function(err, doc) {
		if (err) throw err;
		db.close();
		callback(doc);		
	});
}



mong.getEachRecord = function(db, paramObj, callback) {
	db.collection(paramObj.collection).find(paramObj.projection ,paramObj.query).each(function(err, doc) {
		if(err) throw err;
		db.close();
		callback(doc);
	});
}

mong.getOneRecord = function(db, paramObj, callback) {
	db.collection(paramObj.collection).findOne(paramObj.query, paramObj.projection, function(err, doc) {
		if(err) throw err;
		db.close();
		callback(doc);
	});
}


mong.insertOneRecord = function(db, paramObj, callback) {
	db.collection(paramObj.collection).insert(paramObj.record, function(err, result) {
		if (err && err.code == 11000) {
				callback("Email has been used before.");
			} else {
				callback("record added")
			}			
	});
}
module.exports = mong;










