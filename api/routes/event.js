const express = require('express');
const router = express.Router();
const Event = require('../models/event');

const User = require('../models/user');

let id = 1;
Event.find().then(data => {
    data.sort((a, b) => -a.id + b.id);
    if (data[0]) {
        id = data[0].id += 1;
    }
    console.log('[Event Model]: Upload id = ' + id)
});

router.get('/', function (req, res) {
    Event.find()
        .then((data) => {
            res.send(data)
        })
});

router.post('/', (req, res) => {
    const {name, description, locale, creatorId, hashtags} = req.body;
    User.find({id: creatorId})
        .then(data => {
            let event = new Event({name, description, locale, hashtags, id: id++, creator: data});
            event.save((data) => {
                res.send(data)
            });
        })
});

router.get('/:id', (req, res) => {
    Event.find({id: req.params.id})
        .then((event) => {
            res.send(event);
        });
});

router.delete('/:id', (req, res) => {
    Event.deleteOne({id: req.params.id});
    res.send('OK');
});


module.exports = router;