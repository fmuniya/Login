const express = require('express')
const app = express()
const bcrypt = require('bcrypt') //encrypt passwords

const initailisePassport = require('/passport-config')
const passport = require('passport')
initailisePassport(passport)
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
     const hashedPasword = await bcrypt.hash(req.body.pass, 10)  
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.mail,
            password: hashedPasword
        })
        res.redirect('/login')
    }catch{
        res.redirect('/register')

    }
    console.log(users)
    
})

app.listen(3000)