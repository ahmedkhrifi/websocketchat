const mongoose = require('mongoose');

const message = new mongoose.Schema({

    message : String,
    name : String,
    //username : String,
    date : {
        type :Date,
        default : Date.now()
    },


});

module.exports = message;
