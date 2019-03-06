const router = require('express').Router();
const Users = require('../../Model/user');
const verifyToken = require('../../routes/jwt').verifyToken;

/**
 * @swagger
 *
 * /dash/listerUser/{idUsers} :
 *   get:
 *     description: liste des utilisateur 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: idUsers
 *         description: id of the athentified user.
 *         in: path
 *         required: true
 *         type: string
 *      
 *       
 *     responses:
 *       200:
 *         description: les liste des utilisateur inscrit
 */
router.get('/listerUser',verifyToken, async (req, res) => {
    const idU=req.params.iduser;
    
    var utilisateur = await Users.find().exec();
    res.send(utilisateur);
}
)

module.exports = router ;