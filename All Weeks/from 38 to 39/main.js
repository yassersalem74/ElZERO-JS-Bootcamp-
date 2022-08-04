let day = "   friday  ";

let dayy = (`${day.substr(3,1).toUpperCase()}${day.substr(4,5)}`)
// console.log(dayy);

switch(dayy){
  case "Friday" || "Saturday" || "Sunday":
    console.log("No Appointments Available");
    break;

  case "Monday" || "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;

  case "Tuesday" :
    console.log("From 10:00 AM To 6:00 PM");
    break;

  case "Wednesday" :
    console.log("From 10:00 AM To 7:00 PM");
    break;

  case "World" :
    console.log("Its Not A Valid Day");
    break

  default :
  console.log("No Information");
}