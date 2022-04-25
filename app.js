//1. Import express through require method
const express = require('express');



//Rouetrs
const { usersRouter } = require('./routes/users.routes');

//utils 
const { db } = require('./utils/database')

//2. create instance express app in app variable 
const app = express();

//3. PORT stored in variable with 4000 
const PORT = 4000;

//11.Enable incoming JSON data
app.use(express.json());

// Endpints
// http://localhost:4000/api/v1/users 
app.use('/api/v1/users', usersRouter)

//9
// app.get('/posts', (req, res) => {
//     res.status(200).json({ posts })
// });


// resolved Exercise 
app.post('/posts', (req, res) => {
    const { title } = req.body;
    const newPost = {
        id: Math.floor(Math.random() * 1000),
        title
    };

    posts.push(newPost)

    res.status(202).json({ newPost })
});

 

db.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch( err => console.log(err))

db.sync()
    .then(() => console.log('synced'))
    .catch( err => console.log(err))

//4. app already listens to petitions in PORT  / and call back
app.listen(PORT, () => {
    //5. verify that app is running succesfully with a clg 
    console.log(`express app running on port ${PORT} `);
});


// Min 1:29 clase 3 20 de abril 