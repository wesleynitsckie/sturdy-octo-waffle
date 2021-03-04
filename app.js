const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Got a message')
})

app.listen(3000, () => {
    console.log('Server Running');
});
