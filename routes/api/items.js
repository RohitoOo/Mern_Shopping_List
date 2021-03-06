const express = require('express');
const router = express.Router()


// Bring in the Item Model
const Item = require('../../models/Item')


// @route  GET api/items
// @description   Get all Items from Database
// @access Public

router.get('/' , (req,res) => {

  
Item
.find({})
//Mongoose Sort By Date ( 1 ascending || -1 descending )
.sort({date : -1}) // descending sort
.then(items => { res.json (items) })
})



// @route  POST api/items
// @description   Create an Item / Post to Database
// @access Public

router.post('/' , (req,res) => {

const newItem = new Item({
  name: req.body.name,
})
// Saves Item to Database and returns Same Item ( Then Grabbed by the front end )
newItem.save().then(item => res.json(item))

})

// @route  Delete api/items/:id
// @description   Delete An Item from Database
// @access Public

router.delete('/:id' , (req,res) => {

Item
// Mongoose method - findById()
.findById(req.params.id)
.then(item => item.remove().then( () => res.json({success : true, ItemDeleted : item.name} )))
.catch( (err) => { res.status(404).json({success: false, Id_Does_Not_Exist_In_Database: req.params.id})} )

})

// Success And Reject (404) Actions for Remove Promise Responses.

module.exports = router;
