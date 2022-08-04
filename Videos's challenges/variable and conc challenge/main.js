
// variable and conc challenge


let titleName = "Elzero" , descriptionName = "Elzero web school" , date = "25/10";

let markUp = `
    <div class="card">
        <h3>Hello ${titleName} </h3>
        <p> ${descriptionName} </p>
        <span> ${date} </span>
    </div>
            `;


// document.write(markUp);
let result = markUp.repeat(4);
document.write(result);