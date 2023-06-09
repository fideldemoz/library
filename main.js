const showForm = document.querySelector("#show-form");
const form = document.querySelector("#form")
const body = document.querySelector("body")
const table = document.querySelector(".books-table")

showForm.addEventListener("click", function() {
	if (form.style.display === "block") {
		hideFormfn()
	} else {
		showFormFn()
	}
})
const hideFormfn = function () {
	form.style.display = "none";
	showForm.textContent = "Add a new book"
}
const showFormFn = function () {
	form.style.display = "block";
	showForm.textContent = "Close form"
}
const books = [];
const inputTitle = form.querySelector("input[name='book-title']");
const inputAuthor = form.querySelector("input[name='book-author']");
const inputPages = form.querySelector("input[name='book-pages']");
const inputRead = form.querySelector("input[name='book-read']");
const submit = form.querySelector("input[type='submit']");


const addBook = function (title, author, pages, read) {
	this.title =  title,
	this.author = author,
	this.pages = pages,
	this.isRead = read
}

form.onsubmit = function () {
	const title = inputTitle.value;
	const author = inputAuthor.value;
	const pages = inputPages.value;
	const isRead = inputRead.checked;
	isRead == true ? read = 'Read' : read = 'Not read yet';
	const newBook = new addBook(title, author, pages, read);
	books.push(newBook)
    displayBooks(title, author, pages, read)
    form.reset()
    hideFormfn()
    return false;
};


function displayBooks(title, author, pages, read) {
	const container = document.createElement("div")
	const htitle = document.createElement("h1")
	const hauthor = document.createElement("p")
	const hpages = document.createElement("p")
	const hread = document.createElement("p")
	const clear = document.createElement("button")
	clear.classList.add('delete') 

	htitle.textContent = title;
	hauthor.textContent = 'by ' + author;
	hpages.textContent = `${pages} pages`;
	hread.textContent = read;
	clear.textContent = 'Delete';
	(hread.textContent === 'Read') ? hread.style.color = 'green': hread.style.color = 'gray';
	table.appendChild(container)
	const elements = [htitle, hauthor, hpages, hread, clear]
	elements.forEach((item) => {
		container.appendChild(item);
	})
	clear.addEventListener("click", function () {
		table.removeChild(clear.parentNode)
	})

}