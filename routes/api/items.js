const express = require('express');
const router = express.Router();

const Item = require('../../models/Items')

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then((items) => {
            res.json(items)
        })
});

router.get('/add/:name', (req, res) => {
    const newItem = new Item({
        name: req.params.name
    });
    newItem.save().then(item => res.json(item));
});

router.get('/delete/:id', (req, res) => {

    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ sucess: true })))
        .catch(err => res.status(404).json({ sucess: false, err_msg: err.message }))

});

module.exports = router;