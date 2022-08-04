// let myReq = new XMLHttpRequest();
// myReq.open ("Get", "/test.json");
// myReq.send();

// myReq.onreadystatechange = function() {
// 	if (this.readyState === 4 && this.status === 200){
// 		console.log(this.responseText);
// 		console.log('Data Loaded');


// 		// from JSON to JS
// 		let mainData = JSON.parse(myReq.responseText);
// 		console.log(mainData);


// 		mainData.forEach((article) => {
// 			article.category = 'All';
// 			console.log(mainData);
// 		});


// 		//from JS to JSON 
// 		let updatedData = JSON.stringify(mainData);
// 		console.log(updatedData);
// 	}
// };




////////////////////////////////////////////////////////////////////////////////////////////



let articlesReq = new XMLHttpRequest();
articlesReq.open('GET', './test.json');
articlesReq.send();
articlesReq.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		let dataDiv = document.createElement('div');
		dataDiv.id = 'data';
		let mainData = JSON.parse(articlesReq.responseText);
		mainData.forEach((article) => {
			let showenData = `<div> <h2>${article.title}</h2>
            <p>${article.name}</p>
            <p>${article.title}</p>
            <p>${article.content}</p>
            </div>`;
			dataDiv.insertAdjacentHTML('beforeend', showenData);
		});
		document.body.appendChild(dataDiv);
	}
};
