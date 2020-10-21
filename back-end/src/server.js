const express = require('express')
const app = express()

app.get('/')

app.listen(3333, () => console.log({ message: 'Connected' }))