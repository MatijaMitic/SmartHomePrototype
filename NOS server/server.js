// server
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/smart_home';
var express = require('express');

var app = express();
app.use(express.static(__dirname + '/view'));

var database;

var tempHigh = false;

var processSample= function(record,socket){
	switch(record.type){
		case "touch":
			console.log("Send action to stop buzzer");
			socket.write("buzz-stop");
			socket.write("diod-stop");
			break;
		case "temp":
			if(record.value > 27 && !tempHigh)
			{
				console.log("Send action to start buzzer");
				console.log("Send action to start led diode");
				socket.write("diod-redd");
				tempHigh = true;
			}
			else if (record.value < 27 && tempHigh) {
				console.log("Send action to stop diode");
				socket.write("diod-stop");
				tempHigh = false;
			}
			break;
		case "sound":
			console.log("Send action to start led diode");
			break;
		case "flame":
			console.log("Start buzzer");
			socket.write("buzz-play");
			break;
		case "flood":
			console.log("Send action to start led diode");
			socket.write("diod-blue");
		default:
			console.log("Non action");
			console.log(record.type);
	}
}

MongoClient.connect(url, function(err, db) {
	database=db;
	require('net').createServer(function (socket) {
		console.log("connected");
		socket.on('data', function (data) {
			console.log(data.toString());
			var data_arr = data.toString().split(';');
			var record = {type:data_arr[0],value:data_arr[1],timestamp:data_arr[2]};
			processSample(record,socket);
			db.collection('row_data').insertOne(record);
		});
	}).listen(22223);
	
});

// Start listening to incoming requests
app.listen(1337, function () {
    console.log('Server is up and running');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/view/index.html');
});

// GET all measurements with specified type
	app.get('/data', function(req, res) {
		console.log("GET is happening");
		database.collection('row_data').find({type: req.query.type}).sort({datefield: -1}).toArray(function(err, documents){
			res.send(documents);
		});
	});

