let myAdmins = ["Ahmed" , "Osama" , "Sayed" , "Stop", "Amira"];
let myEmployees = ["Amgad" , "Sameh" , "Ameer" , "Omar" , "Othman" , "Amany" , "Samia"];

let Team = 1;

document.write(`<div>We Have X Admins</div>`);


for (i = 1 ; i < myAdmins.length ; i++){
    if(myAdmins[i] === "Stop") break;
}
document.write(`<div>We Have ${i} Admins</div>`)
document.write(`<hr>`)
/////////////////////////////////////////////////////////////////////////////////////////

document.write(`<div>`)
document.write(`The Admin For Team ${Team++} is Ahmed`)
document.write(`<h3>Team Members :</h3>`)

let counter = 1;
for(j = 0 ; j < myEmployees.length ; j++){
    if (myEmployees[j].startsWith("A"))
    document.write(`<p>${"-"} ${counter++}  ${myEmployees[j]} </p>`)
}

document.write(`</div>`)
document.write(`<hr>`)
/////////////////////////////////////////////////////////////////////////////////////////

document.write(`<div>`)
document.write(`The Admin For Team ${Team++} is Osama`)
document.write(`<h3>Team Members :</h3>`)

let counter2 = 1;
for(k = 0 ; k < myEmployees.length ; k++){
    if (myEmployees[k].startsWith("O"))
    document.write(`<p>${"-"} ${counter2++}  ${myEmployees[k]} </p>`)
}

document.write(`</div>`)
document.write(`<hr>`)
/////////////////////////////////////////////////////////////////////////////////////////

document.write(`<div>`)
document.write(`The Admin For Team ${Team++} is Sayed`)
document.write(`<h3>Team Members :</h3>`)

let counter3 = 1;
for(l = 0 ; l < myEmployees.length ; l++){
    if (myEmployees[l].startsWith("S"))
    document.write(`<p>${"-"} ${counter3++}  ${myEmployees[l]} </p>`)
}

document.write(`</div>`)
document.write(`<hr>`)