class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    addBookToList(book){
        const list = document.getElementById("book-list");
        const row = document.createElement('tr');
    
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X<a></td>
        `;
    
        list.appendChild(row);
    }

    clearFields(){
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
    }

    showAlert(message, className){
        const form = document.getElementById("form-book");
        const container = document.querySelector(".container");
        const div = document.createElement('div');
    
        div.appendChild(document.createTextNode(message));
        div.className = `alert ${className}`;
        
        container.insertBefore(div, form);
    
        setTimeout(function(){
            document.querySelector(".alert").remove();
        }, 3000);
      
    }

    deleteBook(e){
        if(e.className === "delete"){
            e.parentElement.parentElement.remove();
        }
    }
    
}

class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks(){
       const books = Store.getBooks();
       books.forEach(function(book){
           const ui = new UI;
           ui.addBookToList(book)
       })
       
        
    }

    static addBooks(book){
        const books = Store.getBooks();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBooks(isbn){
        const books = Store.getBooks();
        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1)
            }

        })
        
        localStorage.setItem('books', JSON.stringify(books));

    }

}

document.addEventListener('DOMContentLoaded', Store.displayBooks);


document.getElementById("form-book").addEventListener("submit",
    function(e){
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        const book = new Book(title, author, isbn);

        const ui = new UI();

       if(title==="" || author==="" || isbn===""){
           ui.showAlert("Please fill in all fields", "error");
       }
       else{
            ui.addBookToList(book);
            Store.addBooks(book);
            ui.showAlert("Saved", "success");
       }
        ui.clearFields();

        e.preventDefault();
});

document.getElementById("book-list").addEventListener("click",
    function(e){
        const ui = new UI();
        ui.deleteBook(e.target);
        Store.removeBooks(e.target.parentElement.previousElementSibling.textContent);
        ui.showAlert("The book has been deleted successfully!!", "success");
        e.preventDefault();
});
