const User = require ("./model");
const jwt = require ("jsonwebtoken");

exports.createUser = async (req,res)=> {
    try {
        const userObj = {
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        };
        const newUser = await User.create(userObj);
        const token = await jwt.sign({id: newUser._id}, process.env.SECRET);
        res.send({newUser, token});
    } catch (error) {
        console.log(error)
        res.send({error});
    }
};

exports.login = async (req,res)=>{
    const token = await jwt.sign({id: req.user._id},process.env.SECRET);
    console.log("tokenLogin hit", req.user);
    res.send({user: req.user, token});
}

exports.deleteUser = async (req,res)=>{
    try {
        const delUser = await User.destroy({
            where: {
                username: req.body.username
            }
        });
        res.send("user has been deleted")
    } catch (error) {
        console.log(error);
    }
};


