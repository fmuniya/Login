const express = require('express')
const app = express()
const bcrypt = require('bcrypt') //encrypt passwords

const users =[]

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    res.render('index.ejs',{name: 'Usr1'})
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res) => {
    
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', async (req, res) => {
    try{
     const hashedPasword = bcrypt.hash(req.body.passord, 10)  

    }catch{

    }
    req.body.email  
})

app.listen(3000)