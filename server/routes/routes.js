const router = require("express").Router() ; 
const userController = require("../controllers/controller");
const bienConltroller = require("../controllers/bien.controller");
const locataireConltroller = require("../controllers/locataire.controller");
const userLogin = require("../controllers/auth");

//Routes creation et manipulation utlisateur 
router.post('/new-user', userController.newUser ) ;
router.get('/all-user' , userController.allUser) ;
router.put('/update-user/:id' , userController.updateUser) ;
router.delete('/remove-user/:id' , userController.removeUser) ;

//ROUTES AUTH
router.post('/login',userLogin.signIn);


//Routes creation et manipulation biens
router.post('/new-bien', bienConltroller.newBien ) ;
router.get('/all-bien' , bienConltroller.allBien) ;
router.put('/update-bien/:id' , bienConltroller.updateBien) ;
router.delete('/remove-bien/:id' , bienConltroller.removeBien) ;
router.get('/show-bien/:id', bienConltroller.showBien);


//Routes creation et manipulation locataire
router.post('/new-locataire', locataireConltroller.newLocataire ) ;
router.get('/all-locataire' , locataireConltroller.allLocataire) ;
router.put('/update-locataire/:id' , locataireConltroller.updateLocataire) ;
router.delete('/remove-locataire/:id' , locataireConltroller.removeLocataire) ;
router.get('/show-locataire/:id', locataireConltroller.showLocataire);

module.exports = router ;