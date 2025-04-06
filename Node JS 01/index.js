// Wrapper Module
/* Before a module’s code is executed, Node.js will wrap it with a function wrapper that looks like the following:

(function(exports, require, module, __filename, __dirname) {
    // Module code actually lives in here
 });

source: https://www.vskills.in/certification/tutorial/the-module-wrapper/
*/
// console.log("Hello Node JS");
// console.log(__filename); // prints the current file name
// console.log(__dirname); // prints the current directory name

// node js modules

const path = require("path");

// console.log(path.basename("devtrio/index.js"));
// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));

// console.log(path.join("/devtrio","/class01","index.js"))
// console.log(path.join(__dirname,"/class01","index.js"));

// console.log(path.normalize("/devtrio\\class01//index.jsx"));
// console.log(path.parse(__filename))
// console.log(path.parse("devtrio/class01/index.js"));

const os = require("os");

// console.log(os.platform());
// console.log(os.release());
// console.log(os.arch());
// console.log(os.cpus().length);
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname())
// console.log(os.networkInterfaces());

const {URL} = require("url");

// const myUrl = new URL("https://devtrio.com/class01/index.js?name=devtrio&age=20#about");

// console.log(myUrl.href); // https://devtrio.com:8080/class01/index.js?name=devtrio&age=20#about
// console.log(myUrl.protocol); // https:
// console.log(myUrl.host); // devtrio.com
// console.log(myUrl.hostname); // devtrio.com
// console.log(myUrl.port); //8080
// console.log(myUrl.pathname); // /class01/index.js
// console.log(myUrl.search); // ?name=devtrio&age=20
// console.log(myUrl.searchParams); // URLSearchParams { 'name' => 'devtrio', 'age' => '20' }
// console.log(myUrl.searchParams.get("name"))

const fs = require("fs");
// console.log(1)
// let users = fs.readFileSync("users.json", "utf-8");
// console.log(JSON.parse(users));
// console.log(2)

// console.log(1)
// fs.readFile("users.json", "utf-8", (err, data)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log(JSON.parse(data));
// }) 
// console.log(2)
