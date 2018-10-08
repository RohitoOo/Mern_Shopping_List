// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const app = express();
// const items = require('./routes/api/items')
// const path = require('path')

// // Body Parser Middleware
// app.use(bodyParser.json());

// // MongoDB URI
// const db = require('./config/keys').mongoURI

// // Connect to MongoDB


// mongoose
//   .connect(db,{ useNewUrlParser: true })
//   .then( () => {
//       console.log("MongoDB Is Live And Running")
//     } )
//   .catch(err => console.log(err));

// // Use Routes From Routes Folder

// app.use('/api/items' , items)

// // Serve Static assets if in production 

// // if(process.env.NODE.ENV === 'production'){
// //   // Set static folder 
//   app.use(express.static('client/build'));

// //   app.get('*' , (req,res) => {
// //     res.sendFile(path.resolve(__dirname, 'client','build','index.html'))
// //   })
// // }

// // Heroku Deployment Setup

// const port = 5000
// app.listen(port , () =>
//   console.log(`We are live on port ${port} `)
// )


const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const items = require('./routes/api/items')

const app = express();

// Body Parse Middleware
app.use(bodyParser.json());

app.use('/api/items' , items)

// app.use(express.static('client/build'));

// Database Config 

const db = require('./config/keys.js').mongoURI

mongoose
.connect(db , { useNewUrlParser: true })
.then( () => console.log("MongoDB Connected"))
.catch(err => console.log("Error :" + err));

const port = process.env.PORT || 5000; 

app.listen(port , ()=> {
  console.log("We are live on port", port)
})

