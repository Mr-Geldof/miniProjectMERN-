const mongoose = require("mongoose") ;
const bienSchema = new mongoose.Schema({
    proprietaire : {
        type : String ,
        required :true 
    },
    adresse : {
        type : String ,
        required :true 
    },
    etat : {
        type : String ,
        required :true 
    },
    nombreAppart :{
        type: Number,
    },
    prix:{
        type: Number,
    },

},    {
    timestamps : true 
})

module.exports = mongoose.model('Bien' , bienSchema)