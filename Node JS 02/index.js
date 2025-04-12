import {fileURLToPath} from 'url';
import path from 'path';
import fs, { cp } from 'fs';
import fsPromise from 'fs/promises';

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

// create Directory 

// fs.mkdir("./test", (err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("Directory created successfully");
// });

// fs.mkdirSync("./test2");

// try {
//     await fsPromise.mkdir("./devtrio/class02", {recursive: true});
//     console.log("Directory created successfully");
// } catch (error) {
//     console.log(error);
// }

// Read content of Directory

// try {
//     let files = await fsPromise.readdir("./devtrio");
//     console.log(files);
// } catch (error) {
//     console.log(error);
// }

// Remove Directory (Folder must be empty)

// try {
//     await fsPromise.rmdir("./devtrio/class01");
//     console.log("Directory removed successfully");
// } catch (error) {
//     console.log(error)
// }

// Read File 

// try {
//     // let data = await fsPromise.readFile("./public/content.txt", "utf-8");
//     // console.log(data);
//     let data = await fsPromise.readFile("./public/users.json", "utf-8");
//     console.log(JSON.parse(data));
// } catch (error) {
//     console.log(error);
// }

// Append Data
// try {
//     await fsPromise.appendFile("./public/content.txt", "\n\nThis is a new line added by fs module");
//     console.log("Data appended successfully");
    
// } catch (error) {
//     console.log(error);
// }

// Copy File
// try {
//     await fsPromise.copyFile("./public/content.txt", "./public/content-copy.txt");
//     console.log("File copied successfully");
// } catch (error) {
//     console.log(error);
// }


// File Info

// try {
//     let stats = await fsPromise.stat("./public/content.txt");
//     console.log(stats)
//     console.log(stats.isDirectory())
//     console.log(stats.isFile())
// } catch (error) {
//     console.log(error);
// }