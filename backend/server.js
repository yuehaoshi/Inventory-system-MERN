const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const shoppingRoutes = express.Router();
const PORT = 4000;

let Shopping = require('./shopping.model')

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/shoppings', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
}) 

shoppingRoutes.route('/').get(function(req, res) {
    Shopping.find(function(err, shoppings) {
        if (err) {
            console.log(err);
        } else {
            res.json(shoppings);
        }
    });
});

shoppingRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Shopping.findById(id, function(err, shopping) {
        res.json(shopping);
    });
});

shoppingRoutes.route('/update/:id').post(function(req, res) {
    Shopping.findById(req.params.id, function(err, shopping) {
        if (!shopping)
            res.status(404).send("data is not found");
        else
            shopping.shopping_description = req.body.shopping_description;
            shopping.shopping_responsible = req.body.shopping_responsible;
            shopping.shopping_priority = req.body.shopping_priority;
            shopping.shopping_completed = req.body.shopping_completed;

            shopping.save().then(shopping => {
                res.json('Item updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

shoppingRoutes.route('/add').post(function(req, res) {
    let shopping = new Shopping(req.body);
    shopping.save()
        .then(shopping => {
            res.status(200).json({'shopping': 'shopping added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new shopping failed');
        });
});

app.use('/shopping', shoppingRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});