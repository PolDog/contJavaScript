const data = JSON.parse(featuredItems);
data.forEach((element) => {
	const feturedTabContentEl = document.querySelector(".fetured_tab_content");
	const cardEl = document.createElement("div");
	cardEl.classList.add("fetured_card");
	const imgEl = document.createElement("div");
	imgEl.classList.add("fetured_card1_img");
	imgEl.classList.add("select_card");
	imgEl.style.backgroundImage = element.img;

	const cardSelectEl = document.createElement("div");
	cardSelectEl.classList.add("fetured_card_select");
	const btnEl = document.createElement("button");
	btnEl.classList.add("fetured_card_select_button");
	btnEl.textContent = "Add to Cart";
	const btnImg = document.createElement("img");
	btnImg.src = "./img/bth_basket.svg";
	const titleEl = document.createElement("h1");
	titleEl.textContent = element.title;
	const pEl = document.createElement("p");
	pEl.textContent = element.info;
	const h2El = document.createElement("h2");
	h2El.textContent = element.price;

	btnEl.appendChild(btnImg);
	cardSelectEl.appendChild(btnEl);
	imgEl.appendChild(cardSelectEl);
	cardEl.appendChild(imgEl);
	cardEl.appendChild(titleEl);
	cardEl.appendChild(pEl);
	cardEl.appendChild(h2El);
	feturedTabContentEl.appendChild(cardEl);
});
