const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/api/v1/crystals', (req, res) => res.send('Hello Crystals!'))

app.listen(PORT, () => console.log(`Example app running!`))