const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const bcryptjs = require('bcryptjs');
const uuid = require('uuidv4');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


const app = express();

dotenv.config();

app.use(bodyParser.json());
//app.use(cors);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
});

app.get('/',(req,res) => {
     console.log('GET HELLO WORLD')
    res.send('Hello World Heroku Deployment')
});
const port = process.env.PORT || 5000;
mongoose
.connect(
  'mongodb+srv://' + process.env.DB_USER 
                   +':' 
                   + process.env.DB_PASSWORD 
                   + '@cluster0.ubtin.mongodb.net/'
                   + process.env.DB_NAME 
                   + '?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology : true}
)
.then(() => {
  console.log('connexion à la base mongoDB Cabinet Medical')
  app.listen(port, () => {
    console.log('App listening at http://localhost:' + port)
  })
   
})
.catch(err => {
  console.log(err);
});

