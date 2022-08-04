// destructing challenge

let chosen = 3;

let myFriends = [
    {
        title : "Osama",
        age : 39,
        available : true,
        skills : ["Html" , "CSS"]
    },
    {
    title : "Ahmed",
    age : 25,
    available : false,
    skills : ["Paython" , "Django"],
    },
    {
    title : "Sayed",
    age : 33,
    available : true,
    skills : ["PHP" , "Laravel"],
    },
]

let [a , , ] = myFriends;
function showDetails1 ({title :name , age :ag , available :av , skills :[,lastSkill] } = a) {
        if(av  == true ){
            av = "available"
           }
           else{
            av = "Unavailable"
           }
    console.log(name);
    console.log(ag);
    console.log(av);
    console.log(lastSkill);  
       
}
// showDetails1(a);


let [,b , ] = myFriends;
function showDetails2({title :name2 , age :ag2 , available :av2 , skills :[,lastSkill2] } = b) {
    if(av2  == true ){
        av2 = "available"
       }
       else{
        av2 = "Unavailable"
       }
    console.log(name2);
    console.log(ag2);
    console.log(av2);
    console.log(lastSkill2);
}
// showDetails2(b);


let [, ,c ] = myFriends;
function showDetails3({title :name3 , age :ag3 , available :av3 , skills :[,lastSkill3] } = c){
    if(av3  == true ){
        av3 = "available"
       }
       else{
        av3 = "Unavailable"
       }
    console.log(name3);
    console.log(ag3);
    console.log(av3);
    console.log(lastSkill3);
}
// showDetails2(c);





if (chosen == 1) {
        showDetails1(a);
  } else if (chosen == 2) {
        showDetails1(b);
  } else {
        showDetails1(c);
  }


//////////////////////////////////////////////////////////
// another solution
//////////////////////////////////////////////////////////


// let chosen = 1;
 
// let myFriends = [
//   { title: "osama", age: 39, available: true, skills: ["HTML", "CSS"]},
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"]},
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// let { title: t, age: a, available:v , skills: [, s] } = myFriends[chosen - 1]

 

  
//  console.log(t);
//  console.log(a);
//  console.log(`${v?"available":"not available"}`)
//  console.log(t);
    
