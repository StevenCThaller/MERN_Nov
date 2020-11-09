const { User } = require('../models/models');

module.exports = {
    // C
    createUser: (req, res) => {
        User.create(req.body)
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    },
    // R
    allUsers: (req,res) => {
        User.find()
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    },
    oneUser: (req,res) => {
        User.findOne({ _id: req.params.id })
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    },
    // U
    updateUser: (req,res) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err}))
    },
    // D
    deleteUser: (req,res) => {
        User.deleteOne({ _id: req.params.id })
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    }
}