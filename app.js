//1. Import express through require method
const express = require('express');

//2. create instance express app in app variable 
const app = express();

//3. PORT stored in variable with 4000 
const PORT = 4000;

//5.DUMMY DATA
const users = [
    { id: 1, name: 'Andrew' },
    { id: 2, name: 'Steven' },
    { id: 3, name: 'Nataly' },
];

const posts = [
    {id: 1, title: 'Hello world'},
    {id: 2, title: 'hello nature'},
    {id: 3, title: 'hello people'},
];

//11.Enable incoming JSON data
app.use(express.json());

//6.enpoints with express and its callback with 2 arguments: req res
app.get('/users', (req, res) => {
    //7.res.json : automatically writes a json in response including stringify. And status 
    res.status(201).json({
        users,
    });
    //8. No need to end the response, response already ended with express js
});

//9
app.get('/posts', (req, res) => {
    res.status(200).json({ posts })
});

//10
app.post('/users', (req, res) => {
    //12.destructuring
    const {name } = req.body;

    const newUser = {
        id: Math.floor(Math.random() * 1000),
        name 
    };

    users.push(newUser)

    res.status(201).json({ newUser })
})

//4. app already listens to petitions in PORT  / and call back
app.listen(PORT, () => {
    //5. verify that app is running succesfully with a clg 
    console.log(`express app running on port ${PORT} `);
});


// Min 1:29 clase 3 20 de abril 