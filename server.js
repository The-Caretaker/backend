const express = require("express");
const app = express();
const port = 3000;
app.use(express.static('public'))
app.get('/',((req, res) => {
    res.sendFile(__dirname+'/index.html')
}))

app.get('/elements',((req, res) => {
    res.sendFile(__dirname+'/elements.html')
}))

app.get('/smth', ((req, res) => {
    res.sendFile(__dirname+'/smth.html')
}))

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);