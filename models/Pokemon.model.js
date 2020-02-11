const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const pokeSchema = new Schema({
    name: {
      type: String,
    },
    id: {
      type: Number
    },
    sprite: {
      type: String
    },
    title: {
      type: String,
    }
  }, 
  { timestamps: true }
);

const Poke = model('Poke', pokeSchema);

module.exports = Poke;