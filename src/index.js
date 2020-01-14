const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes.js')

mongoose.set("useFindAndModify", false);
mongoose.connect("mongodb://localhost:27017/omnistack10", {
  useCreateIndex: true, //sem essa config da erro
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json())
app.use(routes)

app.listen(3000,e => {
    if(e) console.log(e)
})