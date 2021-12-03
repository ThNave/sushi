var express = require('express');
var router = express.Router();

// Affichage d'un plateau
router.get('/:id', (req, res) => {
  var db = req.db;
  var collection = db.get('boxes');
let { id } = req.params;
  collection.find({"id":id},function(e,unBoxe) {
    res.send(unBoxe);
  });
});

// Retourne tous les plateaux
router.get('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('boxes');
  collection.find({},function(e,listeBoxes) {
     res.send(listeBoxes);
  });
});

module.exports = router;
