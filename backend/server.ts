import methodOverride from 'method-override'
import express from 'express'
import mongoose from 'mongoose'
import { config as dotenvConfig } from 'dotenv'
import { Request, Response } from 'express'

const PORT = process.env.PORT  || 3000
const app = express()

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to the database!'))
    .catch(err => {
        console.error('Error connecting to the database:', err)
        process.exit(1)
    })
//ROUTES
app.get('/', (req,res) =>{
    res.send('Welcome to MY recipe app')
})

const recipeController = require('./controllers/recipeController')
app.use('/recipes', recipeController)

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})

//ERROR PAGE
app.get('*', (req,res) => {
    res.send('404')
})