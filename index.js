require('dotenv').config()

const express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    Note = require('./models/notes'),
    app = express();


app.use(express.static('build'))
app.use(express.json())
app.use(cors())

const requestLogger = (req, res, next) => {
    console.log('Method:', req.method)
    console.log('Path:  ', req.path)
    console.log('Body:  ', req.body)
    console.log('---')
    next()
}



app.use(requestLogger);

app.get('/api/notes', (req, res) => {
    Note.find({})
        .then(result => res.json(result))
})

app.get('/api/notes/:id', (req, res, next) => {
    Note.findById(req.params.id).then(note => {
        if (note) {
            res.status(200).json(note)
        }
        else {
            console.log("Else block is triggered")
            res.status(404).json({ 'msg': "Item with the given id is not found" })
        }

    })
        .catch(err => next(err))
});



app.post('/api/notes', (req, res, next) => {
    const body = req.body

    const note = new Note({
        content: body.content,
        important: body.important || false,
        date: new Date(),
    })

    note.save()
        .then(savedNote => {
            res.json(savedNote.toJSON())
        })
        .catch(err => next(err))
})




app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    Note.findByIdAndDelete(id)
        .then(res => res.json({ 'msg': "The note by this id is deleted" }))
        .catch(err => res.json(err.msg))

    // res.status(204).end()
})

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint);

const errorHandler = (err, req, res, next) => {
    console.error(err.message)
    if (err.name === 'CastError') {
        return res.status(400).send({ Error: 'malformatted id' })
    }

    next(error)
}

app.use(errorHandler);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));