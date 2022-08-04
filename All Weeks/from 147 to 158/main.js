// task 1


class Car{
    constructor(name, model, price){
        this.n = name;
        this.m = model;
        this.p = price;
    }
    stop(){
        return "Car Is Stopped";
    }
    run(){
        return "Car Is Running Now";
    }
}

let carOne = new Car("BMW" , "C180",5000);
let carTwo = new Car("Mer" , "C200",3000);
let carThree = new Car("audi" , "C300",2000);


console.log(`Car One Name Is ${carOne.n} And model is ${carOne.m} and price is ${carOne.p}`)
// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
console.log(carOne.run())
// "Car Is Running Now"

////////////////////////////////////////////////////////////////////////////////////////////

// task 2

class Phone {
    constructor(name, serial, price) {
      this.name = name;
      this.serial = serial;
      this.price = price;
    }
  }

  class Tablet extends Phone {
    constructor(name, serial, price, size){
        super(name, serial, price);
        this.s = size  || "unknown";
    }
    fullDetails(){
        return `${this.name} is ${this.serial} and size is ${this.s}`
    }
  }


let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

////////////////////////////////////////////////////////////////////////////////////////////

// task 3

// // Edit The Class
// class User {
//     constructor(username, card) {
//       this.u = username;
//       this.c = card;
//     }
//    get showData(){
//         return `Hello ${this.u} Your credit card is ${this.c}`
//     }
//   }

class User {
	#c;
	constructor(username, card) {
		this.u = username;
		this.#c = card;
	}
	get #cardModify() {
		const cardRegex = /\d{4}-\d{4}-\d{4}-\d{4}/gi;
		const cardRegex2 = /\w{4}/gi;
		if (cardRegex.test(this.#c)) {
			return this.#c;
		} else {
			const newC = this.#c.toString();
			return newC.match(cardRegex2).join('-');
		}
	}
	get showData() {
		return `Hello ${this.u} Your Credit Card Number Is ${this.#cardModify}`;
	}
}

// Do Not Edit Anything Below

let userOne = new User('Osama', '1234-5678-1234-5678');
let userTwo = new User('Ahmed', '1234567812345679');
let userThree = new User('Ghareeb', 1234567812345677);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5679

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5677

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
// 03

 
  ////////////////////////////////////////////////////////////////////////////////////////////

// task 4

// Write Your Code Here


// Do Not Edit Below
String.prototype.addLove = function(val){
    return `I Love ${this} Web School`
}

let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School


  ////////////////////////////////////////////////////////////////////////////////////////////

// task 5

const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
  };
  
  Object.defineProperty(myObj , "score" ,{
    writable : false,
  })

  Object.defineProperty(myObj , "id" ,{
    enumerable : false,
  })
  delete myObj.country;



  
  myObj.score = 500;
  
  for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
  }
  
  console.log(myObj);
  
  // Needed Output
  
//   "username => Elzero"
//   "score => 1000"
//   {username: 'Elzero', score: 1000, id: /100}