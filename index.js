
const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://hot-onion:AZAyTCKD60di2j7n@cluster0.mde5k.mongodb.net/Hot-onion?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });




app.use(bodyParser.json()) 
app.use(cors())




client.connect(err => {
  const foodCollection = client.db("Hot-onion").collection("food-list");
  
  
    app.post('/addProduct',(req,res)=>{
        const lunch = req.body;
       foodCollection.insertMany(lunch);
    })



});






app.get('/', (req, res) => {
  res.send('Hello World!')
})







app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})