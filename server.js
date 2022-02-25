const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log('Server running on prot 3000')
})


app.get('/', (req, res) => {
    res.send('test')
})