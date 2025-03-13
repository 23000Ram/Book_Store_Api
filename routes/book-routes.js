const express = require('express');
const {getAllBooks, getSingleBooks, addNewBooks, updateBooks,deleteBooks} = require('../controllers/book-controller')

const router = express.Router()

router.get('/get',getAllBooks);
router.get('/get/:id',getSingleBooks);
router.post('/add',addNewBooks);
router.put('/update/:id',updateBooks);
router.delete('/delete/:id',deleteBooks);

module.exports = router;