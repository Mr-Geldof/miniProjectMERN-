const mongoose = require("mongoose");
//jeton jason web token
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	nom: { type: String, required: true },
	prenom: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

//Méthode qui renvoie le jwt pour chaque utilisateur spécifique avec la charge utile de l'id
userSchema.methods.generateAuthToken = function () {
	//recupération de la clé primaire et signature de cete dernnière et définition de validité en 7jours
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

//modéle d'utilisateur
const User = mongoose.model("user", userSchema);


// joi est une fonction de validation 
// joi-password-complexity sert à rendre nos mots de passe complexe pour beaucoup plus de sécurité
// le label c'est pour n'est pas les montré après importation 
const validate = (data) => {
	const schema = Joi.object({
		nom: Joi.string().required().label("Nom"),
		prenom: Joi.string().required().label("Prenom"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };

/* Documentations 
	Définition JWT : https://jwt.io/introduction/
	Fonctionnement JWT : https://siddharthac6.medium.com/json-web-token-jwt-the-right-way-of-implementing-with-node-js-65b8915d550e
	
*/