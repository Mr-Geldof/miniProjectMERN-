const mongoose = require("mongoose") ;
const locataireSchema = new mongoose.Schema({
    nom : {
        type : String ,
        required :true 
    },
    prenom : {
        type : String ,
        required :true 
    },
    tel : {
        type : Number ,
        required :true 
    },
    CNI : {
        type : Number ,
        required :true 
    },
    adresse :{
        type: String,
        required: true,
    },
    prix : {
        type : Number ,
        required :true 
    },

},    {
    timestamps : true 
})

module.exports = mongoose.model('Locataire' , locataireSchema)