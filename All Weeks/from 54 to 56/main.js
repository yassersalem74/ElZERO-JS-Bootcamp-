let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

let letter = "A"

while (index < friends.length) {
    index ++;
    if (typeof friends[index] !== "string") continue;
    
    if(friends[index].startsWith(letter)) continue;
    else{
    console.log(`"${counter+= 1} => ${friends[index]}"`);

    }
}

// Output
// "1 => Sayed"
// "2 => Mahmoud"




