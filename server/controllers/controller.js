const { User, validate } = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports.newUser = async (req, res) =>{
    try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
}

module.exports.allUser = async (req, res) => {
    try{
        const users = await User.find() ;
        res.status(200).json(users)
    }
    catch(err){
        res.status(500).json(`message : ${err}`)
    }
}


module.exports.updateUser = async (req , res) => {
    try{
        await User.findByIdAndUpdate(
            {_id : req.params.id} ,
            {
                $set: {
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    email: req.body.email,
                    password: req.body.password,
                }
            },
            { new : true},
            (err, data) => {
                (!err)? res.status(200).json(data) : res.status(500).json(`message : ${err}`)
            }
        )
    } catch (err) {
        res.status(500).send({ message: err });
      }
}

module.exports.removeUser = async (req, res) => {
    await User.remove({_id : req.params.id}).exec();
    res.status(200).send("user deleted") 
}
