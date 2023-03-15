const express = require('express')
const app = express()
const port = 4000

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//mongodb+srv://admin:<password>@cluster0.8taek.mongodb.net/?retryWrites=true&w=majority
// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://eoin:eoinpassword@datarepcluster.kycv2ha.mongodb.net/test');
  // await mongoose.connect('mongodb+srv://admin:admin@cluster0.8taek.mongodb.net/?retryWrites=true&w=majority');
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const cageRental = new mongoose.Schema({
  name: String,
  time: String,
  staff: String,
  notes: String
});

const rentModel = mongoose.model('info', cageRental);

const userSchema = new mongoose.Schema({
    
  username: String,
  password: String

});

const userModel = mongoose.model("users", userSchema);

app.post('/api/cages', (req, res) => {
  console.log(req.body);

  rentModel.create({
    name: req.body.name,
    time: req.body.time,
    staff: req.body.staff,
    notes: req.body.notes
  })

  res.send('Data Recieved');
})

app.post('/api/register',(req,res)=>{
  console.log(req.body);

  
  userModel.create({
    username: req.body.username,
    password: req.body.password
  })
  
  res.send('Data Recieved');
})

app.get('/api/register', (req, res) => {
  userModel.find((error, data)=>{
    res.json(data);
  })
})

app.get('/api/cages', (req, res) => {
  rentModel.find((error, data) => {
    res.json(data);
  })
})

app.get('/api/cage/:id', (req, res) => {
  console.log(req.params.id);
  rentModel.findById(req.params.id, (error, data) => {
    res.json(data);
  })
})

app.put('/api/cage/:id', (req, res) => {
  console.log("Update: " + req.params.id);

  rentModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (error, data) => {
      res.send(data);
    })
})

app.delete('/api/cage/:id', (req, res) => {
  console.log('Deleting: ' + req.params.id);
  rentModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
    res.send(data);
  })
})

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})