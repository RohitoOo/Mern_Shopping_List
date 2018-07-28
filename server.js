const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const items = require('./routes/api/items')

// Body Parser Middleware
app.use(bodyParser.json());

// MongoDB URI
const db = require('./config/keys').mongoURI

// Connect to MongoDB



mongoose
  .connect(db,{ useNewUrlParser: true })
  .then( () => {
      console.log("MongoDB Is Live And Running")
    } )
  .catch(err => console.log(err));

// Use Routes From Routes Folder

app.use('/api/items' , items)



//Testing
app.get('/' , () => {
console.log('Server Works')
})



const port = process.env.PORT || 5000
app.listen(port , () =>
  console.log(`We are live on port ${port} `)
)
