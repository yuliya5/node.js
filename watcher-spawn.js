// THIS IS WHAT TERMINAL WILL SAY

// Yuliyas-MBP:node yuliyasuvorava1$ node --harmony watcher-spawn.js target.txt 
// /Users/yuliyasuvorava1/Desktop/DevPoint/node/watcher-spawn.js:1
// (function (exports, require, module, __filename, __dirname) { watcher-spawn.js
//                                                               ^
// ReferenceError: watcher is not defined
//     at Object.<anonymous> (/Users/yuliyasuvorava1/Desktop/DevPoint/node/watcher-spawn.js:1:63)
//     at Module._compile (module.js:460:26)
//     at Object.Module._extensions..js (module.js:478:10)
//     at Module.load (module.js:355:32)
//     at Function.Module._load (module.js:310:12)
//     at Function.Module.runMain (module.js:501:10)
//     at startup (node.js:129:16)
//     at node.js:814:3
// Yuliyas-MBP:node yuliyasuvorava1$ ls
// target.txt		watcher-spawn.js
// watcher-argv.js		watcher.js
// Yuliyas-MBP:node yuliyasuvorava1$ ls
// target.txt		watcher-spawn.js
// watcher-argv.js		watcher.js
// Yuliyas-MBP:node yuliyasuvorava1$ node --harmony watcher-spawn.js target.txt 
// Now watchingtarget.txtfor changes...



"use strict"; 
const 
	fs = require('fs'), 
	spawn = require('child_process').spawn, 
	filename = process.argv[2];
if(!filename){
	throw Error("A file to watch must be specified");
}
fs.watch(filename, function(){
	let ls = spawn('ls', ['-lh', filename]); //-lh means include all flags
	ls.stdout.pipe(process.stdout); //stdout means standard output and pipe allows us to connect to smth else
});
console.log("Now watching" + filename + "for changes...");	