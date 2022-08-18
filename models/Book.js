const shortId = require('shortid');
class Books {
    /**
     * 
     * @param {string} name 
     * @param {string} author 
     * @param {number} price 
     */
    constructor(name, author, price){
        this.id = shortId.generate();
        this.name = name;
        this.author = author;
        this.price = price;
        this.createAt = new Date();
        this.updateAt = new Date();
    }
}

module.exports = Books;