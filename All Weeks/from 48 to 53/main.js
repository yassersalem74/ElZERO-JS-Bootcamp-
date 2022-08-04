// task 1


let start = 10;
let end = 100;
let exclude = 40;

for (i = start ; i <= end ; i += start){
    if(i === exclude){
        continue;
    }
    console.log(i);
}
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
/////////////////////////////////////////////////////////////////////////////////////////

// task 2

let start2 = 10;
let end2 = 0;
let stop2 = 3;

console.log(start2);
for (k = start2 ; k >= stop2 ; k--){
    if(k < start2){
        console.log(`0${k}`);
    }
    // console.log(k);
}
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

/////////////////////////////////////////////////////////////////////////////////////////

// task 3

let start3 = 1;
let end3 = 6;
let breaker = 2;

for(p = start3 ; p <= end3 ; p++){
    console.log(p);
    for ( u = breaker ; u < end3 ; u += 2){
        console.log(`--${u}`);
    }
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

/////////////////////////////////////////////////////////////////////////////////////////

// task 4

let index = 10;
let jump = 2;
let end4 = 0;

for (;;) {
  console.log(index);
  index -= jump;
  if(index <= jump) break;
}
// Output
// 10
// 8
// 6
// 4

/////////////////////////////////////////////////////////////////////////////////////////

// task 5

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let count = 1;

for (v = 0 ; v < friends.length ; v++){
    if (friends[v].startsWith(letter.toUpperCase())){continue};
    console.log(`${count++} => ${friends[v]}`);
}
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

/////////////////////////////////////////////////////////////////////////////////////////

// task 6

let start5 = 0;
let swappedName = "elZerO";

for(d = start5 ; d < swappedName.length ; d++){
    // if (swappedName[d].toLowerCase()) {
    //     // console.log(swappedName[d].toUpperCase())
    //     swappedName[d].toUpperCase();
    // }
    //  if (swappedName[d].toUpperCase()) {
    //     // console.log(swappedName[d].toLowerCase())
    //     swappedName[d].toLowerCase();
    // }
    if (swappedName[d].toUpperCase() === swappedName[d]) {
  console.log(swappedName[d].toLowerCase());
} else {
  console.log(swappedName[d].toUpperCase());
}
    // console.log(swappedName[d]);
}

// Output
// "ELzERo"

/////////////////////////////////////////////////////////////////////////////////////////

// task 7

let start6 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for ( y = start6 ; y < mix.length ; y++){
    if ( isNaN(mix[y])) {
        continue;
    }
    console.log(mix[y]);
}

// Output
// 2
// 3
// 4