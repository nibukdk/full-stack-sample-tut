const express = require('express'),
    cors = require('cors'),
    app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('build'))

const requestLogger = (req, res, next) => {
    console.log('Method:', req.method)
    console.log('Path:  ', req.path)
    console.log('Body:  ', req.body)
    console.log('---')
    next()
}

app.use(requestLogger)

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
    }
]


app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    const note = notes.find(note => note.id === parseInt(id))
    if (note) {
        res.json(note)
    }
    else {
        res.status(404).send()
    }
});



app.post('/api/notes', (req, res) => {
    const note = req.body
    console.log(note)
    res.json(note)
})


app.put('/api/notes:id', (req, res) => {
    const id = parseInt(req.params.id),
        note = notes.find(note => note.id == id);

    let new_note = { ...note, important: !important }
    let notes = [...notes, new_note]
    console.log(notse)
})
app.delete('/api/notes/:id', (req, res) => {
    const id = parseInt(req.params.id),
        notes = notes.filter(note => note.id !== id);

    res.status(204).end()
})

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));