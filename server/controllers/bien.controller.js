const Bien = require("../models/bien.model")


module.exports.newBien = async (req, res) =>{
    const { proprietaire, adresse ,etat, nombreAppart, prix } = req.body ;

    try {
        const bien = await Bien.create({proprietaire, adresse ,etat, nombreAppart, prix});
        res.status(201).json(`bien added ${bien}`)

    }
    catch(err){
        res.status(500).json(`message ${err}`)
    }
}

module.exports.allBien = async (req, res) => {
    try{
        const biens = await Bien.find() ;
        res.status(200).json(biens)
    }
    catch(err){
        res.status(500).json(`message : ${err}`)
    }
}
module.exports.showBien = async (req, res) => {
    try {
        const biens = await Bien.findById(req.params.id);
        res.status(200).json(biens)
    }
    catch (err) {
        res.status(500).json(`message : ${err}`)
    }
}

module.exports.updateBien = async (req , res) => {
    try{
        const bien = await Bien.findByIdAndUpdate(
            {_id : req.params.id} ,
            {
                $set: {
                    proprietaire: req.body.proprietaire,
                    adresse: req.body.adresse,
                    etat: req.body.etat,
                    nombreAppart: req.body.nombreAppart,
                    prix: req.body.prix,
                }
            },
            { new : true},
        );
        res.status(200).json({
            message: 'Update Bien',
            bien
        })
    } catch (err) {
        res.status(500).send({ message: err });
      }
}

module.exports.removeBien = async (req, res) => {
    await Bien.remove({_id : req.params.id}).exec();
    res.status(200).send("bien deleted") 
}
