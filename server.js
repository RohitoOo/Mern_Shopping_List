const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const items = require("./routes/api/items")
const cors = require("cors")
const app = express()

app.use(cors())
// Body Parse Middleware
app.use(express.json());

app.use("/api/items", items)

app.use(express.static("client/build"))

// Database Config

const db = require("./config/keys.js").mongoURI

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Error :" + err))

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log("We are live on port", 5000)
})
