function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI(){

}

UI.prototype.addBookToList = function(book){
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

UI.prototype.clearFields = function(){
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
}

UI.prototype.showAlert = function(message, className){
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

UI.prototype.deleteBook = function(e){
    if(e.className === "delete"){
        e.parentElement.parentElement.remove();
    }else{

    }
}

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
            ui.showAlert("Saved", "success");
       }
        ui.clearFields();

        e.preventDefault();
});

document.getElementById("book-list").addEventListener("click",
    function(e){
        const ui = new UI();
        ui.deleteBook(e.target);
        ui.showAlert("The book has been deleted successfully!!", "success");
        e.preventDefault();
});
