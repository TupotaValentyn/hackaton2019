const express = require('express');
const router = express.Router();
const Event = require('../models/event');

let id = 0;
Event.find().then(data => {
    data.sort((a, b) => -a.id + b.id);
    id = data[0].id += 1;
    console.log('[Event Model]: Upload id = ' + id)
});

router.get('/', function (req, res) {
    Event.find()
        .then((data) => {
            let events = data.map( async (e) => {
                //TODO: create creators from creatorsId
                return e
            });
            res.send(events)
        })
});

router.post('/', (req, res) => {
    const {name, description, locale, creatorId, hashtags} = req.body;
    let event = new Event({name, description, locale, creatorId, hashtags, id: id++});
    event.save((data)=> {
        res.send(data)
    });
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