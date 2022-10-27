const express = require('express')
const app = express()
const budget = require('./models/budget')
const bodyParser = require('body-parser')

const port = 8000

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}))
//MIDLEWARE


app.get('/',(req, res)=>{
    res.render('index.ejs', {budgets: budget});
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
    Budgets.push(new_budget);
    res.redirect('/')
})

app.listen(port, () => {
    console.log('We Live')
})

