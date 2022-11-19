const mongoose = require('mongoose');

/* para que el nombre sea único */
const uniqueValidator = require("mongoose-unique-validator")

const PetSchema = new mongoose.Schema(
  {
    name:{type: String,
      required:[true,"El nombre es un campo requerido"],
      minlength:[3,"El nombre debe tener mínimo 3 caracteres" ],
      unique:true
    },
    type:{type: String,
      required:[true,"El tipo es requerido"],
      minlength:[3,"El tipo debe tener mínimo 3 caracteres" ]
    },
    description:{type: String,
      requeried:[true,"La descripcion es requerida"],
      minlength:[3,"La descripción debe tener mínimo 3 caracteres" ]
    },
    skills:{
      type: Array,
    },
    likes:{
      type: Number,
      default:0
    }
  },
  {timestamps:true}
);

PetSchema.plugin(uniqueValidator,{message:"Este nombre ya existe, ingrese otro"});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = { PetSchema, Pet};