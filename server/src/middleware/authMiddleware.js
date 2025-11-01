const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const authMiddleWare = (req, res, next) => {

    const token = eq.headers.token.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, decoded){
        if(err){
            return res.status(404).json({
                message: "The authemtication",
                status: err
            })
        }
        const { payload} = user
        if(payload?.isAdmin){
            next()
        }else{
            return res.status(404).json({
                message: "The authemtication",
                status: err
            })
        }
    });
}
const authUserMiddleWare = (req, res, next) => {

    const token = eq.headers.token.split(' ')[1]
    const userId = req.params.id
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, decoded){
        if(err){
            return res.status(404).json({
                message: "The authemtication",
                status: err
            })
        }
        const { payload} = user
        if(payload?.isAdmin || payload?.id == userId){
            next()
        }else{
            return res.status(404).json({
                message: "The authemtication",
                status: err
            })
        }
    });
}

module.export ={
    authMiddleWare,
    authUserMiddleWare
} 