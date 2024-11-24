// console.log("Strings !!");
// Strings...............................
var str = 'Hello world!';
var str2 = "Hello World! 2"
var str3 = new String("Hello world! 3");
var name = "Malik M Jahangir"
var str4 = `My name is ${name}`

console.log(str, str2);
console.log(str3);
console.log(str4);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// const str = "Devtrio's";
// const str2 = 'Devtrio"s';
// const str2 = 'Devtrio\'s';
// const str3 = "Devtrio\"s";
// console.log(str);
// console.log(str3);


// const platform = "E learning \nplatform"
// console.log(platform);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// let message = 'we all are learning javascript!';

// console.log(message.indexOf("are"));
// console.log(message.indexOf("a"));
// console.log(message.indexOf("a",4));
// console.log(message[7]);

// var message2 = 'abfcdefhgf';
// console.log(message2.lastIndexOf("f"));



// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// let sen = "Apple Banana Mango";

// console.log(sen.slice(0,5));
// console.log(sen.slice(6, 12));
// console.log(sen.slice(0, -2));
// console.log(sen.length);

// console.log(sen.slice(0, sen.length));
// console.log(sen.slice(0));


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// let str = "Malik Muhammad Jahangir";
// let copy = str.replace("Muhammad", "M");
// console.log(copy, str);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// let n = "Owais Ahmed";
// console.log(n.charAt(3));
// console.log(n.charCodeAt(0));
// console.log(n.toLocaleLowerCase());
// console.log(n.toLocaleUpperCase());

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// let n = 'ashar';
// let name2 = "talha"
// // let cap = n.replace('a', "A");
// let cap2 = n.charAt(0).toLocaleUpperCase() + n.slice(1)
// console.log(cap2);


// ///////////////////////////////////

// let str1 = '    malik          ';
// let str32 = '      malik   jahangir         ';
// console.log(str1.trim(),'\n' ,str32.trim());


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// let studentsName = "Ashar, Owais, Malik";
// let nameArr = studentsName.split(', ');
// console.log(nameArr, nameArr.join(" "));
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// let name = "ahmed ashar sahab"; // output: Ahmed Ashar

// let breakWords = name.split(" ");

// for (let i = 0; i < breakWords.length; i++) {
//     let cap2 = breakWords[i].charAt(0).toLocaleUpperCase() + breakWords[i].slice(1);
//     breakWords[i] = cap2;
// }
// console.log(breakWords.join(" "));


// console.log(breakWords);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//   Date and Times
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// let date = new Date();
// console.log(date);
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());



// create static Date
// let d = new Date(2025, 0, 24, 3, 30, 30);
// console.log(d.toLocaleString());


// ////////////////////////////////
// from 1st jan 1970 to now
// console.log((Date.now() +1000) - Date.now());



// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// let my_date = new Date();

// my_date.setFullYear(2026);
// my_date.setMonth(2);
// my_date.setDate(10);

// console.log(my_date);

// console.log(my_date.getFullYear());
// console.log(my_date.getMonth());
// console.log(my_date.getDate());

// console.log(my_date.getHours(8));
// console.log(my_date.getMinutes(8));
// console.log(my_date.getSeconds(8));
// console.log(my_date.getMilliseconds(8));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Math 

// console.log(Math.PI.toFixed(2));

// let number = 10.80;
// console.log(Math.round(number));
// console.log(Math.floor(number)); /// humesha pechy
// console.log(Math.ceil(number)); /// humesha agy


// console.log(Math.pow(2, 3), 3**3);

// console.log(Math.sqrt(25));
// console.log( Math.sqrt(27).toFixed(2) + 100 );
// let x = ["23", "233", "23233", "233"];
// let result= x.find(23);

// if (result == -1) {
//     alert('sdfsdf')
// }
// console.log(Math.trunc(4.5));
// console.log(Math.trunc(-4.5));

// console.log(Math.random())
// console.log((Math.random()*10).toFixed());
// console.log((Math.random()*100).toFixed());

