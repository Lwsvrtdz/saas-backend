const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('hello bobo!!!!');
    res.send('Hello World!');
})

app.listen(5001)