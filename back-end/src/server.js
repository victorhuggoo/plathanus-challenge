const express = require('express')
const routes = require('./routes')


const app = express()
app.use(routes)


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3333, () => console.log({ message: 'Connected' }))