const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/pages'));


app.get('/', (req, res)=>{
    res.render('pages/index.html');
})

app.listen(5000, ()=>{
    console.log('Server is running 🚀');
})