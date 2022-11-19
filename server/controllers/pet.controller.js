const { Pet } = require("../models/pet.model")

module.exports.findAll = (req, res) => {
  Pet.find().sort({name:1})
    .then((pets) => res.json({message:"",pets:pets}))
    .catch(err=>res.json({message:"Algo salio mal",errors:err.errors}))
}

module.exports.findOne = (req, res) => {
  const { id } = req.params
  Pet.findOne({_id:id})
    .then(pet => res.json({message:"", pet:pet}))
    .catch(err=>res.json({message:"Algo salio mal",errors:err.errors}))
}

module.exports.createOne = (req, res) => {
  const { body } = req;
  Pet.create(body)
    .then(pet => res.json({message:"", pet: pet}))
    .catch(err=>res.json({message:"Algo salio mal",errors:err.errors}))
}

module.exports.updateOne = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  Pet.findByIdAndUpdate({_id:id}, body, {new: true, runValidators: true})
    .then(pet => res.json({message:"", pet:pet}))
    .catch(err=>res.json({message:"Algo salio mal",errors:err.errors}))
}

module.exports.deleteOne = (req, res) => {
  const { id } = req.params;
  Pet.findByIdAndDelete({_id:id})
    .then(result => res.json({message:"", result:result}))
    .catch(err=>res.json({message:"Algo salio mal",errors:err.errors}))
}