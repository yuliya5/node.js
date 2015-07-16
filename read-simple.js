// In terminal, use this code to run it node --harmony read-simple.js

const fs = require('fs');
fs.readFile('target.txt', function(err, data){
	if(err){
		throw err;
	}
console.log(data.toString());	
});