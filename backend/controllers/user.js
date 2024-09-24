const bcrypt = require('bcrypt');
const userDB = require('../models/userDB');

const textToHash = async(text)=>{
    const saltRounds = 10;

    try {
        const hash = await bcrypt.hash(text, saltRounds);
        return hash;
    } catch(err) {
        console.error(err);
        return err;
    }
}

exports.signup = async (req, res) =>{
    const {userID, userPW} = req.body;

    try {
        const getUser = await userDB.getUser(userID);
        if(getUser.length){
            res.status(401).json('이미 존재하는 아이디입니다.');
            return;
        }
        const hash = await textToHash(userPW);
        const signUp = await userDB.signUp([userID, hash]);
        res.status(200).json('가입성공');
    } catch(err){
        console.error(err);
        res.status(500).json(err);
    }
}