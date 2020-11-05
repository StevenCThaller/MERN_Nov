const { Fighter, OtherClass } = require('../models/models')

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
    }
}