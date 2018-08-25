const express = require('express');
const router = express.Router()


// Bring in the Item Model
const Item = require('../../models/Item')






// @route  GET api/items
// @desc   Get all Items from Database
// @access Public

router.get('/' , (req,res) => {
Item
.find({})
.sort({date : -1}) // descending sort
.then(items => { res.json (items) })
})


// @route  POST api/items
// @desc   Create an Item / Post to Database
// @access Public

router.post('/' , (req,res) => {

const newItem = new Item({
  name: req.body.name,
})

newItem.save().then(item => res.json(item))

})



// @route  Delete api/items/:id
// @desc   Delete An Item from Database
// @access Public

router.delete('/:id' , (req,res) => {

Item
.findById(req.params.id)
.then(item => item.remove().then( () => res.json({success : true} )))
.catch( (err) => { res.status(404).json({success: false})} )

})

// Success And Reject (404) Actions for Remove Promise Responses.



module.exports = router;
