/**
 * Controller for user methods
 */
var config = require('../config/config');

/**
 * Create JSON response with the found user (req.user)
 */
exports.read = function(req, res) {
    res.json(req.user);
};

/**
 * Create JSON response with all users
 */
var users = [
    {name: "Kleine boom"},
    {name: "Grote boom"},
    {name: "Struik"}
];

exports.list = function(req, res) {

    console.log("voor nu geven we altijd dezelfde lijst terug met users");

    res.json(users);
};

exports.create = function(req, res){
    var newUser = req.body;
    users.push(newUser);
    res.json(newUser);
};

exports.else = function(req, res){

    var users = [
        {name: "rrrrrrrrrr"}
    ];

    res.json(users);
};

/**
 * Function to lookup a particular user and store it in the request object
 * @param req - the request object
 * @param res - our response to the request
 * @param next - the next function that needs to be executed
 * @param userID - the userID from the URL
 */
exports.getUserByID = function(req, res, next, userID) {

    /** als we mongodb gebruiken dan gaan we in deze functie de user opzoeken */

    console.log("je zoekt de user met id: " + userID);

    console.log("voor nu geef ik je een standaard object terug");
    req.user = {
        name: "Berend",
        age: 33
    };

    /** de volgende Middleware/functie mag aan de slag */
    next();

};