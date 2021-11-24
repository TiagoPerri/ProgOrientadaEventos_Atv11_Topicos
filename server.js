const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const books = [
    {
        ID: 1,
        name: 'Codigo Da Vinci',
        author: 'Dan Brown'
    },
    {
        ID: 2,
        name: 'Os Lusiadas',
        author: 'Luis de Camoes'
    }
];

const dados = {
    getRequisicao: 0,
    postRequisicao: 0
}

app.get('/books', (req, res) => {
    dados.getRequisicao++;
    res.send(books);
});

app.post('/books', (req, res) => {
    dados.postRequisicao++;
    const newBook = req.body;
    if (books.findIndex(b => b.ID === newBook.ID) !== -1) {
        res.status(500).send('Existing book ID');
        return;
    }

    books.push(newBook);
    res.send('Book added');
});

app.get('/books/:bookId', (req, res) => {
    dados.getRequisicao++;
    const bookId = parseInt(req.params.bookId);
    if (isNaN(bookId)) {
        res.status(500).send('Non integer');
        return;
    }

    const book = books.find(b => b.ID === bookId);
    if (!book) {
        res.status(500).send('Invalid book ID');
        return;
    }

    res.send(book);
});

app.get('/log', (req, res) => {
    dados.getRequisicao++;
    res.send(dados);
});

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
})