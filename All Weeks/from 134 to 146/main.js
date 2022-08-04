// task 1

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

ipReg = /\d{4}:\w{2}\d{1}:\d{4}(:\d{4})+/gi;
console.log(ip.match(ipReg));


//////////////////////////////////////////////////////////////////

// task 2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

namesReg = /^os\d+o/gi;
console.log(specialNames.match(namesReg));

// Output
// ['Os10O', 'OsO', 'Os100O']

//////////////////////////////////////////////////////////////////

// task 3


let phone = "+(995)-123 (4567)";

phoneReg = /\+\(\d{3}\)\-\d{3}\s\(\d{4}\)/gi;
console.log(phone.match(phoneReg));


//////////////////////////////////////////////////////////////////

// task 5


let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let regg = /\d{2}(\/|\s|\s\-\s)\d{2}(\s|\s\-\s|\/)\d{2,4}/gi; 

console.log(date1.match(regg)); // "25/10/1982"
console.log(date2.match(regg)); // "25 - 10 - 1982"
console.log(date3.match(regg)); // "25 10 1982"
console.log(date4.match(regg)); // "25 10 82"






//////////////////////////////////////////////////////////////////

// task 6

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?:\/\/)?(www.)?\w+.org(.*)?/ig; 

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));