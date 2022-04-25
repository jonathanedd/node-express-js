const { User } = require('../models/user.model');

const getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.status(201).json({
        users
    });
    
};

const createUser = async (req, res) => {
    // const {name } = req.body;
    // const newUser = {
    //     id: Math.floor(Math.random() * 1000),
    //     name 
    // };
    // users.push(newUser)

    const { name, email } = req.body;
    // Async / await  operation
    const newUser = await User.create({
        name: name,
        email: email
    })
    res.status(201).json({ newUser })
};

module.exports = { getAllUsers, createUser  }