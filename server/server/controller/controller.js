let Donationdb = require('../model/donation');
let userDB = require('../model/user');

// Donation
exports.donate = (req,res)=>{

    const donation = new Donationdb({
        userName : req.body.userName,
        place : req.body.place,
        amount: req.body.amount,
    })
    donation
        .save(donation)
        .then(data => {
            
            // message show thanks for donation
            res.redirect('/');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while donating in stripe"
            });
        });

}

// User
exports.user = (req,res)=>{

    const user = new userDB({
        userName : req.body.userName,
        email : req.body.email,
        role: req.body.role,
        password: req.body.password,
        amtDonated: req.body.amtDonated,
    })
    user
        .save(user)
        .then(data => {
            
            // message show thanks for donation
            res.redirect('/');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating user"
            });
        });

}

exports.user = (req,res)=>{

    const user = new userDB({
        userName : req.body.userName,
        email : req.body.email,
        role: req.body.role,
        password: req.body.password,
        amtDonated: req.body.amtDonated,
    })
    user
        .save(user)
        .then(data => {
            
            // message show thanks for donation
            res.redirect('/');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating user"
            });
        });

}

