const express = require('express')
const routes = require('./routes')
const path = require('path')


const app = express()


app.use(routes)
app.use(express.json())


app.listen(3333, () => console.log({ message: 'Connected' }))