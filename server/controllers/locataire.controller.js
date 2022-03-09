const Locataire = require("../models/locataire.model")

module.exports.newLocataire = async (req, res) =>{
    const { nom, prenom ,tel, CNI, adresse, prix } = req.body ;

    try {
        const locataire = await Locataire.create({nom, prenom ,tel, CNI, adresse, prix});
        res.status(201).json(`locataire added ${locataire}`)

    }
    catch(err){
        res.status(500).json(`message ${err}`)
    }
}

module.exports.allLocataire = async (req, res) => {
    try{
        const locataires = await Locataire.find() ;
        res.status(200).json(locataires)
    }
    catch(err){
        res.status(500).json(`message : ${err}`)
    }
}
module.exports.showLocataire = async (req, res) => {
    try {
        const locataires = await Locataire.findById(req.params.id);
        res.status(200).json(locataires)
    }
    catch (err) {
        res.status(500).json(`message : ${err}`)
    }
}

module.exports.updateLocataire = async (req , res) => {
    try{
        const locataire = await Locataire.findByIdAndUpdate(
            {_id : req.params.id} ,
            {
                $set: {
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    tel: req.body.tel,
                    adresse: req.body.adresse,
                    prix: req.body.prix,
                }
            },
            { new : true},
        );
        res.status(200).json({
            message: 'Update locataire',
            locataire
        })
    } catch (err) {
        res.status(500).send({ message: err });
      }
}

module.exports.removeLocataire = async (req, res) => {
    await Locataire.remove({_id : req.params.id}).exec();
    res.status(200).send("locataire deleted") 
}
