"use strict";
const
    fs = require('fs'),
    spawn = require('child_process').spawn,
    filename = process.argv[2];
if (!filename) {
    throw Error("A file to watch must be specified!");
}
fs.watch(filename, function() {
    let
        ls = spawn('ls', ['-lh', filename]),
      output = '';
    ls.stdout.on('data', function(chunk){ //chunk is a buffer object
        output += chunk.toString();
    });

    ls.on('close', function(){ //on means event listeners broadcast, new user logged in broadcast 
        let parts = output.split(/\s+/);
        console.dir([parts[0], parts[4], parts[8]]);
    });
});

console.log("Now watching" + filename + "for changes...");