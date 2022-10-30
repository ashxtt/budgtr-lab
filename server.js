const express = require('express')
const app = express()
const budget = require('./models/budget.js')
const bodyParser = require('body-parser')

const port = 8000
//MIDLEWARE
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}))



app.get('/',(req, res)=>{
    res.render('index.ejs', {budget: budget});
})

app.get('/show/:id', (req, res)=>{
    //!passing params
    let id = req.params.id;
    res.render('show.ejs', {budget: budget[id]});
})

app.get('/new', (req, res) => {
    res.render('new.ejs');
})

app.post('/new', (req, res)=>{
    new_budget = req.body;
    budget.push(new_budget);
    res.redirect('/')
})

app.listen(port, () => {
    console.log('We Live')
})

