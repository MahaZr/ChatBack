const router=require('express').Router();
const message  = require('../../Model/messagemessage');
const verifyToken = require('../../jwt').verifyToken;
router.post('/ajoutmsg/:idRecev/:idSend',verifyToken, async (req,res)=>{

var  newmsg = new message();
newmsg.destinataire = req.params.idRecev;
newcoment.envoyeur = req.params.idSend;
newcoment.corps = req.body.corps;

newmsg.save(function(err){
    if (err) {
        console.log(err);
        return res.status(500).send();
    }
    else{

    return res.status(200).send({message :'you have successufuly add a new message'});
} });     
})
module.exports = router ;