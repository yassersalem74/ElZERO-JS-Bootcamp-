function showDetails(name, age, status){


   if(typeof arguments[0] == "string") {
    arguments[0] = name;
    }

       else if(typeof arguments[0] === "number") {
    arguments[0] = age;
    }

        else{
    arguments[0] = status;
    }


    if(typeof arguments[1] === "string") {
    arguments[1] = name;
    }
    else  if(typeof arguments[1] === "number") {
    arguments[1] = age;
        }

    else {
    arguments[1] = status;
    }


    
    if(typeof arguments[2] === "string") {
    arguments[2] = name;
    }

    else if(typeof arguments[2] === "number") {
    arguments[2] = age;
    }

    else {
    arguments[2] = status;
    }  
    
    

if (status === true){
console.log(`Hello ${name}, Your Age is ${age} ,Youre available for hire`)
}
else    {
console.log(`Hello ${name}, Your Age is ${age} ,Youre not available for hire`)

}

}

showDetails("yasser",20,true);
showDetails(20,"yasser",true);
showDetails(true,20,"yasser");
showDetails(false,"yasser",20);

// if(typeof arguments[0] == "string") {
//     arguments[0] = name;
// }
// if(typeof arguments[1] == "string") {
//     arguments[1] = name;
// }if(typeof arguments[2] == "string") {
//     arguments[2] = name;
// }

// if(typeof arguments[0] == "number") {
//     arguments[0] = age;
// }
// if(typeof arguments[1] == "number") {
//     arguments[1] = age;
// }if(typeof arguments[2] == "number") {
//     arguments[2] = age;
// }


// if(typeof arguments[0] === "boolean") {
//     arguments[0] = status;
// }
// if(arguments[1] === "boolean") {
//     arguments[1] = status;
// }
// if(arguments[2] === "boolean") {
//     arguments[2] = status;
// }









    // for(arguments = 0 ; arguments < arguments.length ; arguments++){
    //     if (typeof arguments === "string"){
    //         arguments = name;
    //     }
    //     if (typeof arguments === 'number'){
    //         arguments = age;
    //     }
    //     if (typeof arguments === "boolean"){
    //         arguments = status;
    //     }
    // }