// import {a , b , c} from "./mod-two";

// export default function(){
//     return a + b + c;
// }



  export default function (...nums) {
  return nums.reduce((acc, curr) => {
           return acc + curr;
});
 }
