//To run node, in terminal type in 
// 1) node --harmony watcher.js
// 2) It should look like this: 
// Error: watch ENOENT
//     at exports._errnoException (util.js:746:11)
//     at FSWatcher.start (fs.js:1172:11)
//     at Object.fs.watch (fs.js:1198:11)
//     at Object.<anonymous> (/Users/yuliyasuvorava1/Desktop/DevPoint/node/watcher.js:2:4)
//     at Module._compile (module.js:460:26)
//     at Object.Module._extensions..js (module.js:478:10)
//     at Module.load (module.js:355:32)
//     at Function.Module._load (module.js:310:12)
//     at Function.Module.runMain (module.js:501:10)
//     at startup (node.js:129:16)
// Yuliyas-MBP:node yuliyasuvorava1$ 

// 3) ls

// 4) touch target.txt

// 5) node --harmony watcher.js

// 6) Open a new window in terminal and type in touch target.txt

// 7) Ctrl C to stop Node from Running



const fs = require('fs'); //require is a depandency. 'fs' is a file. It is a module of node code. 
fs.watch('target.txt', function(){ //it will pull the target file for changes and invoke a console log
	console.log("File 'target.txt' just changed!");
});
console.log("Now watching target.txt for changes...");