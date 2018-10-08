// const mongoose = require('mongoose');

// var Schema = mongoose.Schema;

// // Create Schema

// const ItemSchema = new Schema({

//   name: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }

// })

// module.exports = Item = mongoose.model('item' , ItemSchema)





const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Item = mongoose.model('item' , ItemSchema);