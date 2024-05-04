const cars = require('./cars');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/products',(req, res) => { 

    const fs = require('fs')
    const writeStream = fs.createWriteStream('./log.txt', {
        flags: 'a+'
    })
    writeStream.write(`\n ${new Date()} Une requête a été adressée au serveur`)
    writeStream.close()
    res.status(200).json(cars)

})



app.listen(3000, () => {
    console.log('Server running')
})



