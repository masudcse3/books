const Books = require('../models/Book')
class DB {
    constructor(){
        this.books = []
    }

    // all methods here
    /**
     * add a new book
     * @param {string} name 
     * @param {string} author 
     * @param {number} price 
     */
    newBook(name, author, price){
        const book = new Books(name, author, price);
        this.books.push(book);
        return book;
    }

    seriesOfBooks(name, author, price, quantity=1){
        const books = [];
        for(let i = 1; i<=quantity; i++){ 
            const book = this.newBook(name+' '+i, author, price);
            books.push(book);
        }
        return books;
    }

    allBooks(){
     return this.books;
    }

    searchById(bookId){
        const book = this.books.find(book=>book.id === bookId);
        return book;
    }
    searchByName(name){
        const book = this.books.find(book=>book.name === name);
        return book;
    }
    searchByAuthor(author){
        const books = this.books.filter(book=>book.author === author);
        return books;
    }
    searchByPrice(price){
        const books = this.books.filter(book=>book.price <= price);
        return books;
    }

    updateById(bookId, bookBody){
        const book = this.searchById(bookId);
        book.name = bookBody.name ?? book.name;
        book.author = bookBody.author ?? book.author;
        book.price = bookBody.price ?? book.price;
        book.updateAt = new Date();
        return book;

    }

    updateByName(name, bookBody){
        const book = this.searchByName(name);
        book.name = bookBody.name ?? book.name;
        book.author = bookBody.author ?? book.author;
        book.price = bookBody.price ?? book.price;
        book.updateAt = new Date();
        return book;
    }
    
    deleteById(bookId){
        const book = this.searchById(bookId);
        const index = this.books.findIndex(book=>book.id === bookId);
        if(index !== -1){
            this.books.splice(index, 1)
            return true;
        }else{
            return false
        }
    }

    deleteByName(name){
        const book = this.searchByName(name);
        const index = this.books.findIndex(book=>book.name === name);
        if(index !== -1){
            this.books.splice(index, 1)
            return true;
        }else{
            return false
        }
    }

    deleteByAuthor(author){
        const books = this.searchByAuthor(author);

        const index = this.books.findIndex(book=>book.author === author);
        if(index !== -1){
            this.books.splice(index, books.length)
            return true;
        }else{
            return false
        }
    }
    



}



const db = new DB();

module.exports = db;