const express = require('express')
const app = express()
const port = 8000

app.use(express.static('./public'));

app.get('/',(req, res)=>{
    res.render('index.ejs', {budgets: Budget});
})

app.get('/show/:id', (req, res)=>{
    
})

app.listen(port, () => {
    console.log('We Live')
})

