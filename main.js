"use strict"

let myLibrary = [];
const form = document.querySelector("form");
const modal = document.querySelector(".modal");
const showForm = document.querySelector("#show-form");
const alert = document.querySelector(".alert")

function Book (title,author,pages,read) {
	this.title = title
	this.author = author
	this.pages = pages
	if (read === true) {
		this.read = 'Read'
	} else {
		this.read = 'Not read yet'
	}

}

function addBookToLibrary (book) {

	function bookExists (obj){
		return obj.title === book.title;
	}

	function alertBookExists () {
		alert.textContent = ''
	}

	if (!myLibrary.some(bookExists)) {
		myLibrary.push(book);
		renderBookstoHtml(book);
	} else {
		alert.textContent = 'Error: book title exists in the Library'
		window.setInterval( alertBookExists, 3000)
	}
}

function newBook () {
	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value;
	const pages = document.querySelector("#pages").value;
	const read = document.querySelector("#read").checked;
	const book = new Book(title,author,pages,read);
	addBookToLibrary(book);
}

function renderBookstoHtml(obj) {
	const bookTable = document.querySelector(".books-table");
	const wrapper = document.createElement("div");
	const tNode = document.createElement("h2");
	const aNode = document.createElement("h3");
	const pNode = document.createElement("p");
	const rNode = document.createElement("p");
	const dNode = document.createElement("button");
	const uNode = document.createElement("button");
	const title = obj.title;
	dNode.textContent = "Delete";
	uNode.textContent = "Change read status";
	dNode.classList.add("delete");
	uNode.addEventListener("click", () => {
		if (obj.read === "Read") {
			obj.read = "Not read yet";
			uNode.textContent = "Mark as read";
		} else {
			obj.read = "Read";
			uNode.textContent = "Mark as not read";
		}
	rNode.textContent = obj.read;
	})
	rNode.style.color = 'gray';
	tNode.textContent = `Title: ${obj.title}`;
	aNode.textContent = `By ${obj.author}`;
	pNode.textContent = `No. of pages: ${obj.pages}`;
	rNode.textContent = obj.read;
	wrapper.appendChild(tNode);
	wrapper.appendChild(aNode);
	wrapper.appendChild(pNode);
	wrapper.appendChild(rNode);
	wrapper.appendChild(dNode);
	wrapper.appendChild(uNode);
	bookTable.appendChild(wrapper);

	dNode.addEventListener("click", () => {
		bookTable.removeChild(wrapper);
		myLibrary = myLibrary.filter((obj) => obj.title !== title);
	})
}

function formToggle() {
	if (modal.style.display === 'block') {
		modal.style.display = 'none'
		showForm.textContent = 'Show Form';
	} else {
		modal.style.display = 'block';
		showForm.textContent = 'Hide Form';
	}
}

showForm.addEventListener("click", formToggle)

form.addEventListener("submit", (e) => {
	e.preventDefault();
	newBook();
	form.reset();
	formToggle();
})