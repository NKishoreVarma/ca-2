const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({

  title: { 
    type: String,
     required: true 
    },
  director:{
    type:String,
    require:true
  },
   genre:{
    type:String,
    require:true

   },
   releaseyear:{
    type:Number,
    require:true
   },
   availablecopies:{
    type:Number,
    require:true
   }

});

module.exports = mongoose.model("Movie", MovieSchema);