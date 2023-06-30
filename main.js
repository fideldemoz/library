(function app () {
	let shelf = [];
	class Library {
		constructor (title, author, pages, read) {
			this.title = title;
			this.author = author;
			this.pages = `${pages} pages`;
			this.read = (() => {return read === true ? "Read" : "Not read"})();
		}
		addToShelf (newBook) {
			if (!bookExists()) {
				shelf.push(newBook);
				let index = shelf.length;
				this.renderToHtml(newBook,index);
			}
			function bookExists () {
				let ex = (book) => { return book.title === newBook.title};
				return shelf.some(ex);
		}}
		renderToHtml (element, i) {
			let titleNode = document.createElement("td"),
			authorNode = document.createElement("td"),
			pagesNode = document.createElement("td"),
			readNode = document.createElement("td"),
			tr = document.createElement("tr"),
			indexNode = document.createElement("td"),
			alertgreen = document.querySelector(".alert.green"),
			alert = document.querySelector(".alert"),
			tbody = document.querySelector("tbody");
			indexNode.textContent = i;
			titleNode.textContent = element.title;
			authorNode.textContent = element.author;
			pagesNode.textContent = element.pages;
			readNode.textContent = element.read;
			readNode.className = "read";
			tr.appendChild(indexNode);
			tr.appendChild(titleNode);
			tr.appendChild(authorNode);
			tr.appendChild(pagesNode);
			tr.appendChild(readNode);
			tbody.appendChild(tr);
			remove(tr);
			readNode.addEventListener("click", toggleRead);
			let msgs = (function () {
				readNode.addEventListener("mouseenter", function (e) {
					e.stopPropagation();
					alertgreen.textContent = "Change read status";
					alert.textContent = "";
				})
				readNode.addEventListener("mouseleave", function (e) {
					e.stopPropagation();
					alertgreen.textContent = "";
				})
				tr.addEventListener("mouseenter", (e) => {
					e.stopPropagation();
					alert.textContent = "Delete entry";
					alertgreen.textContent = "";
				})
				tr.addEventListener("mouseleave", (e) => {
					e.stopPropagation();
					alert.textContent = "";
				})
			})()
			function toggleRead (e) {
				e.stopPropagation();
				element.read = (() => {
					return element.read === "not read" ? "read" : "not read"
				})()
				readNode.textContent = element.read;
			}
			function remove (tr) {
				tr.addEventListener("click", () => {
					tbody.removeChild(tr);
					shelf.splice(i-1, 1);
	})}}};
	form.addEventListener("submit", (event) => {
		const title = document.querySelector("#title").value,
		author = document.querySelector("#author").value,
		pages = document.querySelector("#pages").value,
		read = document.querySelector("#read").checked;
		event.preventDefault();
		form.reset();
		let newBook = new Library (title, author, pages, read);
		newBook.addToShelf(newBook);
})})()