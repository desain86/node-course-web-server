const express = require("express");
const hbs = require("hbs");
const fs = require('fs');
var app = express();



app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now} : ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n');
    next();
});

// app.use((req, res, next) => {
//     res.render('maint.hbs');
// });

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.get('/', (req, res) => {
       res.render('about.hbs',{
       title: 'Home',
       date: new Date().getFullYear()
   }); 
});

app.get('/about', (req, res) => {
   res.render('about.hbs',{
       title: 'About Page',
       date: new Date().getFullYear()
   }); 
});

app.get('/help', (req, res) => {
    res.render('help.hbs', {
        title: 'Help Page',
       date: new Date().getFullYear()
    });
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs',{
       title:'Projects' 
    });
});

app.listen(process.env.PORT, () => {
    console.log(__dirname);
});