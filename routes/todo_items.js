const express = require('express')
const router = express.Router()
const {getALLToDoItems} = require('../controllers/todo_items')

router.route('/').get(getALLToDoItems)

// router.get('/',(request,response) =>{
//     response.send(`List of all to-do items`)
// })

module.exports = router;