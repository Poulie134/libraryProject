let myLibrary = [];
let library = document.querySelector('#holder');
let btnNew = document.querySelector('#btnNew');
let btn1 = document.querySelectorAll('.btn1');
let btn2 = document.querySelectorAll(".btn2")

function book(title,author,pages,status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}
let aBook = new book('Harry Potter','JK Rowling','400','yes');
let bBook = new book('The Hobbit','Pavle Markovic','300','no');
let cBook = new book('Bioshok Rapture','Atlas','500','yes');
myLibrary.push(aBook);
myLibrary.push(bBook);
myLibrary.push(cBook);

function addBook(book) {
    let finalDiv = document.createElement('div');
    finalDiv.classList.add('bookBox');
    finalDiv.setAttribute('id', book.title);
    let title = document.createElement('div');
    let titlef = document.createElement('div');
    let author = document.createElement('div');
    let authorf = document.createElement('div');
    let pages = document.createElement('div');
    let pagesf = document.createElement('div');
    let status = document.createElement('div');
    let statusf = document.createElement('div');
    let btnRemove = document.createElement('button');
    let btnStatus = document.createElement('button');
    btnStatus.classList.add('btn1');
    btnRemove.classList.add('btn2');
    btnRemove.setAttribute('id', book.title+'rm')
    btnStatus.setAttribute('id', book.title+'change')
    btnRemove.textContent = 'Remove';
    btnStatus.textContent = 'change status';
    title.textContent = book.title;
    title.classList.add('title');
    titlef.textContent = 'Title:';
    titlef.classList.add('titlef');
    author.textContent = book.author;
    author.classList.add('author');
    authorf.textContent = 'Author:';
    authorf.classList.add('authorf');
    pages.textContent = book.pages;
    pages.classList.add('pages');
    pagesf.textContent = 'Number of pages:';
    pagesf.classList.add('pagesf');
    status.textContent = book.status;
    status.classList.add('status');
    statusf.textContent = 'Read?';
    statusf.classList.add('statusf');
    finalDiv.appendChild(title);
    finalDiv.appendChild(titlef);
    finalDiv.appendChild(author);
    finalDiv.appendChild(authorf);
    finalDiv.appendChild(pages);
    finalDiv.appendChild(pagesf);
    finalDiv.appendChild(statusf);
    finalDiv.appendChild(status);
    finalDiv.appendChild(btnStatus);
    finalDiv.appendChild(btnRemove);
    library.appendChild(finalDiv);
    btnRemove.addEventListener('click',() => {
        for(let i = 0; i<myLibrary.length; i++){
            if(myLibrary[i].title == book.title){
                myLybrary = myLibrary.splice(i,1);
                readLibrary(myLibrary);
            }
        }
    })
    btnStatus.addEventListener('click',() => {
        if(book.status == 'yes'){
            book.status = 'no';
            status.textContent = 'no';
        } else {
            book.status = 'yes';
            status.textContent = 'yes';
        }
    })
}
function readLibrary(array) {
    library.innerHTML = ''
    for(let  i = 0; i<array.length ; i++){
        let book = array[i]
        addBook(book);
    }
}
btnNew.addEventListener('click',(e) =>{ 
    let ptitle = prompt("What's the book's title?")
    let pauthor = prompt("what's the author's name?")
    let ppages = prompt('How many pages does it have?')
    let pstatus = prompt('have you read it?')
    myLibrary.push(new book(ptitle,pauthor,ppages,pstatus));
    console.table(myLibrary);
    readLibrary(myLibrary);
})
readLibrary(myLibrary);
console.table(myLibrary)