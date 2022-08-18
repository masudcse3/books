# Requirements
## Project: Book list system

 - add a book
 - add books of a series
 - search a book by id
 - search a book by name
 - search all books of a author
 - search books by price filter
 - update a book by id
 - delete a book by id
 - update a book by name
 - delete a book by name
 - delete all books of a author
 - show all books

 Routes:

 /books/s?id=bookId => GET => show a book by id
 /books/s?name=bookName => GET => show a book by name
 /books/s?author=authorName => GET => show all books of a author
 /books/s?price=price => GET => all books less than the given price

 /books/u?id=bookId => PATCH => update a book by id
 /books/u?name=bookName => PATCH => update a book by name

 /books/d?id=bookId => DELETE => delete a book by id
 /books/d?name=bookName => DELETE => delete a book by name
 /books/d?author=authorName => DELETE => Delete all books of a author

 /books/new => POST => add a new book
 /books/series => POST => add a new book of series
 /books => GET => show all books
 