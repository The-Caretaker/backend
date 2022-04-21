const express = require("express");
const app = express();
const port = 3000;
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.get('/',((req, res) => {
    res.render('index');
}))

app.get('/elements',((req, res) => {
    res.render('elements')
}))

app.get('/smth', ((req, res) => {
    res.render('smth')
}))

app.get('/catalog', ((req, res) => {
    res.render('catalog')
}))

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);