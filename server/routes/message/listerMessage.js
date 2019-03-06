const router=require('express').Router();
const message = require('../../Model/message');
const verifyToken = require('../../routes/jwt').verifyToken;


router.get('/listermsg/idUser1/IdUser2',verifyToken, async (req,res)=>{
 var  results = await message.find({ "destinateur": { $in : [req.params.idUser1,req.params.idUser2]}, "envoyeur": { $in: [req.params.idUser1,req.params.idUser2]} }).sort({date:1}).populate({path:'envoyeur',select:['name','lastname']}).populate({path:'destinataire',select:['name','lastname']}).exec();

 res.send(results);
});
module.exports = router;