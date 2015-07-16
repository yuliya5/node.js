//This is what the terminal shold show: 

// Yuliyas-MBP:node yuliyasuvorava1$ ls
// target.txt	watcher-argv.js	watcher.js
// Yuliyas-MBP:node yuliyasuvorava1$ node --harmony watcher-argv.js
// /Users/yuliyasuvorava1/Desktop/DevPoint/node/watcher-argv.js:5
// 	throw Error("A file to watch must be specified!");
// 	      ^
// Error: A file to watch must be specified!
//     at Error (native)
//     at Object.<anonymous> (/Users/yuliyasuvorava1/Desktop/DevPoint/node/watcher-argv.js:5:8)
//     at Module._compile (module.js:460:26)
//     at Object.Module._extensions..js (module.js:478:10)
//     at Module.load (module.js:355:32)
//     at Function.Module._load (module.js:310:12)
//     at Function.Module.runMain (module.js:501:10)
//     at startup (node.js:129:16)
//     at node.js:814:3
// Yuliyas-MBP:node yuliyasuvorava1$ 


const 
	fs = require('fs'), 
	filename = process.argv[2]; // argv stands for arguement vector 
if(!filename){
	throw Error("A file to watch must be specified!");
}
fs.watch(filename, function(){
	console.log("File" + filename + "just changed!");
});
console.log("Now watching" + filename + "for changes...");	