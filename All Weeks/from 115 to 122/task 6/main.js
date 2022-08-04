
 let chosen = 3;
 
 let myFriends = [
   { title: "osama", age: 39, available: true, skills: ["HTML", "CSS"]},
   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"]},
   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
 ];
 
 let { title: t, age: a, available:v , skills: [, s] } = myFriends[chosen - 1]
 
  

   
  console.log(t);
  console.log(a);
  console.log(`${v?"available":"not available"}`)
  console.log(t);