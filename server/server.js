const express = require('express')
const dotenv = require('dotenv');
const morgan =require('morgan');
const bodyparser=require('body-parser');
const path=require('path')
const route = express.Router();
const controller = require('./server/controller/controller')

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

// log request
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs");  //ejs template system so ,also use html
// app.set("views",path.resolve(__dirname,"views/ejs")) // if using react then mention here view template

// load router
// app.use('/',require('./server/routes/router'))

app.get('/', (req, res)=> {
res.render("index")
})
app.post('/donation', (req, res)=> {
    res.render('donation');
})
app.post('/user-create', (req, res)=> {
    res.render('user');
})
// API
app.post('/api/donation/:id',controller.donate);

app.listen(PORT, () => {
    console.log("Server is running port:",PORT)
});