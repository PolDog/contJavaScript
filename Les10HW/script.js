console.log("HW10");

// const ulEl = document.querySelector('product-list');
const ulEl = document.getElementById('product-list');

let url = "https://fakestoreapi.com/products";
async function getData(url) {
	const response = await fetch(url);
	const jsonData = await response.json();
	return jsonData;
}
try {
	const myData = await getData(url);

	console.log(myData);
	myData.forEach((element) => {
		const liEl = document.createElement('li');
		const divEl = document.createElement('div');
		const h3El = document.createElement('h3');
        h3El.textContent=element.category;
		const pEl = document.createElement('p');
        pEl.textContent=element.description;
		const imgEl = document.createElement('img');
		imgEl.src = element.image;

		divEl.appendChild(h3El);
		divEl.appendChild(pEl);
		divEl.appendChild(imgEl);

		liEl.appendChild(divEl);
		ulEl.appendChild(liEl);

		// 	div1.insertAdjacentHTML("beforeend", `
		//   <h2>${element.name}</h2>
		//   <p>${element.email}</p>
		//   `);
	});
} catch (error) {
	console.log(`ошибка ${error.message}`);
}
