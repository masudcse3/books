const router = require('express').Router();
const db = require('../db/db');



router.get('/s/id/:id', (req, res)=>{
        const id = req.params.id;
        const book = db.searchById(id);
        res.status(200).json({message: "Book Found: ", book}) 
});
router.get('/s/name/:name', (req, res)=>{
        const name = req.params.name;
        const book = db.searchByName(name);
         res.status(200).json({message: "Book Found: ", book});
    
});
router.get('/s/author/:author', (req, res)=>{
        const author = req.params.author;
        const books = db.searchByAuthor(author);
        res.status(200).json({message: "Book Found: ", books});
    
});

router.get('/s/price/:price', (req, res)=>{
    const price = req.params.price;
    const book = db.searchByPrice(price);
    res.status(200).json({message: "Book Found: ", book});
});

router.patch('/u/id/:id', (req, res)=>{
    const id = req.params.id;
    const book = db.updateById(id, req.body);
    res.status(200).json({message: "Book Updated: ", book})
})
router.patch('/u/name/:name', (req, res)=>{
    const name = req.params.name;
    const book = db.updateByName(name, req.body);
    res.status(200).json({message: "Book Updated: ", book})
})

router.delete('/d/id/:id', (req, res)=>{
    const id = req.params.id;
    const book = db.deleteById(id);
    res.status(201).send();
})
router.delete('/d/name/:name', (req, res)=>{
    const name = req.params.name;
    const book = db.deleteByName(name);
    res.status(201).send();
})
router.delete('/d/author/:author', (req, res)=>{
    const author = req.params.author;
    const book = db.deleteByAuthor(author);
    res.status(201).send();
})

router.post('/new', (req, res)=>{
    const {name, author, price} = req.body;
    const book = db.newBook(name, author, price);
    res.status(200).json({message: "Book added successful", book})
})
router.post('/series', (req, res)=>{
    const {name, author, price, quantity} = req.body;
    const books = db.seriesOfBooks(name, author, price, quantity)
    res.status(200).json({message: "Book added successful", books})
})
router.get('/', (_req, res)=>{
    
    const books = db.allBooks();
    const totalBooks = books.length;
    res.status(200).json({message: "All Books: ", totalBooks, books})
})


module.exports = router;