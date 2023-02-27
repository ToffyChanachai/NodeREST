const express = require('express');
const sqlite3 = require('sqlite3');
const app =express();

<<<<<<< HEAD
const express = require('express');
const sqlite3 = require('splite3');
const app = express();

// conect to database
const db = new sqlite3.Database('./Database/Book.sqlite');

// parse incoming requests
=======
const db =new sqlite3.Database('./Database/Book.sqlite');
>>>>>>> 32a184a001e002a2994a61907592a89a6ac2dcbd
app.use(express.json());

db.run(`CREATE TABLE IF NOT EXISTS  Books (
    id INTEHER PRIMARY KEY,
    titli  Text,
    author TEXT
    )`);

app.get('/books',(req, res)=>{
    db.all('SELWCT * FROM books', (err, rows) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.json(rows);
        }
    });
});

app.get('/books/:id',(req, res)=>{
    db.get('SELWCT * FROM books WHERE id = ?', (err, row) => {
        if(err){
            res.status(500).send(err);
        }else{
            if(!row){
                res.status(404).send('Books not found');
            }else{
                res.json(row);
            }
        }
    });
});

app.get('/books/:id',(req, res)=>{
    const book =req.body;
    db.get('INSERT INTO books (title, author) VALUES(?, ?)', book.title, book.author, function(err) {
        if(err){
            res.status(500).send(err);
        }else{
           book.id = this.lastID;
           res.send(book);
        }
    });
});

app.put('/books/:id',(req, res)=>{
    const book =req.body;
    db.get('UPDATE books SET title = ? WHERE id = ?', book.title, book.author,req.params.id, function(err) {
        if(err){
            res.status(500).send(err);
        }else{
           res.send(book);
        }
    });
});

app.delete('/books/:id',(req, res)=>{
    db.run('DELETE FROM books WHERE id = ?',req.params.id, function(err) {
        if(err){
            res.status(500).send(err);
        }else{
           res.send({});
        }
    });
});

const port = process.env.PORT || 3000;
app.listen, () => console.log(`Listening on port ${port}...`);
