const router=require('express').Router();
const message = require('../../Model/message');
const verifyToken = require('../../jwt').verifyToken;


router.get('/listermsg',verifyToken, async (req,res)=>{
 var  results = await message.find().sort({date:1}).populate({path:'envoyeur',select:['name','lastname']}).populate({path:'destinataire',select:['name','lastname']}).exec();

 res.send(results);
});
module.exports = router;