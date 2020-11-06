const { Fighter, OtherClass } = require('../models/models')
// import our models
const { ElectionStress } = require('../models/models');


module.exports = {
    baseRoute: (req, res) => {
        // write code to query for something in the database
        // or
        // calculate some data
        // or
        // create an array of objects and send it back
        res.json({ message: "success", data: "Hurray, it worked!"})
    },
    nameThing: (req,res) => {
        res.json({ message: "success", data: "This is the route with the name thing"})
    },
    routeParameterDemonstration: (req, res) => {
        // in react:
        // const { name } = props

        // in express
        const { name, number } = req.params;
        res.json({ message: "success", data: `Your route parameter was ${name}`});
    },
    fakeCreate: (req,res) => {
        // how do we retrieve the data submitted in the post request?
        const data = req.body;

        const NewThing = new Fighter();
        NewThing.name = data.name;
        NewThing.design = data.design;

        res.json({ message: "success", data: NewThing });
    },

    // actual routes doing actual things
    createStress: (req,res) => {
        ElectionStress.create(req.body)
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }))
    },
    
    getStresses: (req,res) => {
        // which collection to query from, and which operation
        ElectionStress.find()
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err}));


        // ElectionStress.findOne({ _id: req.params.id})
    }
}