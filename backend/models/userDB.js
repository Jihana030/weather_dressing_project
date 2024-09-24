const db = require('../database/db');

exports.signUp = (data) =>{
    return new Promise((resolve, reject)=>{
        db.query(`INSERT INTO user (userID, userPW) VALUES(?,?)`, [data[0], data[1]], (err, result)=>{
            if(err) reject(err);
            else resolve(result);
        })
    })
}