var db = require("../models");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;

module.exports = function(app) {
  // Get list of users for login page
  app.get("/", function(req, res) {
    //Query User for all usernames:
    db.User.findAll({ attribute: ["username"] }).then(function(data) {
      var obj = {
        usernames: data
      };
      res.render("login", obj);
    });
  });

<<<<<<< HEAD
  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });
  app.get("/:userid/ingredients", function(req, res) {
    db.Ingredient.findAll({
=======
  //Get a list of all needed ingredients for shopping list page:
  app.get("/:userid/shoppinglist", function(req, res) {
    db.Ingredient.findAll({
      //Query Ingredient for all ingredients with quantityNeeded above 0:
      where: {
        userId: req.params.userid,
        quantityNeeded: {
          [Op.gt]: 0
        }
      },
      include: [db.User]
    }).then(function(data) {
      var obj = {
        ingredients: data,
        userid: req.params.userid
      };
      res.render("shopping_list", obj);
    });
  });

  //Get all currently owned ingredients for inventory page:
  app.get("/:userid/inventory", function(req, res) {
    db.Ingredient.findAll({
      //Query Ingredient for all ingredients with quantityOwned above 0:
>>>>>>> master
      where: {
        userId: req.params.userid,
        quantityOwned: {
          [Op.gt]: 0
        }
      },
      include: [db.User]
    }).then(function(data) {
      var obj = {
        ingredient: data
      };
      res.render("inventory", obj);
    });
<<<<<<< HEAD
=======
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
>>>>>>> master
  });
};
