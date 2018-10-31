const router = require('express').Router();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/chatDb', {
    useNewUrlParser : true,
    useCreateIndex : true,
});



messageSchema = require('../models/message');
messageModel = mongoose.model('message', messageSchema)

//post message
router.post('/msg', async(req, res) => {
    const result = await messageModel.create(req.body);
    req.io.emit('chat', result);
    res.send(result);
});
//get message
router.get('/msg', async(req, res) => {
    const result = await messageModel.find().populate({path : 'author'})
    res.send(result)
});
//delete message
router.delete('/msg/:id', async (req, res) => {
    const result = await messageModel.remove({_id : req.params.id});
    req.io.emit('chat', result)
    res.send(result)
});


module.exports = router;
