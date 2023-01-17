// * Handles initial GET request from the homepage
//* Handles POST method request for adding a new item

const express = require('express');
const router = express.Router();
const editController = require('../controllers/edit')

router.get('/:id', editController.getEdit) // get edit page of item to edit
router.get('/delete/:id', editController.deleteItem) // deletes the specific item
router.post('/update/:id', editController.updateItem) // updates the specific item using data passed on from the form.

module.exports = router