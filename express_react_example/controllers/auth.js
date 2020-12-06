const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const {User} = require("../models/users")
const keys = require("../config/keys")


/**
 * Авторизация пользователя в системе
 * @param {JSON} req {"user_email": "почта_пользователя", "user_password": "пароль пользователя"}
 * @param {JSON} res {"token": "Bearer здесь_токен_авторизированного_пользователя"} или {"message": "Email или пароль не верны"}
 */
module.exports.login = async function(req, res){
    const candidate = await User.findOne({where:{
        email: req.body.email
        }
    })

    if(candidate){
        const passsword = bcrypt.compareSync(req.body.password, candidate.password)
        if(passsword){
            const token = jwt.sign({
                email: candidate.email,
                id: candidate.id
            }, keys.jwt, {expiresIn: 3600})

            res.status(200).json({
                token: "Bearer " + token
            })
        }
        else{
            res.status(404).json({
                message: "Email или пароль не верны"
            })
        }
    }
    else{
        res.status(404).json({
            message: "Email или пароль не верны"
        })
    }
}

/**
 * Регистрация пользователя в системе
 * @param {JSON} req  {"email": "почта_пользователя", "nickname": "nickname" ,"password": "пароль_пользователя", "info": "some info"}
 * @param {JSON} res  {"message": "Пользователь создан"} или {"message": "Ошибка"}
 */
module.exports.register = async function(req, res){

    const candidate = await User.findOne({where:{
        email: req.body.email
        }
    })

    if(candidate){
        res.status(409).json({
            message: "Пользователь с таким email уже существует"
        })
    }
    else{
        const salt = bcrypt.genSaltSync(10)
        try{
            await User.create({
                email: req.body.email,
                nickname: req.body.nickname,
                password: bcrypt.hashSync(req.body.password, salt),
                info: req.body.info
            })
            res.status(201).json({
                message: "Пользователь создан"
            })
        }
        catch(err){
            console.log(err)
            res.status(500).json({
                message: "Ошибка"
            })
        }
    }
}