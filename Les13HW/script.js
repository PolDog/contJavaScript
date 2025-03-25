const data = JSON.parse(dataProducts);
			const cardsEl = document.querySelector(".cards");
			data.forEach((element) => {
				const cardEl = document.createElement("div");
				cardEl.classList.add("card");
				const imgEl = document.createElement("img");
				imgEl.src = element.img;
				const contentEl = document.createElement("div");
				contentEl.classList.add("content");
				const titleEl = document.createElement("h2");
				titleEl.classList.add("title");
				titleEl.textContent = element.title;
				const infoEl = document.createElement("div");
				infoEl.classList.add("info");

				const p1El = document.createElement("p");
				p1El.textContent = "Price: ";
				const p2El = document.createElement("p");
				p2El.textContent = "color: ";
				const p3El = document.createElement("p");
				p3El.textContent = "size: ";
				const p4El = document.createElement("p");
				p4El.textContent = "Quantity: ";

				const addEl = document.createElement("button");
				addEl.classList.add("btnAdd");
				addEl.textContent = "Add to cart";
				const delEl = document.createElement("button");
				delEl.classList.add("buttonDel");
				delEl.textContent = "X";

				const priceEl = document.createElement("span");
				priceEl.classList.add("price");
				priceEl.textContent = element.price;
				p1El.appendChild(priceEl);

				const colorEl = document.createElement("span");
				colorEl.classList.add("color");
				colorEl.textContent = element.color;
				p2El.appendChild(colorEl);

				const sizeEl = document.createElement("span");
				sizeEl.classList.add("size");
				sizeEl.textContent = element.size;
				p3El.appendChild(sizeEl);

				const inputEl = document.createElement("input");
				inputEl.value = element.quantity;
				p4El.appendChild(inputEl);

				infoEl.appendChild(p1El);
				infoEl.appendChild(p2El);
				infoEl.appendChild(p3El);
				infoEl.appendChild(p4El);

				contentEl.appendChild(titleEl);
				contentEl.appendChild(infoEl);

				cardEl.appendChild(imgEl);
				cardEl.appendChild(contentEl);
				cardEl.appendChild(delEl);
				cardEl.appendChild(addEl);

				cardsEl.append(cardEl);
			});

			const cartUi=document.getElementById('cart-list');
			cardsEl.addEventListener("click", (e) => {
				if (e.target.closest(".btnAdd")) {
					const cards = e.target.closest(".card");
					// console.log("add " + cards.textContent);
					cartUi.append(cards);
				}


			});
			cartUi.addEventListener("click", (e) => {
				if (e.target.closest(".buttonDel")) {
					const cards = e.target.closest(".card");
					// console.log("del " + cards.textContent);
					cardsEl.append(cards);
				}
			});